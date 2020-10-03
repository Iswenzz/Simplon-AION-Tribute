import {PureComponent} from "react";
import React from "react";
import {Grid, Typography} from "@material-ui/core";
import "./Header.scss";

interface HeaderProps
{
	image?: string,
	clip?: string
}

export class Header extends PureComponent<HeaderProps>
{
 	public render(): JSX.Element
	{
		return (
			<Grid className={"header"} container direction={"column"}
				  justify={"center"} alignContent={"center"}
				  style={{backgroundImage: `url(${this.props.image})`}}>
				<Typography className={"header-typo"} variant={"h1"} component={"h1"}>
					AION Tribute
				</Typography>
			</Grid>
		);
	}
}

export default Header;