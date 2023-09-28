import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false },
]

function App() {
  const [memoryCards, setMemoryCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // shuffle cards
  const shuffleCards = () => {
    const cardImagesDoubled = cardImages.flatMap((img) => { return [img, img] }) // doubling the nuber of cards
    const shuffledCards = cardImagesDoubled.sort(() => Math.random() - 0.5) // shuflling them randomly
    const memoryCards = shuffledCards.map((card) => ({ ...card, id: Math.random() }))
    setMemoryCards(memoryCards)
    setTurns(0)
  }


  // choosing cards
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card.src) : setChoiceOne(card.src);
  }


  // comparing cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne === choiceTwo) {
        cardsMatched()
        console.log(choiceOne, choiceTwo)
        resetTurns()
      } else {
        notMatchedCards()
        resetTurns()
      }
    }
  }, [choiceOne, choiceTwo])


  // match cards function
  const cardsMatched = () => {
    console.log('you have a match')
    setMemoryCards((prevCards) => {
      return prevCards.map(card => {
        if(card.src === choiceOne) {
          return {...card, matched: true}
        } else {
          return card
        }
      })
    })
  }


  // unmatched cards function
  const notMatchedCards = () => {
    console.log('try again')
  }

  
  // reseting the cards
  const resetTurns = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }


  return (
    <div className="App">
      <h1>Amnesia - The Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <p>{turns} turns</p>
      <div className='card-grid' role='grid'>
        {memoryCards.map(card => (
          <Card key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
