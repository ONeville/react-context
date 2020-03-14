import { Speaker } from "./speakerData";

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
