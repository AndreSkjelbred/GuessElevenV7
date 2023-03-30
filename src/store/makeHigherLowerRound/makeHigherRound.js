import {
  createHigherPlayerData1,
  createHigherPlayerData2,
} from "../redux/higher";
import { resetHidden } from "../redux/hidden";

const createHigherLowerRound = async (dispatch, amount, playerData) => {
  if (amount === 2) {
    await fetch("/api/hidden-player")
      .then((res) => {
        dispatch(resetHidden());
        return res.json();
      })
      .then((data) => {
        dispatch(createHigherPlayerData1(data));
      });
  } else {
    dispatch(createHigherPlayerData1(playerData));
  }

  return fetch("/api/hidden-player")
    .then((res) => {
      dispatch(resetHidden());
      return res.json();
    })
    .then((data) => {
      dispatch(createHigherPlayerData2(data));
    });
};

export default createHigherLowerRound;
