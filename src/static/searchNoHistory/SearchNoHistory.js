import React from "react";
import img from "../../images/binocle.png";
import "../searchNoHistory/SearchNoHistory.scss";

export const SearchNoHistory = () => {
  return (
    <div className="chat-container">
      <div className="chat-container-info">
        <div className="chat-container-info-user"></div>
        <div className="chat-container-info-settings">
          <div className="chat-container-info-settings-circle"></div>
          <div className="chat-container-info-settings-circle"></div>
          <div className="chat-container-info-settings-circle"></div>
        </div>
      </div>
      <div className="chat-container-search">
        <input type="text" placeholder="Type Search Here..." />
      </div>
      <div className="chat-container-result">
        <div className="chat-container-result-title">
          there are no identified phone numbers yet
        </div>
        <div className="chat-container-result-img">
          <img src={img} alt="binocle" />
        </div>
        <div className="chat-container-result-history">
          in the feuture here you will see all
          <br />
          your web searches history
        </div>
      </div>
    </div>
  );
};
