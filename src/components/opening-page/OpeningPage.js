import React from "react";
import logo from "../../images/Logo.png";
import { MeProfile } from "../../static/meProfile/MeProfile";
import { OpeningPage1 } from "../../static/opening-page1/OpeningPage1";
import { NotMeProfile } from '../../static/notMePorfile/NotMeProfile';
import { DeleteMenu } from '../../static/deleteMenu/DeleteMenu';
import { SearchNoHistory } from "../../static/searchNoHistory/SearchNoHistory";
import "../opening-page/OpeningPage.scss";

export const OpeningPage = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-web">WEB</div>
      </div>
      <div className="content">
        {/* <OpeningPage1 /> */}
        <SearchNoHistory />
        {/* <MeProfile /> */}
        {/* <NotMeProfile /> */}
        <DeleteMenu />
      </div>
    </div>
  );
};
