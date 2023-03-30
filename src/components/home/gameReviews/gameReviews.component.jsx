import Image from "next/image";

function GameReviews() {
  return (
    <div className='home-review'>
      <div className='review-container'>
        <h2>The Ultimate Football Experience</h2>
      </div>
      <div className='review-container cursive'>
        <h2>Join The Football Frenzy</h2>
      </div>
      <div className='review-container default-quote-background '>
        <h2 className='default-review'>Fun Game To Play In Class</h2>
        {/* <div className='home-stars img'>
          <Image alt='5-stars' fill src='/assets/5stars.png' />
        </div> */}
      </div>
    </div>
  );
}

export default GameReviews;
