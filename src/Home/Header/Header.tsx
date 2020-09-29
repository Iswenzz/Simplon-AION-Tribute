import {FunctionComponent} from "react";
import React from "react";
import "./Header.scss";
import {Grid} from "@material-ui/core";

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
			<h1>Lorem Ipsum</h1>
		</Grid>
	);
};

export default Header;