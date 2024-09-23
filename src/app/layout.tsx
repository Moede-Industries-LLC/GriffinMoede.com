import React, { FC, ReactElement, ReactNode } from "react";
import "./styles/globals.css";
import "tailwindcss/tailwind.css";

const Root: FC = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Root;
