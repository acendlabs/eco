import React from 'react'
import './dispose.css'
import avatar from '../images/pictureavatar.png'
import logolight from '../images/logolight.png'
import search from '../images/search.png'
function Dispose  () {
  return (
    <div className="bggroup">
      <img className='bgimg' src={logolight} alt="" />
    
      <div className='dispose'>
          <h2>Dispose</h2>
          <div className="inputgroup">
            <input type="text" placeholder='Search for a display name, weight or distance' />
            <button className='searchbtn'> Search<img src={search} alt="" /> </button>
          </div>
          <div className="pool">
            <h3>Avaible Collectors in pool</h3>
            <button>Join pool</button>
          </div>
          <div className="itemgroup">
            <div className="headers">
              <h3>User</h3>
              <h3>Max.Weight</h3>
              <h3>Min.Weight</h3>
              <h3>Distance</h3>
            </div>
            <div className="item">
              <div className="imggroup">
                <img src={avatar} alt="" />
                <p>white lion</p>
              </div>
              <p>5kg</p>
              <p>2kg</p>
              <p>10mins away</p>
              <button>Request</button>
            </div>
            <div className="item">
              <div className="imggroup">
                <img src={avatar} alt="" />
                <p>white lion</p>
              </div>
              <p>5kg</p>
              <p>2kg</p>
              <p>10mins away</p>
              <button>Request</button>
            </div>
            <div className="item">
              <div className="imggroup">
                <img src={avatar} alt="" />
                <p>white lion</p>
              </div>
              <p>5kg</p>
              <p>2kg</p>
              <p>10mins away</p>
              <button>Request</button>
            </div>
            <div className="item">
              <div className="imggroup">
                <img src={avatar} alt="" />
                <p>white lion</p>
              </div>
              <p>5kg</p>
              <p>2kg</p>
              <p>10mins away</p>
              <button>Request</button>
            </div>
            <div className="item">
              <div className="imggroup">
                <img src={avatar} alt="" />
                <p>white lion</p>
              </div>
              <p>5kg</p>
              <p>2kg</p>
              <p>10mins away</p>
              <button>Request</button>
            </div>
            <div className="item">
              <div className="imggroup">
                <img src={avatar} alt="" />
                <p>white lion</p>
              </div>
              <p>5kg</p>
              <p>2kg</p>
              <p>10mins away</p>
              <button>Request</button>
            </div>
          </div>
      </div>    
      
    </div>
  )
}
export default Dispose
