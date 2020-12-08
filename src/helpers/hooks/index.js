/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

export const useKeyPress = (targetKey, includeTouch = false) => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key.toLowerCase() === targetKey.toLowerCase()) {
      setKeyPressed(true);
    }
  }

  function touchstartHandler() {
    setKeyPressed(true);
  }

  const touchstopHandler = () => {
    setKeyPressed(false);
  };

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key.toLowerCase() === targetKey.toLowerCase()) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    if (includeTouch) {
      window.addEventListener('touchstart', touchstartHandler);
      window.addEventListener('touchend', touchstopHandler);
      window.addEventListener('touchcancel', touchstopHandler);
    }
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
      if (includeTouch) {
        window.removeEventListener('touchstart', touchstartHandler);
        window.removeEventListener('touchend', touchstopHandler);
        window.removeEventListener('touchcancel', touchstopHandler);
      }
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
};
