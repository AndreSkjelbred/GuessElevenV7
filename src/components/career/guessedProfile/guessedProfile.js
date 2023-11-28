import Image from "next/image";
import GuessedProfileImage from "@/components/generalGameComponents/guessedProfileImage/guessedProfileImage.component";

function GuessedProfile({ player }) {
  const isArray = Array.isArray(player);
  if (!isArray) {
  }

  return (
    <div className="guessed-profile-container">
      {!isArray ? (
        <>
          <div className={`profile-img-container ${player.playerClass}`}>
            <div className="guessed-profile-player-img guessed-profile img">
              <Image
                className="guessed-profile-player-img"
                fill
                src={player.imgSrc}
              />
            </div>
          </div>

          <div className={`profile-img-container ${player.leagueClass}`}>
            <div className="guessed-profile-league-img guessed-profile img">
              <Image fill src={player.leagueImg} />
            </div>
          </div>

          <div className={`profile-img-container ${player.clubClass}`}>
            <div className="guessed-profile-club-img guessed-profile img">
              <Image fill src={player.clubImg} />
            </div>{" "}
          </div>
        </>
      ) : (
        player.map((playerInfo) => (
          <GuessedProfileImage playerInfo={playerInfo} />
        ))
      )}
    </div>
  );
}

export default GuessedProfile;
