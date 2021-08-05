import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";
import Profile from "../assets/Profile.jpg";

const Header = () => {
	useEffect(() => {
		// FOR NAVBAR SCROLLING EFFECT START
		window.addEventListener("scroll", function () {
			var header = document.querySelector(".inner_header_container");
			if (header !== null) {
				header.classList.toggle("sticky", window.scrollY > 0);
				header.classList.toggle("shadow", window.scrollY > 0);
			}
		});
	}, []);
	return (
		<div className="header_container px-2">
			<div className="inner_header_container py-2">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 mx-auto">
							<div className="d-flex justify-content-between align-items-center">
								<NavLink to="/">
									<div className="logo_container d-flex align-items-center">
										<img src={logo} alt="logo" />
										<img className="ms-3" src={logo2} alt="logo" />
									</div>
								</NavLink>
								<div className="d-flex align-items-center">
									<NavLink to="/" className="text-decoration-none">
										<h6 className="d-none d-md-block mb-0 text-white">
											Sign Out
										</h6>
									</NavLink>
									<div className="profile_img ms-2">
										<NavLink to="/" className="text-decoration-none">
											<img src={Profile} alt="" />
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
