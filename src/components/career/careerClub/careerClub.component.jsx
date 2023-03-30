import { useSelector } from "react-redux";
import CareerDetail from "../careerDetail/careerDetail";

function CareerClub({ data, index }) {
  const { guessCount } = useSelector((state) => state.career);
  const valid = index <= guessCount + 1 ? true : "??";
  const style = data?.className?.length ? data.className : "";

  return (
    <div className={`career-club-container ${style}`}>
      <CareerDetail
        info={valid !== "??" ? data.teamName : valid}
        style={style}
      />
      <CareerDetail info={valid !== "??" ? data.games : valid} style={style} />
      <CareerDetail info={valid !== "??" ? data.goals : valid} style={style} />
      <CareerDetail
        info={valid !== "??" ? data.joined : "????"}
        style={style}
      />
      <CareerDetail info={valid !== "??" ? data.left : "????"} style={style} />
    </div>
  );
}

export default CareerClub;
