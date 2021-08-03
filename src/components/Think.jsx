import React from "react";
import think from "../assets/think.svg";

const Think = () => {
	return (
		<div className="tool_container mt-3">
			<div className="page_container px-1 px-md-0">
				<div className="container-fluid">
					<div className="inner_tool shadowM px-2">
						<div className="row align-items-center">
							<div className="col-12 col-md-5 py-4 text-center bgColorSky">
								<img src={think} alt="" />
							</div>
							<div className="col-12 col-md-7 text-center py-4 py-md-0 px-5 px-md-3">
								<h6 className="color1 mb-2">What do you think?</h6>
								<p className="color1 f12">
									We’d love to hear what you think of the Hub and how we can
									improve!
								</p>
								<div>
									<button className="feedbackBtn bg-transparent f12 px-3 py-2 rounded-pill">
										Give Feedback
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

export default Think;
