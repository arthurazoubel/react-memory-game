import { useState } from 'react'
import './Card.css'

export default function Card({ card, handleChoice, flipped, disabled }) {
    const [altText, setAltText] = useState('back of the card')

    const handleClick = () => {
        setAltText(card.alt)
        if(!disabled) {
            handleChoice(card)
        }
    }

    const accessibilityClick = (e) => {
        if(e.key === 'Enter' || e.key === ' '){
            handleClick()
        }
    }

    return (
        <div className='card' role='gridcell'>
            <button className={flipped ? 'button-card flipped' : 'button-card'} onKeyUp={accessibilityClick}>
            <img className='front' alt={flipped ? altText : ''} src={card.src}></img>
            <img className='back' alt={flipped ? '' : altText} src='/img/cover.png' onClick={handleClick}></img>
            </button>
        </div>
    )
}