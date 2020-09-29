import React, {FunctionComponent} from "react";
import Header from "./Header/Header";

export const Home: FunctionComponent = (): JSX.Element =>
{
	return (
		<>
			<video className={"header-video"} autoPlay muted loop poster="">
				<source src={require("../assets/videos/aion-open-beta-trailer.mp4")}
					type="video/mp4" />
			</video>
			<Header />
		</>
	);
};

export default Home;