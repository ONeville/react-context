import React, { useEffect, useState, useContext, useReducer } from "react";
import { speakerData, Speaker } from "./speakerData";
import { SpeakerDetail } from "./SpeakerDetail";
import { ConfigContext } from "../../context";
import { speakerReducer } from "./speaker.service";

export const Speakers = () => {
  const [speakerList, dispatch] = useReducer(speakerReducer, []);
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(ConfigContext);
  console.dir(context);

  useEffect(() => {
    setIsLoading(true);
    new Promise(resolver => {
      setTimeout(() => {
        resolver(speakerData);
      }, 1000);
    }).then((data: any) => {
      // setSpeakerList(data);
      dispatch({
        type: "setSpeakerList",
        data
      });
      setIsLoading(false);
    });
    return () => {
      console.log("Speaker: useEffect cleanup");
    };
  }, []);

  const toggleFavorite = (e: any, value: boolean, id: number) => {
    e.preventDefault();
    dispatch({
      type: value ? "favorite" : "unfavorite",
      data: speakerList,
      id
    });
  };

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="border w-full flex flex-col justify-center">
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
