import Image from "next/image";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function GuessedProfileImage({ playerInfo }) {
  const { imgSrc, className, realValue } = playerInfo;

  return (
    <div className={`profile-img-container ${className}`}>
      <div className='guessed-profile-player-img guessed-profile img'>
        {imgSrc.length > 10 ? (
          <Image className='guessed-profile-player-img' fill src={imgSrc} />
        ) : (
          <div className='guessed-profile-info-fragment'>
            <h3>
              {imgSrc}
              <span>
                {!isNaN(imgSrc) &&
                  className !== "correct-data" &&
                  (realValue < imgSrc ? <FaArrowDown /> : <FaArrowUp />)}
              </span>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default GuessedProfileImage;
