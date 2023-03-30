import { createPlayerData } from "../redux/career";
import { resetCareer } from "../redux/career";

const createCareerRound = async (dispatch) => {
  return fetch("/api/career")
    .then((res) => {
      dispatch(resetCareer());
      return res.json();
    })
    .then((data) => {
      dispatch(createPlayerData(data));
    });
};

export default createCareerRound;
