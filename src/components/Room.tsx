import { FC, ReactElement } from "react";
import LightSwitch from "./lightswitch/LightSwitch";
import DarknessOverlay from "./DarknessOverlay";

const Room: FC = (): ReactElement => {
  return (
    <div className="flex flex-row">
      <DarknessOverlay>
        <div></div>
      </DarknessOverlay>
      <section id="container">
        <div id="room">
          <figure className="n">North</figure>
          <figure className="e">East</figure>
          <figure className="w">
            West
            <LightSwitch />
          </figure>
        </div>
      </section>
      {/* <div className="wall flex-grow-0 flex-shrink-0"></div> */}
    </div>
  );
};

export default Room;
