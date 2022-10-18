import './App.css'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import { Scoreboard } from './components/Scoreboard'

function App() {
	return (
		<main className="container-fluid">
			<div>
				<div className="container mb-2 text-center">
					<h1 className="text-light">Memory Card Game</h1>
				</div>
				{/*<Scoreboard />*/}
				<Cards />
				{/*<Footer />*/}
			</div>
		</main>
	)
}

export default App
