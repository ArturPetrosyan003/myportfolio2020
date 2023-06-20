import React from "react";

const Dot = ({ color, className }) => {
  return (
    <svg
      className={className}
      fill={color}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="215px"
      height="215px"
      viewBox="-3.23 -3.23 38.71 38.71"
      xmlSpace="preserve"
      stroke={color}
      strokeWidth="1.5479999999999998"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.0645"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path d="M16.125,0C7.233,0,0,7.232,0,16.125C0,25.018,7.233,32.25,16.125,32.25c8.893,0,16.125-7.232,16.125-16.125 C32.25,7.232,25.016,0,16.125,0z M16.125,28.25C9.439,28.25,4,22.811,4,16.125C4,9.439,9.439,4,16.125,4 C22.811,4,28.25,9.439,28.25,16.125C28.25,22.811,22.811,28.25,16.125,28.25z M21.25,16.125c0,2.83-2.295,5.125-5.125,5.125 S11,18.955,11,16.125S13.295,11,16.125,11S21.25,13.295,21.25,16.125z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export default Dot;
