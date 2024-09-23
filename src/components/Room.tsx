import { FC, ReactElement } from "react";
import LightSwitch from "./lightswitch/LightSwitch";

const Room: FC = (): ReactElement => {
  return (
    <div className="flex flex-row">
      <section id="container">
        <div id="room">
          <figure className="n">N</figure>
          <figure className="e">E</figure>
          <figure className="w">W</figure>
        </div>
      </section>
      <div className="wall flex-grow-0 flex-shrink-0">
        <LightSwitch />
      </div>
    </div>
  );
};

export default Room;
