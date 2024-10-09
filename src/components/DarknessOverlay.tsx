"use client";
import React, { FC, ReactElement } from "react";
import { useLights } from "../contexts/LightsContext";

interface Props {
  children: ReactElement;
}

const DarknessOverlay: FC<Props> = ({ children }): ReactElement => {
  const { areLightsOn } = useLights();

  return (
    <>
      {areLightsOn && (
        <>
          <div id="overlay-dark"></div>
        </>
      )}

      {children}
    </>
  );
};

export default DarknessOverlay;
