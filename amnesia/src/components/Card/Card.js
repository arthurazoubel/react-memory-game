import './Card.css'

export default function Card({ card, handleChoice, flipped, flipCard }) {

    const handleClick = () => {
        handleChoice(card)
    }

    const accessibilityClick = (e) => {
        if(e.key === 'Enter' || e.key === ' '){
            handleClick()
        }
    }

    return (
        <div className='card' role='gridcell'>
            <button className={flipped ? 'button-card flipped' : 'button-card'} onKeyUp={accessibilityClick}>
            <img className='front' alt='card front (change it)' src={card.src}></img>
            <img className='back' alt='card back (change it)' src='/img/cover.png' onClick={handleClick}></img>
            </button>
        </div>
    )
}