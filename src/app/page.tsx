import React, { FC, ReactElement } from "react";
import Room from "../components/Room";
import LightsProvider from "../contexts/LightsContext";

const Home: FC = (): ReactElement => {
  return (
    <>
      <LightsProvider>
        <Room />
      </LightsProvider>
    </>
  );
};

export default Home;
