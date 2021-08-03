import React from "react";
import { GrGallery } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";

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
							<FaSearch
								fontSize="1.2rem"
								className="search_icon position-absolute"
							/>
						</div>
						<div className="under_input mt-3 px-3 px-sm-5 rounded-pill d-flex align-items-center">
							<GrGallery className="me-2" /> Pull Back the Curtain
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
