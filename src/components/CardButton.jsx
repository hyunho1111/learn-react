import React from "react";

const CardButton = ({ onClick }) => {
    const handclick = () => {
        onClick();
    }


    return (
        <button type="button" className="card-button" onClick={handclick}>
            Go somewhere
        </button>
    );
};

export default CardButton;
