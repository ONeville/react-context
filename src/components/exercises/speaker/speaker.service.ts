import { Speaker, speakerData } from "./speakerData";

const updateFavorite = (payload: {
  items: Speaker[];
  id: number;
  value: boolean;
}) => {
  return payload.items.map((item: Speaker) => {
    if (item.id === payload.id) {
      item.favorite = payload.value;
      return item;
    }
    return item;
  });
};

export const speakerReducer = (state: any, action: any) => {
  switch (action.type) {
    case "setSpeakerList":
      return action.data;
    case "favorite":
      return updateFavorite({ items: action.data, id: action.id, value: true });
    case "unfavorite":
      return updateFavorite({
        items: action.data,
        id: action.id,
        value: false
      });
    default:
      return state;
  }
};

export const getData = (
  dispatch: React.Dispatch<any>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  new Promise(resolver => {
    setTimeout(() => {
      resolver(speakerData);
    }, 1000);
  }).then((data: any) => {
    dispatch({
      type: "setSpeakerList",
      data
    });
    setIsLoading(false);
  });
};
