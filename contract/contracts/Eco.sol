// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Eco {
  IERC20 public immutable acendToken;

  struct Role {
    bytes32 id;
    string role;
    bytes roleMetadata;
  }

  mapping(address => Role) roleToUser;
  Role[] public approvedRecyclers;

  event RoleCreated();
  event NewDisposal();

  constructor(address _acend_Token) {
    acendToken = IERC20(_acend_Token);
  }

  // user management

  function createUser(string memory _role) public {
    require(!userExists(), "can only create role once, delete or update role instead");
    emit RoleCreated();
  }

  function updateUser() public {
    // update users data
  }

  function deleteUser() public {}

  function userExists() public returns (bool) {
    // check if a user exists.
  }

  // diposer management

  function createDisposalRequest(string[] memory location) public {
    // create disposal
    emit NewDisposal();
  }

  function createExpressDisposalRequest(bytes32 colletorId) public {}

  // collectors management

  function dispatchCollector() public {
    // collector request a collection from dispoal pool
  }

  function setCollectorVisibility() public {
    // only collectors, tells the disposers that he is/is not ready to collect.
  }

  function rejectExpressDisposalRequest() public {
    // rejects disposal request.
  }

  function matchCollectorWithRecycler() public {
    // matches a collector with the nearest recycler
    // called when disposalrequest is emited.
  }

  // recycler management

  function requestResource() public {
    // requests plastic from a visible collectoer.
  }

  function onRecyclerReceive() public {
    // calculate token ratio to weight of plastic in kg.
    //
  }

  function dispatchTokens() public {
    // dispatches tokens to collector and depositor onRecyclerRecieve
  }

  // admin area

  function verifyRecycler() private {
    // only admin
    // mints an nft to a recycler.
  }

  // getter functions
  function getAllVisibleCollectors() public {}

  function getAllDisposalRequest() public {}
}
