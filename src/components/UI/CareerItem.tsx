import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import Point from "@icons/point.png";

interface CareerItemProps {
    title: string;
    date: string;
    additionalClass?: string;
}

const CareerItem = ({ title, date, additionalClass }: CareerItemProps) => {
    return (
        <div className={`career_item ${additionalClass}`}>
            <Fade>
                <img className="point" src={Point} />
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

CareerItem.propsTypes = {};

export default CareerItem;
