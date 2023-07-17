import GuessedProfile from "../../career/guessedProfile/guessedProfile";
import { useSelector } from "react-redux";

function GuessedPlayersTwoColumns({ guessedPlayers }) {
  const { searchIsOpen } = useSelector((state) => state.hidden);

  const rowOneGuessedPlayers = guessedPlayers.filter((_, i) => i % 2 === 0);
  const rowTwoGuessedPlayers = guessedPlayers.filter((_, i) => i % 2 === 1);

  return (
    <div className='guessed-players-two-columns-container'>
      <div
        className={`guessed-players-column ${
          searchIsOpen && "spread-column-left"
        }`}
      >
        {rowOneGuessedPlayers.map((player) => (
          <GuessedProfile key={player.name} player={player} />
        ))}
      </div>
      {rowTwoGuessedPlayers.length > 0 && (
        <>
          {!searchIsOpen && <div className='line-seperate-columns'></div>}
          <div
            className={`guessed-players-column ${
              searchIsOpen && "spread-column-right"
            }`}
          >
            {rowTwoGuessedPlayers.map((player) => (
              <GuessedProfile key={player.name} player={player} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default GuessedPlayersTwoColumns;
