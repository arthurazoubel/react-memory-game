import { useState } from 'react'
import './Card.css'

export default function Card({ card, handleChoice }) {
    const [srcCard, setSrcCard] = useState('/img/cover.png')

    const handleClick = () => {
        setSrcCard(card.src)
        handleChoice(card)
    }

    return (
        <div className='card' role='gridcell'>
            <button className='button-card'>
            {/* <img className='front' alt='card front (change it)' src={card.src}></img> */}
            <img className='back' alt='card back (change it)' src={srcCard} onClick={handleClick}></img>
            </button>
        </div>
    )
}