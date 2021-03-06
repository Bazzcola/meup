import React from 'react';
import '../deleteMenu/DeleteMenu.scss';

export const DeleteMenu = () => {
    return (
        <div className="delete-menu-container-profile">
            <div className="delete-menu-container-profile-icon">
                <div className="icon-svg">
                <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-svg-head">
                    <ellipse cx="23" cy="22.5" rx="23" ry="22.5" fill="#DFDFDF"/>
                </svg>
                <svg width="96" height="50" viewBox="0 0 96 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-svg-body">
                    <path fillRule="evenodd" clipRule="evenodd" d="M66.9277 0.506348C72.0331 0.506348 96 15.1357 96 39.2432C83.2943 46.6139 64.601 50 48 50C31.399 50 12.7057 46.6139 0 39.2432C0 15.1357 25.2191 0.506348 29.0742 0.506348C32.9293 0.506348 33.4286 4.74227 48 4.74227C62.5714 4.74227 61.8224 0.506348 66.9277 0.506348Z" fill="#DFDFDF"/>
                </svg>

                </div>
                <div className="click-profile"><a href="4343">Click on result to show Profile</a></div>
            </div>
        </div>
    )
}