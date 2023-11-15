import React from "react";

const SkillItem = ({ name, icon }) => {
  return (
    <div className="skill-item">
      <img src={icon} />
      <span>{name}</span>
    </div>
  );
};

export default SkillItem;
