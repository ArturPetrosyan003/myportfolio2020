import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import Point from "assets/icons/point.png";
import Dot from "../../helpers/svg/dot";
import { useSelector } from "react-redux";

interface CareerItemProps {
  title: string;
  date: string;
  additionalClass?: string;
}

const CareerItem = ({ title, date, additionalClass }: CareerItemProps) => {
  const color = useSelector((state: any) => state.color);

  return (
    <div className={`career_item ${additionalClass}`}>
      <Fade>
        <Dot color={color} className="point" />
      </Fade>

      <Slide right>
        <div className="text_section">
          <p>{title}</p>
          <span>{date}</span>
        </div>
      </Slide>
    </div>
  );
};

export default CareerItem;
