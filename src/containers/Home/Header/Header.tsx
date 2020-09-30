import {FunctionComponent} from "react";
import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import "../../../Common.scss";
import "./Header.scss";

interface HeaderProps
{
	image?: string,
	clip?: string
}

export const Header: FunctionComponent<HeaderProps> = (props: HeaderProps): JSX.Element =>
{
	return (
		<Grid className={"header"} container direction={"column"}
			  justify={"center"} alignContent={"center"}
			  style={{backgroundImage: `url(${props.image})`}}>
			<Typography className={"header-typo"} variant={"h1"} component={"h1"}>
				AION Tribute
			</Typography>
			<section>
				<Grid className={"header-buttons"} container direction={"row"} justify={"center"}
					  alignItems={"center"}>
					<Button variant="outlined" color={"primary"} size={"large"}>Default</Button>
					<Button variant="outlined" color={"secondary"} size={"large"}>Default</Button>
				</Grid>
			</section>
		</Grid>
	);
};

export default Header;