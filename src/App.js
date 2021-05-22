import React from "react";
import Navbar from "./components/Navbar";
import EmotionListDisplay from "./components/EmotionsListDisplay";
import "./App.css";
// import SampleFirebaseComponent from "./components/SampleFirebaseComponent";

const App = () => {
  return (
    <div>
      <Navbar />
      <h1 style={{textAlign: 'center'}}>Which word most closely represents how you feel?</h1>
      <EmotionListDisplay /> {/*component to display list of emotion*/}
      {/* <SampleFirebaseComponent></SampleFirebaseComponent> */}
    </div>
  );
};

export default App;
