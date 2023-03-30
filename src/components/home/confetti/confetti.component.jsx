import confetti from "canvas-confetti";

function Confetti() {
  function confettiLauncher() {
    var i = Math.floor(Math.random() * 1000) + 1;
    var j = Math.floor(Math.random() * 500) + 1;
    const b = document.querySelector(".confetti-ball");
    b.style.left = i + "px";
    b.style.top = j + "px";
    confetti();
  }

  return (
    <div onClick={confettiLauncher} className='confetti-ball-container'>
      <div className='confetti-ball'></div>
    </div>
  );
}

export default Confetti;
