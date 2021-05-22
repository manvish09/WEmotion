import React, { useState } from "react";
import EmotionCard from "./EmotionCard";
import { makeStyles } from "@material-ui/core/styles";
import Popup from "./popup";

const EmotionListDisplay = () => {
  const classes = useAppStyles();
  const [currentEmotionActive, setCurrentEmotionActive] = useState("surprise"); //emotion card clicked on
  const [level2Active, setLevel2Active] = useState(false);
  const [level3Active, setLevel3Active] = useState(false);
  const [popUp, setpopUp] = useState(false);

  // togglePop = () => {
  //   setSeen({

  //   })
  // }

  //simple emotions
  const emotionList = [
    "surprise",
    "bad",
    "afraid",
    "angry",
    "disgust",
    "sad",
    "happy",
  ];

  //PLACEHOLDER FOR DB -second level of words, depending on what been clicked
  const level2Words = {
    surprise: ["shock", "confusion", "amazement", "excitement"],
    happy: [
      "playful",
      "content",
      "curiosity",
      "proud",
      "acceptance",
      "powerful",
      "care",
      "trust",
      "hope",
    ],
    sad: ["lonely", "vulnerable", "Despiar", "guilty", "depression", "hurt"],
    disgust: ["disapproval", "disdain", "sick", "repulsion"],
    angry: [
      "mistrust",
      "shame",
      "jealous",
      "mad",
      "irritation",
      "frustration",
      "distant",
      "critical",
    ],
    bad: ["bordedom", "busy", "stress", "tired"],
    afraid: ["scared", "anxious", "insecure", "weak", "shaky", "nervous"],
  };

  //colors for all emotions (would be in database)
  const emotionListColor = {
    surprise: "#FE886A",
    bad: "#A3DEE8",
    afraid: "#6ACBDE",
    angry: "#EEAFC5",
    disgust: "#F2E9D3",
    sad: "#DA8EC0",
    happy: "#F7CCD1",
  };

  // const emotionLinks = {
  //   surprise: '',
  //   bad: '',
  //   afraid: '',
  //   angry: '',
  //   digust: '',
  //   sad: '',
  //   happy: '',
  // }

  //updating display depending on what word has been clicked
  const updateDisplay = (word) => {
    setCurrentEmotionActive(word);
    setLevel2Active(true);
  };
  
  let level2 = level2Active
  const renderBackButton = () => {
    if (level2) {
      return <button className={classes.back} onClick={() => setLevel2Active(false)}>Go back</button>
    }
  }

  //conditionally rendering next level of words, depending on what user clicked on
  return (
    <div className={classes.root}>
      <div className={classes.cards}>
        {
          //conditional if to check if word has been clicked on and update display
          !level2Active
            ? emotionList.map((emotion, delay) => {
                return (
                  <EmotionCard
                    key={delay}
                    emotionClicked={updateDisplay}
                    delay={delay+200}
                    emotionWord={emotion}
                    color={emotionListColor[emotion]}
                  />
                );
              })
            : //renders second level of words if level2Words state active
              level2Words[currentEmotionActive].map((emotion, delay) => {
                return (
                  <EmotionCard
                    // onClick={() => setpopUp(true)}
                    key={delay}
                    emotionClicked={() => setpopUp(true)}
                    delay={delay}
                    emotionWord={emotion}
                    color={"#FE886A"}
                  />
                );
              })
        }
      </div>

      <Popup trigger={popUp} setTrigger = {setpopUp}>
        <h3>Emotion Name</h3>
      </Popup>

      {renderBackButton()}
      {/*button to go back to previous words*/}
    </div>
  );
};

const useAppStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    fontFamily: 'Open Sans',
  },
  back: {
    display: 'inline-block',
    border: 'none',
    padding: '1rem 2rem',
    margin: '32px',
    textDecoration: 'none',
    background: '#133072',
    color: '#FFFFFF',
    cursor: 'pointer',
    textAlign: 'center',
    fontFamily: 'Open Sans',
  },
});

export default EmotionListDisplay;
