import React from "react";
import "../styles/Friends.css";

const Friends = ({ friends }) => (
  <div className="friends-card">
    <div className="friends-header">
      <h3 className="friends-title">Friends</h3>
      <span className="friends-count">{friends.length} friends</span>
    </div>
    <div className="friends-grid">
      {friends.map((friend) => (
        <div key={friend.id} className="friend-item">
          <img src={friend.pic} alt={friend.name} className="friend-pic" />
          <p className="friend-name">{friend.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Friends;
