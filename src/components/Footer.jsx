import React from "react";
import i1 from "../assets/footer/i1.svg";
import i2 from "../assets/footer/i2.svg";
import i3 from "../assets/footer/i3.svg";
import i4 from "../assets/footer/i4.svg";
import i5 from "../assets/footer/i5.svg";

const Footer = () => {
	const data = [i3, i2, i5, i1, i4];
	return (
		<div className="footer_container mt-3 pt-4 pt-md-5 pb-4">
			<div className="page_container">
				<div className="container-fluid">
					<div>
						<ul className="mb-0 list-unstyled d-flex justify-content-center text-white mt-4">
							<li className="w500 pe-3">Search</li>
							<li className="w500 ps-3">Help</li>
						</ul>

						<p className="fw500 mt-4 text-white text-center">
							Other Segment Emplaoyee Sites
						</p>

						<div className="logos_container d-flex flex-wrap justify-content-center align-items-center">
							{data.map((prev, i) => {
								return (
									<div key={i} className="img_card_footer text-center">
										<img src={prev} alt="" />
									</div>
								);
							})}
						</div>

						<p className="mb-0 text-center text-white mt-4">© Disney</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
