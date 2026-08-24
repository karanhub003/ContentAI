import React from 'react'
import Input from '../common/Input'
import Button from '../common/Button'

export default function Header() {
  return (
    <div className='HeaderContainer border w-full '>
        <div className="navBar flex">
            <div className="leftSideContainer flex">
                <div className="hamburgerIcon">
                   <i class="fa-solid fa-bars"></i> 
                </div>
                <div className="searchBarContainer">
                    <div className="searchWrapperBox">
                        <div className="div"><i class="fa-solid fa-magnifying-glass"></i></div>
                        <Input>Search anything...</Input>
                    </div>
                </div>
            </div>
            <div className="rightSideContainer flex">
                <Button><i class="fa-solid fa-plus"></i> Create New</Button>
                <div className="notificationContainer">
                    <div className="bellIconImg">
                     <i class="fa-solid fa-bell"></i>  
                     <div className="notificationNumberBox">3</div>
                    </div>
                </div>
            <div className="profileContainer">
               <div className="profileImgBox">
                    <img src="#" alt="profileImg" />
                </div> 
                <div className="userInfoBox">
                    <div className="userInfo">
                        <h3>Karan Singh</h3>
                    <p>Admin</p>
                    </div>
                 <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
