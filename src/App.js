import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import loader from "./assets/loader.svg";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		document.body.style.overflow = "hidden";

		window.addEventListener("load", (event) => {
			document.body.style.overflowY = "auto";
			const load = document.querySelector(".loading_page");
			load.style.opacity = "0";
			load.style.display = "none";
		});
	}, []);

	return (
		<>
			<div className="loading_page">
				<div className="inner_loading">
					<img src={loader} alt="" />
				</div>
			</div>
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		</>
	);
}

export default App;
