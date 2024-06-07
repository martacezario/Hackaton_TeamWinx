import React from "react";
import { Link } from "react-router-dom";


const Button = ({ path, text, className }) => {

  return (
    <Link to={path} >
      <button className={className}>
        {text}
      </button>
    </Link>
  );
};

export default Button;