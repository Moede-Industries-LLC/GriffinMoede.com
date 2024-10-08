import React, { FC, ReactElement } from "react";
import Room from "../components/Room";
import LightsProvider from "../contexts/LightsContext";
import DarknessOverlay from "../components/DarknessOverlay";

const Home: FC = (): ReactElement => {
  return (
    <>
      <LightsProvider>
        <DarknessOverlay>
          <Room />
        </DarknessOverlay>
      </LightsProvider>
    </>
  );
};

export default Home;
