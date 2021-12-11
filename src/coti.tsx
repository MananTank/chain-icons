import * as React from "react";
import { SVGProps } from "react";

const Coti = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 3500 3500"
    style={{
      enableBackground: "new 0 0 3500 3500",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M1750 0c966.5 0 1750 783.5 1750 1750s-783.5 1750-1750 1750S0 2716.5 0 1750 783.5 0 1750 0z"
      style={{
        fill: "#00467a",
      }}
    />
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1={1480.345}
      y1={249.463}
      x2={1252.889}
      y2={1538.512}
      gradientTransform="matrix(1 0 0 -1 0 2554)"
    >
      <stop
        offset={0.1}
        style={{
          stopColor: "#194aad",
        }}
      />
      <stop
        offset={0.5}
        style={{
          stopColor: "#248fcb",
        }}
      />
      <stop
        offset={0.8}
        style={{
          stopColor: "#2bbfdf",
        }}
      />
    </linearGradient>
    <path
      d="M762.6 1521.6c-35.1 0-50.7 15.6-50.7 46.8v803.7c0 35.1 15.6 46.8 50.7 46.8 386.3 3.9 858.3-339.4 1248.5-608.6V881.7c-386.2 265.3-870 643.8-1248.5 639.9z"
      style={{
        fill: "url(#a)",
      }}
    />
    <linearGradient
      id="b"
      gradientUnits="userSpaceOnUse"
      x1={3511.147}
      y1={-1272.658}
      x2={3811.925}
      y2={432.942}
      gradientTransform="matrix(-1 0 0 1 5851.79 2174.83)"
    >
      <stop
        offset={0.1}
        style={{
          stopColor: "#194aad",
        }}
      />
      <stop
        offset={0.5}
        style={{
          stopColor: "#248fcb",
        }}
      />
      <stop
        offset={0.8}
        style={{
          stopColor: "#2bbfdf",
        }}
      />
    </linearGradient>
    <path
      d="M2795.3 1884.4c35.1 0 50.7-15.6 50.7-46.8v-803.7c0-35.1-15.6-46.8-50.7-46.8-390.2-3.9-858.3 339.4-1248.5 608.6v924.7c386.3-265.3 870.1-643.8 1248.5-636z"
      style={{
        fill: "url(#b)",
      }}
    />
    <path
      d="M2011.1 1810.3v-530.6c-160 101.4-319.9 210.7-468.2 312.1v530.6c163.9-101.4 320-210.7 468.2-312.1z"
      style={{
        fill: "#194aad",
      }}
    />
  </svg>
);

export default Coti;