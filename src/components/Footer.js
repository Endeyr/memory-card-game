export function Footer() {
	var today = new Date()

	return (
		<footer className="container">
			<div>
				<div className="text-light">
					<h5>Memory Card Game - {today.getFullYear()}</h5>
					<p>
						By Aaron Thompson. Found at{' '}
						<a href="https://github.com/Endeyr/memory-card-game" alt="Github">
							Github
						</a>
						.
					</p>
				</div>
			</div>
		</footer>
	)
}
