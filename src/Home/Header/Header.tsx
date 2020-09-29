import {FunctionComponent} from "react";
import React from "react";
import {Grid} from "@material-ui/core";
import "Common.scss";
import "./Header.scss";

interface HeaderProps
{
	image?: string
}

export const Header: FunctionComponent<HeaderProps> = (props: HeaderProps): JSX.Element =>
{
	return (
		<Grid className={"header"} container direction={"row"}
			  justify={"center"} alignContent={"center"}
			  style={{backgroundImage: `url(${props.image}`}}>
			<h1>AION Tribute</h1>
		</Grid>
	);
};

export default Header;