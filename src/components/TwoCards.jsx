import React from "react";
import cardImg from "../assets/cardImg.svg";

const TwoCards = () => {
	return (
		<div className="two_cards_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-sm-6 col-md-12 px-4 mt-3">
							<div className="row align-items-center shadowM">
								<div className="col-12 col-md-5 pe-0 pe-md-3 ps-0">
									<img className="w-100" src={cardImg} alt="" />
								</div>
								<div className="col-12 col-md-7 py-3 py-md-0">
									<h6 className="color1">
										The World’s Most Magical Celebration
									</h6>
									<p className="color1 f12 small lh-base">
										Walt Disney World’s 50th Anniversary begins October 1, and
										we are so excited to host “The World’s Most Magical
										Celebration!” Visit the 50th Anniversary HUBsite to view all
										the latest info as it’s released.
									</p>
									<button className="btnBg text-white border-0 py-2 px-5 rounded-pill small">
										Learn More
									</button>
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-12 px-4 mt-3">
							<div className="row align-items-center shadowM">
								<div className="col-12 col-md-5 pe-0 pe-md-3 ps-0">
									<img className="w-100" src={cardImg} alt="" />
								</div>
								<div className="col-12 col-md-7 py-3 py-md-0">
									<h6 className="color1">
										The World’s Most Magical Celebration
									</h6>
									<p className="color1 f12 small lh-base">
										Walt Disney World’s 50th Anniversary begins October 1, and
										we are so excited to host “The World’s Most Magical
										Celebration!” Visit the 50th Anniversary HUBsite to view all
										the latest info as it’s released.
									</p>
									<button className="btnBg text-white border-0 py-2 px-5 rounded-pill small">
										Learn More
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TwoCards;
