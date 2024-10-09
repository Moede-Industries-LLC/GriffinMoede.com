"use client";
import { FC, ReactElement, useState, useContext } from "react";
import Screw from "./Screw";
import Toggle from "./Toggle";
import { useLights } from "../../contexts/LightsContext";

const LightSwitch: FC = (): ReactElement => {
  const { areLightsOn, changeLights } = useLights();

  if (areLightsOn) {
    return (
      <div className="light-switch on" onClick={() => changeLights()}></div>
    );
  } else {
    return (
      <div className="light-switch off" onClick={() => changeLights()}></div>
    );
  }

  // return (
  //   <div
  //     id="light-switch"
  //     className="flex flex-col items-center justify-center"
  //   >
  //     <div
  //       id="plate"
  //       className="flex flex-col items-center justify-center"
  //       onClick={() => {
  //         changeLights();
  //       }}
  //     >
  //       <Screw position="top" />
  //       <div
  //         id="switch-box"
  //         className="flex flex-col items-center justify-center"
  //       >
  //         <div id="toggle-box">
  //           {areLightsOn ? (
  //             <>
  //               <Toggle isOn={true}></Toggle>
  //             </>
  //           ) : (
  //             <>
  //               <Toggle isOn={false}></Toggle>
  //             </>
  //           )}
  //         </div>
  //       </div>
  //       <Screw position="bottom" />
  //     </div>
  //   </div>
  // );
};

export default LightSwitch;
