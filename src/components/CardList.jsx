import React from 'react'

const CardList = () => {
    const name = "김현호"
    const subtext = "서브택스트"

    return (
        <div className='card'>
            <h5>{name}</h5>
            <p className='card-sub-text'>
                {subtext}
            </p>
            <button type="button" className='card-button'>파란색
            </button>
        </div>
    )
}


export default CardList