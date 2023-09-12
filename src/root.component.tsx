import {useState} from 'react';

// Import for the image
import logoReact from './assets/react.png';

// Import for style
import './styles/style.css';

export default function Root() {
  // To manage the click of the button for displaying or not the React image
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);

  // To send the event to increase the counter by 1
  const handleButtonPlus = () => {
    window.dispatchEvent(new CustomEvent('buttonPlus'));
  };

  // To send the event to decrease the counter by 1
  const handleButtonMinus = () => {
    window.dispatchEvent(new CustomEvent('buttonMinus'));
  };

  // The "+" and "-" buttons must be displayed and the one to click for displaying the React image
  return (
    <div id="back_mainReactApp">
      <div id="divPlusMinus_mainReactApp">
        <button
          type="button"
          id="buttonPlus_mainReactApp"
          onClick={handleButtonPlus}
          data-testid="buttonPlus_mainReactApp"
        >
          +
        </button>
        <button
          type="button"
          id="buttonMinus_mainReactApp"
          onClick={handleButtonMinus}
          data-testid="buttonMinus_mainReactApp"
        >
          -
        </button>
      </div>
      <button
        type="button"
        id="button_mainReactApp"
        onClick={handleClick}
        data-testid="button_mainReactApp"
      >
        Click me!
      </button>
      <div id="imageDiv_mainReactApp">
        {clicked ? (
          <img
            id="img_mainReactApp"
            src={logoReact}
            alt="React Logo"
            data-testid="img_mainReactApp"
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
