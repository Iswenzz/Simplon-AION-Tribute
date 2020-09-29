import React, {FunctionComponent} from "react";
import Header from "./Header/Header";

export const Home: FunctionComponent = (): JSX.Element =>
{
	return (
		<>
			<Header image={require("../assets/images/fantasy-bg.jpg")} />
		</>
	);
};

export default Home;