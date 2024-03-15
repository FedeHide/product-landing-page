export default function Footer(): JSX.Element {
	return (
		<>
			<footer className="form-section">
				<p>SUBSCRIBE TO NEWSLETTER</p>
				<form id="form" action="https://www.freecodecamp.com/email-submit">
					<div className="email-form">
						<input
							name="email"
							id="email"
							type="email"
							placeholder="Enter your Email address"
							required
						/>
					</div>
					<div className="submit-btn">
						<input value="Submit" id="submit" type="submit" />
					</div>
				</form>
			</footer>
		</>
	)
}
