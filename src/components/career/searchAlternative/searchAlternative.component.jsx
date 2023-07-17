import Image from "next/image";

function SearchAlternative({ player, onClick }) {
  function handleGuess() {
    onClick(player);
  }

  return (
    <div
      className='search-alternative'
      dataset={player.name}
      onClick={handleGuess}
    >
      <h3 className='search-name'>{player.name}</h3>
      <div className='search-picture img'>
        <Image className='search-img' alt='player' src={player.imgSrc} fill />
      </div>
    </div>
  );
}

export default SearchAlternative;
