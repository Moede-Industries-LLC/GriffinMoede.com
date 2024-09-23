"use client";
import { FC, ReactElement, useState, useContext } from "react";
import Screw from "./Screw";
import Toggle from "./Toggle";
import { useLights } from "../../contexts/LightsContext";

const LightSwitch: FC = (): ReactElement => {
  // const { areLightsOn, changeLights } = useLights();
  const [areLightsOn, changeLights] = useState<boolean>(false);

  return (
    <div
      id="light-switch"
      className="flex flex-col items-center justify-center"
    >
      <div
        id="plate"
        className="flex flex-col items-center justify-center"
        onClick={() => {
          changeLights(!areLightsOn);
        }}
      >
        <Screw position="top" />
        <div
          id="switch-box"
          className="flex flex-col items-center justify-center"
        >
          <div id="toggle-box">
            {areLightsOn ? (
              <>
                <Toggle isOn={true}></Toggle>
                <div id="light-switch-label">ON</div>
              </>
            ) : (
              <>
                <div id="light-switch-label">OFF</div>
                <Toggle isOn={false}></Toggle>
              </>
            )}
          </div>
        </div>
        <Screw position="bottom" />
        {!areLightsOn && (
          <>
            <div id="overlay-dark"></div>
            <div id="overlay-dim"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default LightSwitch;
