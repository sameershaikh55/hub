import React from "react";
import news from "../assets/news.svg";
import placeholder from "../assets/placeholder.svg";

const News = () => {
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
							{[1, 1, 1].map((prev, i) => {
								return (
									<div key={i} className="col-md-4 mt-3 mt-md-0">
										<img className="w-100" src={placeholder} alt="" />
										<p className="f12 mt-2 mb-1 color3">MON 03</p>
										<p className="f12 color1 ls-4">
											This is a description for a news spotlight. This is a
											description for a news spotlight.
										</p>
									</div>
								);
							})}
						</div>

						<div className="row mt-3">
							{[1, 1].map((prev, i) => {
								return (
									<div key={i} className="col-sm-6 col-md-4">
										<div className="row">
											{[1, 1, 1].map((prev, i) => {
												return (
													<div key={i} className="col-12 mt-2 mt-3 mt-md-0">
														<div className="row">
															<div className="col-5">
																<img
																	className="w-100"
																	src={placeholder}
																	alt=""
																/>
															</div>
															<div className="col-7 ps-2 ps-md-0">
																<p className="f12 mb-0 color3">MON 03</p>
																<p className="f12 color1 ls-4">
																	This is a description for a news spotlight.
																</p>
															</div>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								);
							})}
							<div className="col-md-4 mt-4 mt-md-0 leftBorder">
								<h6 className="color1">Operational Updates</h6>
								{[1, 1, 1].map((prev, i) => {
									return (
										<div className="col-7 ps-0">
											<p className="f12 mb-0 color3">MON 03</p>
											<p className="f12 color1 ls-4">
												This is a description for a news spotlight.
											</p>
										</div>
									);
								})}
								<p className="themeColor4 f12 mb-0 fw500">
									More Operational Updates
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;
