import React from "react";
import "../styles/ProfileHeader.css";

const ProfileHeader = ({ name, profilePic, coverPhoto, friendsCount }) => (
  <div className="profile-header-container">
    <div className="cover-photo-container">
      <img src={coverPhoto} alt="Cover" className="cover-photo" />
    </div>
    <div className="profile-details">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="friends-count">{friendsCount} friends</p>
        <div className="profile-buttons">
          <button className="profile-button primary-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="button-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0 1 1 0 002 0zM12.793 14.793a1 1 0 01-1.414-1.414L14.586 10H11a1 1 0 110-2h4a1 1 0 011 1v4.586l1.207 1.207a1 1 0 010 1.414z" />
            </svg>
            <span>Add Friend</span>
          </button>
          <button className="profile-button secondary-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="button-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>Story</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileHeader;
