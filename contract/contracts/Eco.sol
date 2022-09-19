// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

interface ExtendedIERC721 is IERC721 {
  function safeMint(address) external;
}

contract Eco is AccessControl {
  bytes32 public constant RECYCLER = keccak256("RECYCLER");
  bytes32 public constant COLLECTOR = keccak256("COLLECTOR");
  bytes32 public constant DISPOSER = keccak256("DISPOSER");
  bytes32 public constant VERIFIER = keccak256("VERIFIER");

  IERC20 public immutable acendToken;
  ExtendedIERC721 public immutable verifiedRecyclerToken;

  struct User {
    bytes32 role;
    address userAddress;
    bytes userMetadata;
  }

  struct Dispose {
    User user;
    bool open;
    string[3] location; // longitude, latitude, location address
    bool assignedCollector;
    address collector;
  }

  mapping(address => User) public userToRole;
  mapping(address => bool) public isVerified;
  mapping(address => bool) private isCollectorVisible;

  User[] public approvedRecyclers;
  User[] public collectors;
  Dispose[] public wastePool;
  Dispose[] public collectedPool;

  event UserCreated();
  event UserMetadataUpdated();
  event UserDeleted();
  event NewDisposal();

  constructor(address _acend_Token, address _verified_Recycler_Token) {
    acendToken = IERC20(_acend_Token);
    verifiedRecyclerToken = ExtendedIERC721(_verified_Recycler_Token);
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _grantRole(VERIFIER, msg.sender);
  }

  // user management check.

  function createUser(bytes32 _role, bytes memory _userMetadata) public {
    // user must be a new user
    require(userExists() == false, "can only create role once, delete or update role instead");
    User memory _user = User({role: _role, userAddress: msg.sender, userMetadata: _userMetadata});
    userToRole[msg.sender] = _user;
    if (_role == DISPOSER) _grantRole(_role, msg.sender);
    if (_role == COLLECTOR) grantCollectorPrivilages(_user);
    emit UserCreated();
  }

  function updateUser(bytes memory _userMetadata) public {
    require(userExists(), "user must exist. cannot update inexisting data");
    userToRole[msg.sender].userMetadata = _userMetadata;
    emit UserMetadataUpdated();
  }

  function deleteUser() public {
    require(userExists(), "user must exist. cannot delete inexisting data");
    delete userToRole[msg.sender];
    emit UserDeleted();
  }

  // complete
  function userExists() public view returns (bool) {
    if (bytes32(userToRole[msg.sender].role).length == 0) {
      return false;
    }
    return true;
  }

  // diposer management

  function createDisposalRequest(string[3] memory location) public onlyRole(DISPOSER) {
    Dispose memory _new = Dispose({
      location: location,
      open: true,
      user: userToRole[msg.sender],
      assignedCollector: false,
      collector: address(0)
    });
    wastePool.push(_new);
    emit NewDisposal();
  }

  function createExpressDisposalRequest(string[3] memory location, address _collector)
    public
    onlyRole(DISPOSER)
  {
    require(
      isCollectorVisible[_collector] == true,
      "collector is currently unavailable to take requests"
    );
    Dispose memory _new = Dispose({
      location: location,
      open: true,
      user: userToRole[msg.sender],
      assignedCollector: true,
      collector: _collector
    });
    collectedPool.push(_new);
    emit NewDisposal();
  }

  // collectors management

  function dispatchCollector(uint256 wasteIndex) public onlyRole(COLLECTOR) {
    // collector requests a collection from disposal pool
    require(wastePool.length < wasteIndex, "waste must exist before collection");
    Dispose memory waste = wastePool[wasteIndex];
    waste.assignedCollector = true;
    waste.collector = msg.sender;
    // adjust wastepool.
    removeWasteFromPool(wasteIndex, 0);
    collectedPool.push(waste);
  }

  function removeWasteFromPool(uint256 index, uint8 poolId) internal {
    if (poolId == 0) {
      require(wastePool.length > 1, "unable to remove");
      wastePool[index] = wastePool[wastePool.length - 1];
    }
    if (poolId == 1) {
      require(collectedPool.length > 1, "unable to remove");
      collectedPool[index] = collectedPool[collectedPool.length - 1];
    }
  }

  function setCollectorVisibility(bool visibilty) public onlyRole(COLLECTOR) {
    // only collectors, tells the disposers that he is/is not ready to collect.
    isCollectorVisible[msg.sender] = visibilty;
  }

  function rejectExpressDisposalRequest(uint256 wasteIndex) public onlyRole(COLLECTOR) {
    // rejects disposal request.
    require(collectedPool.length < wasteIndex, "waste must exist before rejection");
    Dispose memory waste = collectedPool[wasteIndex];
    waste.assignedCollector = false;
    waste.collector = address(0);
    removeWasteFromPool(wasteIndex, 1);
    wastePool.push(waste);
  }

  function matchCollectorWithRecycler() public {
    // matches a collector with the nearest recycler
    // called when disposalrequest is emited.
  }

  function grantCollectorPrivilages(User memory _user) private {
    require(
      hasRole(COLLECTOR, msg.sender) == false,
      "must only be called if you are not a collector"
    );
    // a user can only be disposer, collector, recycler, collector-recycler at once
    bool isDisposer = hasRole(DISPOSER, msg.sender);
    if (isDisposer) _revokeRole(DISPOSER, msg.sender);
    _grantRole(COLLECTOR, msg.sender);
    collectors.push(_user);
  }

  // recycler management

  function requestResource() public {
    // requests plastic from a visible collector.
  }

  function onRecyclerReceive() public {
    // calculate token ratio to weight of plastic in kg.
  }

  function dispatchTokens() internal {
    // dispatches tokens to collector and depositor onRecyclerRecieve
  }

  // admin area

  function verifyRecycler(address _recycler) private onlyRole(VERIFIER) {
    _grantRole(RECYCLER, _recycler);
    verifiedRecyclerToken.safeMint(_recycler);
    approvedRecyclers.push(userToRole[_recycler]);
  }

  // getter functions
  function getAllVisibleCollectors() public view returns (User[] memory) {
    // returns all the availaible collectors
    User[] memory allVisibleCollectors = new User[](collectors.length);
    for (uint256 i = 0; i < collectors.length; i++) {
      if (isCollectorVisible[collectors[i].userAddress]) {
        allVisibleCollectors[i] = collectors[i];
      }
    }
    return allVisibleCollectors;
  }

  function getAllDisposalRequest() public view returns (Dispose[] memory) {
    // returns all the waste from the wastePool
    Dispose[] memory _wastePool = new Dispose[](wastePool.length);
    for (uint256 i = 0; i < wastePool.length; i++) {
      _wastePool[i] = wastePool[i];
    }
    return _wastePool;
  }

  function getAllCollectedWastes() public view returns (Dispose[] memory) {
    // returns all collected wastes and their collectors
    Dispose[] memory _collectedPool = new Dispose[](collectedPool.length);
    for (uint256 i = 0; i < collectedPool.length; i++) {
      _collectedPool[i] = collectedPool[i];
    }
    return _collectedPool;
  }
}
