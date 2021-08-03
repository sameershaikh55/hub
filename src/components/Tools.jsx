import React from "react";
import tool from "../assets/icons/tool.svg";
import t1 from "../assets/tools/t1.svg";
import t2 from "../assets/tools/t2.svg";
import t3 from "../assets/tools/t3.svg";
import t4 from "../assets/tools/t4.svg";
import t5 from "../assets/tools/t5.svg";
import t6 from "../assets/tools/t6.svg";
import t7 from "../assets/tools/t7.svg";
import t8 from "../assets/tools/t8.svg";
import t9 from "../assets/tools/t9.svg";
import t10 from "../assets/tools/t10.svg";
import t11 from "../assets/tools/t11.svg";
import t12 from "../assets/tools/t12.svg";
import t13 from "../assets/tools/t13.svg";
import t14 from "../assets/tools/t14.svg";
import t15 from "../assets/tools/t15.svg";
import t16 from "../assets/tools/t16.svg";
import t17 from "../assets/tools/t17.svg";
import t18 from "../assets/tools/t18.svg";
import t19 from "../assets/tools/t19.svg";
import t20 from "../assets/tools/t20.svg";
import t21 from "../assets/tools/t21.svg";
import feedback from "../assets/feedback.svg";

const Tools = () => {
	const data = [
		t1,
		t2,
		t3,
		t4,
		t5,
		t6,
		t7,
		t8,
		t9,
		t10,
		t11,
		t12,
		t13,
		t14,
		t15,
		t16,
		t17,
		t18,
		t19,
		t20,
		t21,
	];

	return (
		<div className="tool_container mt-3">
			<div className="page_container">
				<div className="container-fluid">
					<div className="inner_tool shadowM px-3 pt-3 pb-2">
						<div className="d-flex align-items-center">
							<img className="headIcon" src={tool} alt="tool" />
							<h6 className="mb-0 ms-2">Tools</h6>
						</div>

						<div className="d-flex flex-wrap mt-4">
							{data.map((prev, i) => {
								return (
									<div key={i} className="toolCard text-center">
										<img src={prev} alt="" />
										<p className="text-center mt-2 color1 f12">
											Name <br /> here
										</p>
									</div>
								);
							})}
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

export default Tools;
