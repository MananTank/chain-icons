import * as React from "react";
import { SVGProps } from "react";

const OasisNetwork = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 128 128"
    style={{
      enableBackground: "new 0 0 128 128",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <defs>
      <path id="a" d="M0 0h128v128H0z" />
    </defs>
    <clipPath id="b">
      <use
        xlinkHref="#a"
        style={{
          overflow: "visible",
        }}
      />
    </clipPath>
    <g
      style={{
        clipPath: "url(#b)",
      }}
    >
      <path
        d="M115 25.4C105.3 13 91.1 5.1 75.4 5.1 45 5.1 22.7 33.4 22.7 64c0 21.3 14.2 37.3 29.9 37.3 1.5 0 2.9-.1 4.4-.4C46.4 93.2 39.7 79.2 39.7 64c0-24.2 16.4-43.1 35.7-43.1 21.1 0 35.7 20.9 35.7 43.1-.1 16.4-5.9 32.7-16.2 44.7-9 10.5-20.6 17.1-33.4 19.2 0 0 1.1.1 2.5.1 35.3 0 64-28.7 64-64 0-14.5-4.8-27.9-13-38.6zM105.3 64c0-21.3-14.2-37.3-29.9-37.3-1.5 0-2.9.1-4.4.4C81.6 34.8 88.3 48.8 88.3 64c0 24.2-16.4 43.1-35.7 43.1-21.1 0-35.7-20.9-35.7-43.1.1-16.4 5.9-32.7 16.2-44.7C42.1 8.8 53.7 2.2 66.5.1c0 0-1.1-.1-2.5-.1C28.7 0 0 28.7 0 64c0 14.5 4.8 27.9 13 38.6 9.7 12.4 23.9 20.2 39.6 20.2 30.4.1 52.7-28.2 52.7-58.8z"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "#0089db",
        }}
      />
    </g>
  </svg>
);

export default OasisNetwork;