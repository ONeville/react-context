import React, {
  useEffect,
  useState,
  useContext,
  useReducer,
  useCallback
} from "react";
import { Speaker } from "./speakerData";
import { SpeakerDetail } from "./SpeakerDetail";
import { ConfigContext } from "../../../context";
import { speakerReducer, getData } from "./speaker.service";

export const Speakers = () => {
  const [speakerList, dispatch] = useReducer(speakerReducer, []);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(ConfigContext);

  useEffect(() => {
    setIsLoading(true);
    getData(dispatch, setIsLoading);
    return () => {
      console.log("Speaker: useEffect cleanup");
    };
  }, []);

  const toggleFavorite = useCallback(
    (e: any, value: boolean, id: number) => {
      e.preventDefault();
      dispatch({
        type: value ? "favorite" : "unfavorite",
        data: speakerList,
        id
      });
    },
    [speakerList]
  );

  if (!context.showSpeakerSpeakingDays) {
    return <div>FORBBIN</div>;
  }
  if (isLoading) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="border w-full flex flex-col justify-center bg-gray-200">
      <h3 className="text-center my-3 text-2xl">Conference Dojo Hooks</h3>
      <div className="flex flex-wrap">
        {speakerList.map((item: Speaker) => {
          return (
            <SpeakerDetail
              key={item.id}
              speaker={item}
              onToggleFavorite={toggleFavorite}
            />
          );
        })}
      </div>
    </div>
  );
};
