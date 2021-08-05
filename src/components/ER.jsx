import React from "react";
import event from "../assets/event.svg";
import placeholder from "../assets/placeholder.svg";
import recog from "../assets/recog.svg";
import feedback from "../assets/feedback.svg";
import { NavLink } from "react-router-dom";

const ER = () => {
	return (
		<div className="tool_container mt-3">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row gx-3">
						<div className="col-md-6">
							<div className="inner_tool shadowM px-3 pt-3 pb-2">
								<div className="d-flex justify-content-between align-items-center">
									<div className="d-flex align-items-center">
										<div>
											<img className="headIcon" src={event} alt="tool" />
										</div>
										<div className="ms-2">
											<h6 className="mb-0">Events</h6>
										</div>
									</div>
									<div>
										<button className="f12 fw500 themeColor4 border-0 bg-transparent">
											View All
										</button>
									</div>
								</div>

								<div className="row mt-3">
									<div className="col-12 mt-3">
										<NavLink to="/" className="text-decoration-none">
											<div className="row">
												<div className="col-5 col-md-4">
													<img className="w-100" src={placeholder} alt="" />
												</div>
												<div className="col-7 col-md-6 pt-1 ps-2 ps-md-0">
													<h6 className="f12 mb-1 color1">
														Paws in the Park - 2021
													</h6>
													<p className="f12 color1 ls-4 mb-0">
														Sat, June 3, 2021
													</p>
													<p className="f12 color2 ls-4 color2">
														Walt Disney World Resort
													</p>
												</div>
											</div>
										</NavLink>
									</div>
									<div className="col-12 mt-3">
										<NavLink to="/" className="text-decoration-none">
											<div className="row">
												<div className="col-5 col-md-4">
													<img className="w-100" src={placeholder} alt="" />
												</div>
												<div className="col-7 col-md-6 pt-1 ps-2 ps-md-0">
													<h6 className="f12 mb-1 color1">
														Paws in the Park - 2021
													</h6>
													<p className="f12 color1 ls-4 mb-0">
														Sat, June 3, 2021
													</p>
													<p className="f12 color2 ls-4 color2">
														Walt Disney World Resort
													</p>
												</div>
											</div>
										</NavLink>
									</div>
									<div className="col-12 mt-3">
										<NavLink to="/" className="text-decoration-none">
											<div className="row">
												<div className="col-5 col-md-4">
													<img className="w-100" src={placeholder} alt="" />
												</div>
												<div className="col-7 col-md-6 pt-1 ps-2 ps-md-0">
													<h6 className="f12 mb-1 color1">
														Paws in the Park - 2021
													</h6>
													<p className="f12 color1 ls-4 mb-0">
														Sat, June 3, 2021
													</p>
													<p className="f12 color2 ls-4 color2">
														Walt Disney World Resort
													</p>
												</div>
											</div>
										</NavLink>
									</div>
								</div>

								<button className="border-0 bg-transparent">
									<div className="d-flex align-items-center mt-3">
										<img src={feedback} alt="" className="me-2" />
										<p className="f12 mb-0 color2">Feedback</p>
									</div>
								</button>
							</div>
						</div>

						<div className="col-md-6 mt-3 mt-md-0">
							<div className="inner_tool shadowM px-3 pt-3 pb-2">
								<div className="d-flex justify-content-between align-items-center">
									<div className="d-flex align-items-center">
										<div>
											<img className="headIcon" src={recog} alt="tool" />
										</div>
										<div className="ms-2">
											<h6 className="mb-0">Recognition</h6>
										</div>
									</div>
									<div>
										<button className="f12 fw500 themeColor4 border-0 bg-transparent">
											View All
										</button>
									</div>
								</div>

								<div className="row mt-3">
									<div className="col-12 mt-3">
										<NavLink to="/" className="text-decoration-none">
											<div className="row">
												<div className="col-5 col-md-4">
													<img className="w-100" src={placeholder} alt="" />
												</div>
												<div className="col-7 col-md-6 pt-1 ps-2 ps-md-0">
													<h6 className="f12 mb-1 color1">
														Paws in the Park - 2021
													</h6>
													<p className="f12 color1 ls-4 mb-0">
														Sat, June 3, 2021
													</p>
													<p className="f12 color2 ls-4 color2">
														Walt Disney World Resort
													</p>
												</div>
											</div>
										</NavLink>
									</div>
									<div className="col-12 mt-3">
										<NavLink to="/" className="text-decoration-none">
											<div className="row">
												<div className="col-5 col-md-4">
													<img className="w-100" src={placeholder} alt="" />
												</div>
												<div className="col-7 col-md-6 pt-1 ps-2 ps-md-0">
													<h6 className="f12 mb-1 color1">
														Paws in the Park - 2021
													</h6>
													<p className="f12 color1 ls-4 mb-0">
														Sat, June 3, 2021
													</p>
													<p className="f12 color2 ls-4 color2">
														Walt Disney World Resort
													</p>
												</div>
											</div>
										</NavLink>
									</div>
									<div className="col-12 mt-3">
										<NavLink to="/" className="text-decoration-none">
											<div className="row">
												<div className="col-5 col-md-4">
													<img className="w-100" src={placeholder} alt="" />
												</div>
												<div className="col-7 col-md-6 pt-1 ps-2 ps-md-0">
													<h6 className="f12 mb-1 color1">
														Paws in the Park - 2021
													</h6>
													<p className="f12 color1 ls-4 mb-0">
														Sat, June 3, 2021
													</p>
													<p className="f12 color2 ls-4 color2">
														Walt Disney World Resort
													</p>
												</div>
											</div>
										</NavLink>
									</div>
								</div>

								<button className="border-0 bg-transparent">
									<div className="d-flex align-items-center mt-3">
										<img src={feedback} alt="" className="me-2" />
										<p className="mb-0 f12 color2">Feedback</p>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ER;
