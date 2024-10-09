"use client";
import React, { FC, ReactElement } from "react";
import soundcloudIcon from "../../assets/soundcloud-icon.jpg";
import guitar from "../../assets/guitar.png";

const Page: FC = (): ReactElement => {
  return (
    <div className="flex flex-row music-room">
      <img src={guitar.src} alt="" />
      <img src={soundcloudIcon.src} className="soundcloud-icon" alt="" />
      <div className="soundcloud-widget">
        <iframe
          allow="autoplay"
          className="soundcloud-widget"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1792063102&show_artwork=true&color=%2244DD"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
