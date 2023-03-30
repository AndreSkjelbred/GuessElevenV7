import { createHiddenPlayerData } from "../redux/hidden";
import { resetHidden } from "../redux/hidden";

const createHiddenRound = async (dispatch) => {
  return fetch("/api/hidden-player")
    .then((res) => {
      dispatch(resetHidden());
      return res.json();
    })
    .then((data) => {
      console.log(data);
      dispatch(createHiddenPlayerData(data));
    });
};

export default createHiddenRound;
