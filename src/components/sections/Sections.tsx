export default function Sections(): JSX.Element {
	return (
		<>
			<section className="hero">
				<div className="hero-title left">
					<h2>NEW ARRIVAL</h2>
				</div>
				<div className="hide-video"></div>
				<div className="video-wrapper">
					<iframe
						id="video"
						src="https://www.youtube.com/embed/R8rl2HRM0Fg?autoplay=1&mute=1&loop=1&controls=0&disablekb=1"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
					<div className="hide-cursor"></div>
				</div>
				<div className="hero-title right">
					<h2>
						<a href="#email">ORDER NOW</a>
					</h2>
				</div>
			</section>
			<section>
				<article className="section-container" id="01">
					<h2 className="section-title section-right">01 ECLIPSE</h2>
					{/* eslint-disable-next-line */}
					<img src="https://i.postimg.cc/fWKzBfHM/gt1.jpg" alt="foto guitarra" />
				</article>
				<article className="section-container" id="02">
					<h2 className="section-title section-left">02 VIPER</h2>
					{/* eslint-disable-next-line */}
					<img src="https://i.postimg.cc/85dp8RNB/gt2.jpg" alt="foto guitarra" />
				</article>
				<article className="section-container" id="03">
					<h2 className="section-title section-left">03 HORIZON</h2>
					{/* eslint-disable-next-line */}
					<img src="https://i.postimg.cc/Dyw2D4DL/gt3.jpg" alt="foto guitarra" />
				</article>
			</section>
		</>
	)
}
