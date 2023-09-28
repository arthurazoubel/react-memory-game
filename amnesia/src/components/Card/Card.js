import './Card.css'

export default function Card({ card, handleChoice }) {
    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className='card' role='gridcell'>
            <button className='button-card'>
            <img className='front' alt='card front (change it)' src={card.src}></img>
            <img className='back' alt='card back (change it)' src='/img/cover.png' onClick={handleClick}></img>
            </button>
        </div>
    )
}