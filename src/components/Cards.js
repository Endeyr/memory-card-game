import React, { useEffect, useState } from 'react'
import ahri from '../images/ahri.jpg'
import akali from '../images/akali.jpg'
import evelynn from '../images/evelynn.jpg'
import irelia from '../images/irelia.jpg'
import jinx from '../images/jinx.jpg'
import kaisa from '../images/kaisa.jpg'
import lux from '../images/lux.jpg'
import missfortune from '../images/missfortune.jpg'
import neeko from '../images/neeko.jpg'
import riven from '../images/riven.jpg'
import sona from '../images/sona.jpg'
import taliyah from '../images/taliyah.jpg'

export function Cards() {
	const [score, setScore] = useState(0)

	useEffect(() => {
		let isMounted = true

		return () => (isMounted = false)
	}, [score])

	function count() {
		setScore(score + 1)
	}

	return (
		<div>
			<h1 className="container mb-4 text-center">
				<div className="text-light">Click on an image to start!</div>
				<div className="text-light">{score}</div>
			</h1>
			<div className="container">
				<button type="button" className="btn mb-3 ms-1">
					<img
						src={ahri}
						height="190rem"
						width="11rem"
						className="card-img-top"
						alt="ahri"
						id="ahri"
						onClick={count}
						draggable={false}
					/>
				</button>
				<button type="button" className="btn mb-3 ms-1">
					<img
						src={akali}
						height="190rem"
						width="11rem"
						className="card-img-top"
						alt="akali"
						id="akali"
						onClick={count}
						draggable={false}
					/>
				</button>
				<button type="button" className="btn mb-3 ms-1">
					<img
						src={evelynn}
						height="190rem"
						width="11rem"
						className="card-img-top"
						alt="evelynn"
						id="evelynn"
						onClick={count}
						draggable={false}
					/>
				</button>
				<button type="button" className="btn mb-3 ms-1">
					<img
						src={irelia}
						height="190rem"
						width="11rem"
						className="card-img-top"
						alt="irelia"
						id="irelia"
						onClick={count}
						draggable={false}
					/>
				</button>
				<button type="button" className="btn mb-3 ms-1">
					<img
						src={jinx}
						height="190rem"
						width="11rem"
						className="card-img-top"
						alt="jinx"
						id="jinx"
						onClick={count}
						draggable={false}
					/>
				</button>
				<button type="button" className="btn mb-3 ms-1">
					<img
						src={kaisa}
						height="190rem"
						width="11rem"
						className="card-img-top"
						alt="kaisa"
						id="kaisa"
						onClick={count}
						draggable={false}
					/>
				</button>
				<button type="button" className="btn mb-3 ms-1">
					<img
						src={lux}
						height="190rem"
						width="11rem"
						className="card-img-top"
						alt="lux"
						id="lux"
						onClick={count}
						draggable={false}
					/>
				</button>
				<button type="button" className="btn mb-3 ms-1">
					<img
						src={missfortune}
						height="190rem"
						width="11rem"
						className="card-img-top"
						alt="missfortune"
						id="missfortune"
						onClick={count}
						draggable={false}
					/>
				</button>
				<button type="button" className="btn mb-3 ms-1">
					<img
						src={neeko}
						height="190rem"
						width="11rem"
						className="card-img-top"
						alt="neeko"
						id="neeko"
						onClick={count}
						draggable={false}
					/>
				</button>
				<button type="button" className="btn mb-3 ms-1">
					<img
						src={riven}
						height="190rem"
						width="11rem"
						className="card-img-top"
						alt="riven"
						id="riven"
						onClick={count}
						draggable={false}
					/>
				</button>
				<button type="button" className="btn mb-3 ms-1">
					<img
						src={sona}
						height="190rem"
						width="11rem"
						className="card-img-top"
						alt="sona"
						id="sona"
						onClick={count}
						draggable={false}
					/>
				</button>
				<button type="button" className="btn mb-3 ms-1">
					<img
						src={taliyah}
						height="190rem"
						width="11rem"
						className="card-img-top"
						alt="taliyah"
						id="taliyah"
						onClick={count}
						draggable={false}
					/>
				</button>
			</div>
		</div>
	)
}
