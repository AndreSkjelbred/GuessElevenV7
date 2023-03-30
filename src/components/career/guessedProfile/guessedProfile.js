import Image from "next/image";

function GuessedProfile({ player }) {
  const { leagueClass, clubClass, playerClass, clubImg, leagueImg, imgSrc } =
    player;
  console.log(imgSrc);
  return (
    <div className='guessed-profile-container'>
      <div className={`profile-img-container ${playerClass}`}>
        <div className='guessed-profile-player-img guessed-profile img'>
          <Image className='guessed-profile-player-img' fill src={imgSrc} />
        </div>
      </div>

      <div className={`profile-img-container ${leagueClass}`}>
        <div className='guessed-profile-league-img guessed-profile img'>
          <Image fill src={leagueImg} />
        </div>
      </div>

      <div className={`profile-img-container ${clubClass}`}>
        <div className='guessed-profile-club-img guessed-profile img'>
          <Image fill src={clubImg} />
        </div>{" "}
      </div>
    </div>
  );
}

export default GuessedProfile;
