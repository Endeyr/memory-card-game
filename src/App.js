import { useEffect, useState } from 'react'
import './App.css'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import ahri from './images/ahri.jpg'
import akali from './images/akali.jpg'
import evelynn from './images/evelynn.jpg'
import irelia from './images/irelia.jpg'
import jinx from './images/jinx.jpg'
import kaisa from './images/kaisa.jpg'
import lux from './images/lux.jpg'
import missfortune from './images/missfortune.jpg'
import neeko from './images/neeko.jpg'
import riven from './images/riven.jpg'
import sona from './images/sona.jpg'
import taliyah from './images/taliyah.jpg'

const cardImages = [
	{ src: ahri, name: 'ahri' },
	{ src: akali, name: 'akali' },
	{ src: evelynn, name: 'evelynn' },
	{ src: irelia, name: 'irelia' },
	{ src: jinx, name: 'jinx' },
	{ src: kaisa, name: 'kaisa' },
	{ src: lux, name: 'lux' },
	{ src: missfortune, name: 'missfortune' },
	{ src: neeko, name: 'neeko' },
	{ src: riven, name: 'riven' },
	{ src: sona, name: 'sona' },
	{ src: taliyah, name: 'taliyah' },
]

function App() {
	const [cards, setCards] = useState([])
	const [score, setScore] = useState(0)
	const [selected, setSelected] = useState([])
	const [memory, setMemory] = useState([])

	useEffect(() => {
		if (selected.length === 0) {
		} else if (selected.length === 1) {
			if (memory.includes(selected[0])) {
				console.log('you lose!')
				resetScore()
			} else {
				setMemory([...memory, selected[0]])
				setSelected([])
				if (memory.length === 11) {
					console.log('you win!')
					resetScore()
				}
			}
		}
	}, [selected, memory])

	// shuffle cards
	function shuffleCards() {
		const shuffleCards = [...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: card.name }))

		setCards(shuffleCards)
		setScore(0)
	}

	function handleChoice(card) {
		selected ? setSelected([card.src]) : setMemory([card.src])
		shuffleCards()
		count()
	}

	function count() {
		setScore(score + 1)
	}

	function resetScore() {
		setSelected([])
		setMemory([])
		setScore(0)
	}

	return (
		<main className="container-fluid">
			<div>
				<div className="container text-center">
					<h1 className="text-light">Memory Card Game</h1>
					<button className="btn btn-light" onClick={shuffleCards}>
						New Game
					</button>
					<h1 className="container text-center">
						<div className="text-light">{score}</div>
					</h1>
					<div className="container">
						{cards.map((card) => (
							<Cards key={card.name} card={card} handleChoice={handleChoice} />
						))}
					</div>
				</div>
				{/*<Scoreboard />*/}
				<Footer />
			</div>
		</main>
	)
}

export default App
