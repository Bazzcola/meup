import React from "react";
import "../../static/meProfile/MeProfile.scss";
import check from "../../images/check.png";
import contacts from "../../images/contacts.png";
export const MeProfile = () => {
  return (
    <div className="container-profile">
      <div className="container-profile-header">
        <div className="container-profile-header-user"></div>
        <div className="container-profile-header-information">
          <div className="user-information-name">
            <p> Maria Naftali,</p>
            <span>35</span>
            <span className="button-check">
              <img src={check} alt="" />
            </span>
          </div>
          <div className="user-information-tel"> 052 - 8360548 </div>
          <div className="user-information-email">
            <a href="123"> talnaftaly @gmail.com </a>
          </div>
          <div className="user-information-description"> work work work </div>
        </div>
      </div>
      <div className="user-buttons"></div>
      <div className="user-infinite-list">
        <div className="user-contacts">
          <div className="user-contacts-button"></div>
          <p className="user-contacts-title">Mutual Contacts</p>
          <div className="user-contacts-item">
            <div className="user-contacts-item-img">
              <img src={contacts} alt="" />
            </div>
            <div className="user-contacts-item-title">
              Maria
              <br />
              Naftali
            </div>
          </div>
          <div className="user-contacts-item">
            <div className="user-contacts-item-img">
              <img src={contacts} alt="" />
            </div>
            <div className="user-contacts-item-title">
              Maria
              <br />
              Naftali
            </div>
          </div>
          <div className="user-contacts-item">
            <div className="user-contacts-item-img">
              <img src={contacts} alt="" />
            </div>
            <div className="user-contacts-item-title">
              Maria
              <br />
              Naftali
            </div>
          </div>
          <div className="user-contacts-item">
            <div className="user-contacts-item-img">
              <img src={contacts} alt="" />
            </div>
            <div className="user-contacts-item-title">
              Maria
              <br />
              Naftali
            </div>
          </div>
        </div>
        <div className="user-contacts-instagram">
          <div className="user-contacts-button"></div>
          <p className="user-contacts-instagram-title">
            Maria <a href="323">Instagram</a>
          </p>
          <div className="user-contacts-item">
            <div className="user-contacts-item-img">
              <img src={contacts} alt="" />
            </div>
          </div>
          <div className="user-contacts-item">
            <div className="user-contacts-item-img">
              <img src={contacts} alt="" />
            </div>
          </div>
          <div className="user-contacts-item">
            <div className="user-contacts-item-img">
              <img src={contacts} alt="" />
            </div>
          </div>
          <div className="user-contacts-item">
            <div className="user-contacts-item-img">
              <img src={contacts} alt="" />
            </div>
          </div>
        </div>
        <div className="user-contacts-facebook">
          <p className="user-contacts-facebook-title">
            Visit Maria's <a href="323">Facebook</a> page
          </p>
        </div>
        <div className="user-contacts-spotify">
          <div className="user-contacts-button"></div>
          <p className="user-contacts-spotify-title">
            Maria <a href="323">Spotify</a>
          </p>
          <div className="user-contacts-item">
            <div className="user-contacts-item-img">
              <img src={contacts} alt="" />
            </div>
          </div>
          <div className="user-contacts-item">
            <div className="user-contacts-item-img">
              <img src={contacts} alt="" />
            </div>
          </div>
          <div className="user-contacts-item">
            <div className="user-contacts-item-img">
              <img src={contacts} alt="" />
            </div>
          </div>
          <div className="user-contacts-item">
            <div className="user-contacts-item-img">
              <img src={contacts} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
