import Image from "next/image";
import logo from "./logo7.png";

function LoadingScreen({ text }) {
  return (
    <div className='loading-screen'>
      {text && (
        <div className='loading-screen-text'>
          <div className="section-loading">
            <div className="container-loading">
              <div className="content-section-loading">
                <div className="title-loading">
                  <h1>Guess Eleven</h1>
                </div>
                <div className="content-loading">
                  <h3>Our Brand New Game</h3>
                  <p>{text}</p>
                  <div className="button-loading">
                    <p>Enjoy!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div id='loader'></div>
    </div>
  );
}

export default LoadingScreen;

