"use client";
import React, { FC, ReactElement } from "react";

const Page: FC = (): ReactElement => {
  return (
    <div className="boombox">
      <iframe
        width="280"
        height="70"
        allow="autoplay"
        className="soundcloudwidget"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1792063102&show_artwork=false&color=%1144CC"
      ></iframe>
    </div>
  );
};

export default Page;
