import React from "react";
import ER from "../components/ER";
import Footer from "../components/Footer";

// IMPORTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import News from "../components/News";
import News2 from "../components/News2";
import Think from "../components/Think";
import Tools from "../components/Tools";
import TwoCards from "../components/TwoCards";
import Update from "../components/Update";

const Home = () => {
	return (
		<>
			<Header />
			<div className="body_container">
				<Hero />
				<Tools />
				<TwoCards />
				<Update />
				<News />
				<ER />
				<News2 />
				<Think />
				<Footer />
			</div>
		</>
	);
};

export default Home;
