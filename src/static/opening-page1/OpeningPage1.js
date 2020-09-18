import React from "react";
import "../opening-page1/OpeningPage1.scss";

export const OpeningPage1 = () => {
  return (
    <div className="content-text">
      <div className="content-text-title">
        in order to use Me to search phone numbers in your computer you need:
      </div>
      <div className="content-text-area">
        <div className="content-text-area-list">
          <ul className="text-area-list">
            <li className="text-area-list-item">
              1. make sure you are pro user
            </li>
            <li className="text-area-list-item">
              2. open setting (tap on the logo) and choose me web
            </li>
            <li className="text-area-list-item">3. scan QR code</li>
            <li className="text-area-list-item">
              4. Me web is for personal use only. If you will give your access
              to anyone else,
              <br /> he will be able to see you personal data and we will be
              able to block your use.
            </li>
          </ul>
          <div className="need-help">
            <a href="123">Need Help?</a>
          </div>
        </div>
        <div className="content-text-area-block">
          <div className="content-text-area-block-img"></div>
          <div className="logged">
            <div className="logged-check"></div>
            <div className="logged-text">keep me logged in</div>
          </div>
        </div>
      </div>
    </div>
  );
};
