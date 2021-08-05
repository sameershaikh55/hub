import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import gallery from "../assets/gallery.svg";

const Hero = () => {
	return (
		<div className="hero_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="d-flex flex-column align-items-center">
						<div className="inp_container position-relative">
							<input
								type="text"
								name=""
								id=""
								placeholder="Search tools and more"
								className="px-4"
							/>
							<NavLink to="/" className="text-decoration-none text-dark">
								<FaSearch
									fontSize="1.2rem"
									className="search_icon position-absolute"
								/>
							</NavLink>
						</div>
						<div className="under_input mt-3 px-3 py-1 px-sm-5 rounded-pill d-flex align-items-center">
							<button className="border-0 color1 fw500">
								<img src={gallery} alt="" className="me-2" />
								Pull Back the Curtain
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
