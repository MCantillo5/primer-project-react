import React from "react";

function Profile (){

  return(
    <div className="profiles">
      <div className="group-profile">
        <img src={'iconprofile.png'} className="icon-profile" alt="icon"></img>
        <div className="user">
          <h3>Mariela Cantillo</h3> 
          <p>Colombia</p>
        </div>
        <hr className="hr-user" color="#27457c"/>
        <div className="description">
          <div className="group-desc">
            <h3 className="desc">80K</h3>
            <p className="text">Followers</p>
          </div>
          <div className="group-desc">
            <h3 className="desc">803K</h3>
            <p className="text">Likes</p>
          </div>
          <div className="group-desc"> 
            <h3 className="desc">1.4K</h3>
            <p className="text">Photos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;