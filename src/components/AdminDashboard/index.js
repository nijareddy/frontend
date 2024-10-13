import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate=useNavigate()
  const handleSocialMediaClick = (socialMedia) => {

    if(socialMedia === "facebook"){
        navigate(`/social-media-page/1`)
    }else{
        navigate('/social-media-page/2')
    }
   
  };

  return (
    <div className="container">
      <h2 className="heading">Admin Dashboard</h2>
      <div>
        <button
          onClick={() => handleSocialMediaClick("facebook")}
          className="submit-btn"
        >
          Facebook
        </button>
        <button
          onClick={() => handleSocialMediaClick("instagram")}
          className="submit-btn"
        >
          Instagram
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
