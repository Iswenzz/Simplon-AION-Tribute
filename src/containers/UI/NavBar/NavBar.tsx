import {FunctionComponent} from "react";
import React from "react";
import {AppBar, Toolbar, Button, Typography, Grid} from "@material-ui/core";
import "./NavBar.scss";

export const NavBar: FunctionComponent = (): JSX.Element =>
{
	return (
		<AppBar className={"navbar"} position="fixed">
			<Toolbar>
				<a href="/" className={"navbar-logo"}>
					<Typography variant={"h2"} component={"h2"}>
						AION Tribute
					</Typography>
				</a>
				<Grid container direction={"row"} justify={"flex-end"} alignItems={"center"}>
					<Button color="inherit">Home</Button>
					<Button color="inherit">News</Button>
					<Button color="inherit">Explore</Button>
					<Button color="inherit">Forums</Button>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;