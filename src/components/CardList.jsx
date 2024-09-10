import React from 'react'
import CardButton from './CardButton';

const CardList = ({ title, subtext, onClick }) => {
    const name = "김현호"
    const handclick = () => {
        onClick();
    }

    return (
        <div className='card'>
            <h5>{title}</h5>
            <p className='card-sub-text'>
                {subtext}
            </p>
            <CardButton onClick={handclick} />
        </div>
    )
}


export default CardList