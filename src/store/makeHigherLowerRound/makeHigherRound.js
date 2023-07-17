import {
  createHigherPlayerData1,
  createHigherPlayerData2,
  createHigherPlayerData3,
} from "../redux/higher";

const createHigherLowerRound = async (
  dispatch,
  amount,
  playerData2,
  playerData3
) => {
  if (amount === 3) {
    await fetch("/api/higher-lower")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(createHigherPlayerData1(data));
      });
    await fetch("/api/higher-lower")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(createHigherPlayerData2(data));
      });
  } else {
    dispatch(createHigherPlayerData1(playerData2));
    dispatch(createHigherPlayerData2(playerData3));
  }

  return fetch("/api/higher-lower")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let name = data?.name;
      if (name === playerData3?.name) {
        while (name === playerData3?.name) {
          fetch("/api/higher-lower")
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              name = data?.name;
              if (name !== data?.name) {
                dispatch(createHigherPlayerData3(data));
              }
            });
        }
      } else {
        dispatch(createHigherPlayerData3(data));
      }
    });
};

export default createHigherLowerRound;
