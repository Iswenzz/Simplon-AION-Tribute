import React, {FunctionComponent} from "react";
import Header from "./Header/Header";
import VideoBG from "components/VideoBG/VideoBG";
import NavBar from "../UI/NavBar/NavBar";
import "./Home.scss";
import Presentation from "./Presentation/Presentation";

export const Home: FunctionComponent = (): JSX.Element =>
{
	return (
		<>
			{/* NavBar */}
			<NavBar />

			{/* Header */}
			<VideoBG className={"header-video"} autoPlay muted loop poster={""}
				sources={[{src: require("../../assets/videos/aion-open-beta-trailer.mp4"), type: "video/mp4"}]}
					 clip={require("../../assets/images/clip/video-header-clip.png")} />
			<Header />

			{/* Content */}
			<Presentation />
		</>
	);
};

export default Home;