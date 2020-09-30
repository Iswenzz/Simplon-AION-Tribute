import {FunctionComponent} from "react";
import React from "react";
import {AppBar, Toolbar, Button, Typography, Grid} from "@material-ui/core";
import "./NavBar.scss";

export const NavBar: FunctionComponent = (): JSX.Element =>
{
	return (
		<AppBar className={"navbar"} position="absolute">
			<Toolbar>
				<Grid container direction={"row"} justify={"flex-end"} alignItems={"center"}>
					<Button color="inherit">IDK</Button>
					<Button color="inherit">What</Button>
					<Button color="inherit">Im</Button>
					<Button color="inherit">Doing</Button>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;