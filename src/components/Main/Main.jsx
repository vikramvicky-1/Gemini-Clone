import React, { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
import Typewriter from "typewriter-effect";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  const [typedResult, settypedResult] = useState("");
  return (
    <div className="main">
      <div className="nav">
        <div className="logo">
          <img src={assets.gemini_icon} alt="" />
          <p>Gemini</p>
        </div>
        <img src={assets.user_icon} alt="" />
      </div>
      {!showResult ? (
        <>
          <div className="hero">
            <div className="greet">
              <p className="hello">
                <span>Hello, Vikram.</span>
              </p>
              <p className="help">How can I help you today?</p>
            </div>
            <div className="card-container">
              <div className="card">
                <p>Create a travel itinerary for a city</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize the concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brianstrom team bonding activites for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve readability for the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <div className="result-icon">
                <img src={assets.gemini_icon} alt="" />
              </div>
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr className="hr2" />
                  <hr className="hr2" />
                </div>
              ) : (
                <>
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                </>
              )}
            </div>
          </div>
        </>
      )}
      <div className="hero-bottom">
        <div className="search-box">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Enter a prompt here"
          />
        </div>
        <div className="icons">
          <img src={assets.gallery_icon} alt="" />
          <img src={assets.mic_icon} alt="" />
          <img onClick={() => onSent()} src={assets.send_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
