import React from "react";
import feedback from "../assets/feedback.svg";
import reload from "../assets/reload.svg";
import update from "../assets/update.svg";

const Update = () => {
	return (
		<div className="tool_container mt-3">
			<div className="page_container">
				<div className="container-fluid">
					<div className="inner_tool shadowM px-3 pt-3 pb-2">
						<div className="row">
							<div className="col-md-6 pe-3">
								<div className="d-flex justify-content-between">
									<div className="d-flex align-content-start">
										<div>
											<img className="headIcon" src={reload} alt="tool" />
										</div>
										<div className="ms-2">
											<h6>Updates</h6>
											<p className="f12 color2">
												Refresh this page to view latest messages
											</p>
										</div>
									</div>
									<p className="f12 fw500 themeColor4">View All</p>
								</div>

								<div className="text-center pt-2">
									<img src={update} alt="" />
									<p className="mb-0 f14 color2 mt-2">No Messages</p>
									<p className="mb-0 f12 color2">Have a magical day!</p>
								</div>
							</div>

							<div className="d-block d-md-none px-3">
								<hr className="hr mt-3" />
							</div>
							<div className="leftBorder col-md-6 ps-3">
								{[1, 1, 1].map((prev, i) => {
									return (
										<div key={i}>
											<h6 className="f14 color1 text-uppercase">
												IMPORTANT INFORMATION REGARDING TRAINING AT Disney’s
												Hollywood Studios
											</h6>
											<p className="f12 color1">
												For more information, please review the following
												information.
											</p>
											{i !== 2 && <hr className="hr" />}
											{i === 2 && (
												<p className="themeColor4 f12 mb-0 fw500">More News</p>
											)}
										</div>
									);
								})}
							</div>
						</div>

						<hr className="mt-3 mb-2 hr" />
						<div className="d-flex align-items-center">
							<img src={feedback} alt="" className="me-2" />
							<p className="f12 mb-0 color2">Feedback</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Update;
