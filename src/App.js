import React, { useState } from 'react';
import './PopupComponent.css';

const PopupComponent = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleStartButtonClick = () => {
    setShowPopup(true);
  };

 

  const handleSaveButtonClick = () => {
    
    setShowPopup(false);
  };

  return (
    <>
      {!showPopup && (
        <button className="start-button" onClick={handleStartButtonClick}>Start</button>
      )}
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <div className="popup-header">
              <h3 className="theme-color">Theme Color</h3>
              <p id='theme'>Change theme</p>
            </div>
            <div className="popup-content">
              <div className="popup-row">
                <span>Font Color</span>
                <div className='together'>
                  <span>#44444</span>
                  <div className="color-box"></div>
                </div>
              </div>
              <div className="popup-row">
                <span>Background Color</span>
                <div className='together'>
                  <span>#44444</span>
                  <div className="color-boxW"></div>
                </div>
              </div>
              <div className="popup-row">
                <span>Button Color</span>
                <div className='together'>
                  <span>#44444</span>
                  <div className="color-boxB"></div>
                </div>
              </div>
              <div className="popup-row">
                <span>Button Border Color</span>
                <div className='together'>
                  <span>#44444</span>
                  <div className="color-boxB"></div>
                </div>
              </div>
              <div className="popup-row">
                <span>Buttons Mouseover Color</span>
                <div className='together'>
                  <span>#44444</span>
                  <div className="color-boxBB"></div>
                </div>
              </div>
            </div>
            <div className="popup-footer">
              <button className="cancel-button" onClick={handleSaveButtonClick}>Cancel</button>
              <button className="save-button" onClick={handleSaveButtonClick}>Save</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupComponent;
