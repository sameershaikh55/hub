import React from "react";
import news from "../assets/news.svg";

const News2 = () => {
	return (
		<div className="tool_container mt-3">
			<div className="page_container">
				<div className="container-fluid">
					<div className="inner_tool shadowM px-3 pt-3 pb-2">
						<div className="d-flex align-items-center justify-content-between">
							<div className="d-flex align-items-center">
								<img className="headIcon" src={news} alt="tool" />
								<h6 className="mb-0 ms-2">News</h6>
							</div>
							<p className="f12 mb-0 fw500 themeColor4">View All</p>
						</div>

						<div className="row mt-3">
							<div className="col-12">
								<h5 className="color1 bgColorSky rounded-1 py-1 px-2 px-md-4">
									Operational Status
								</h5>
							</div>

							<div className="col-6 mt-2 ps-4 ps-md-5">
								{[1, 1, 1, 1, 1, 1].map((prev, i) => {
									return (
										<div key={i}>
											<h6 className="mb-1 f12 color1">Magic Kingdom Park</h6>
											<p className="f12 color1">Click here</p>
										</div>
									);
								})}
							</div>

							<div className="col-6 mt-2 ps-4 ps-md-5">
								{[1, 1, 1, 1, 1, 1].map((prev, i) => {
									return (
										<div key={i}>
											<h6 className="mb-1 f12 color1">Magic Kingdom Park</h6>
											<p className="f12 color1">Click here</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News2;
