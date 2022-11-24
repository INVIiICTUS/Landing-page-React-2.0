import React from "react";

function Navbar() {
	return (
		<div className="container">
			<nav className="navbar bg-dark navbar-expand-lg d-flex justify-content-between navbar-light ">
				<div>
                    <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/800px-Harry_Potter_wordmark.svg.png" alt="" />
				</div>
				<div>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon text-white"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link text-white" href="https://www.wizardingworld.com/">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="https://es.wikipedia.org/wiki/Harry_Potter">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="https://www.linkedin.com/in/j-enrique-ar%C3%A9s-lorenzo-6a636a148/">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
