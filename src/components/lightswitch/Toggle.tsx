import { FC, ReactElement } from "react";

interface ToggleProps {
  isOn: boolean;
}

const Toggle: FC<ToggleProps> = ({ isOn }: ToggleProps): ReactElement => {
  return (
    <div
      id="toggle"
      className={`${isOn ? "rotate-[-45deg]" : "rotate-[45deg]"}`}
    ></div>
  );
};

export default Toggle;
