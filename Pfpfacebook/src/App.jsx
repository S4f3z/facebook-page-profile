import React, { useState } from "react";
import Header from "./components/Header";
import ProfileHeader from "./components/ProfileHeader";
import Tabs from "./components/Tabs";
import Intro from "./components/Intro";
import Posts from "./components/Posts";
import Friends from "./components/Friends";
import Photos from "./components/Photos";
import "./styles/App.css";

const userData = {
  name: "Adham",
  profilePic: "profile.jpg",
  coverPhoto: "cover.jpg",
  bio: "Passionate wala.",
  city: "Pagadian City",
  work: "Wala",
  education: "Westprime",
  friends: [
    {
      id: 1,
      name: "Rochel Herongco",
      pic: "indaepic.jpg",
    },
    {
      id: 2,
      name: "Dev Caraballo",
      pic: "devs.jpg",
    },
    {
      id: 3,
      name: "Junamie Adil Galabin",
      pic: "galabin.jpeg",
    },
    {
      id: 4,
      name: "Mark Collado",
      pic: "mark.jpg",
    },
    {
      id: 5,
      name: "Adham Damada Sahibul",
      pic: "adham.jpeg",
    },
    {
      id: 6,
      name: "Lyka Tejoc Beton",
      pic: "lyca.jpeg",
    },
  ],
  photos: ["two.jpg", "three.jpg", "four.jpg", "five.jpg", "six.jpg"],
  posts: [
    {
      id: 1,
      author: "Adham",
      profilePic: "profile.jpg",
      timestamp: "2h",
      content: "scroll pa sir",
    },
    {
      id: 2,
      author: "Adham",
      profilePic: "profile.jpg",
      timestamp: "5h",
      content: "Jogging.",
      image: "jpgg.jpeg",
    },
    {
      id: 3,
      author: "Adham",
      profilePic: "profile.jpg",
      timestamp: "1d",
      content: "Hi Sir maniwang, Goods naba ni?",
    },
  ],
};

const App = () => {
  const [activeTab, setActiveTab] = useState("Posts");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Posts":
        return (
          <>
            <Intro {...userData} />
            <Photos photos={userData.photos} />
            <Friends friends={userData.friends} />
            <Posts posts={userData.posts} />
          </>
        );
      case "About":
        return <Intro {...userData} />;
      case "Friends":
        return <Friends friends={userData.friends} />;
      case "Photos":
        return <Photos photos={userData.photos} />;
      default:
        return (
          <div className="p-4 text-center text-gray-500">
            Content for {activeTab} tab.
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <ProfileHeader
          name={userData.name}
          profilePic={userData.profilePic}
          coverPhoto={userData.coverPhoto}
          friendsCount={userData.friends.length}
        />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="tab-content">{renderTabContent()}</div>
      </main>
    </div>
  );
};

export default App;
