import React, {FunctionComponent} from "react";
import Header from "./Header/Header";
import VideoBG from "components/VideoBG/VideoBG";
import NavBar from "../UI/NavBar/NavBar";
import Presentation from "./Presentation/Presentation";
import Footer from "../UI/Footer/Footer";
import "./Home.scss";

export const Home: FunctionComponent = (): JSX.Element =>
{
	return (
		<>
			<NavBar />
			<VideoBG className={"header-video"} autoPlay muted loop poster={""}
				sources={[{src: require("../../assets/videos/aion-obt-trailer.mp4"), type: "video/mp4"}]}
					 clip={require("../../assets/images/clip/video-header-clip.png")} />
			<Header />
			<Presentation />
			<Footer />
		</>
	);
};

export default Home;