export function Cards({ card, handleChoice }) {
	function handleClick() {
		handleChoice(card)
	}

	return (
		<button type="button" className="btn mb-3 ms-1">
			<img
				key={card.id}
				src={card.src}
				height="190rem"
				width="11rem"
				className="card-img-top"
				alt="card"
				onClick={handleClick}
				draggable={false}
			/>
		</button>
	)
}
