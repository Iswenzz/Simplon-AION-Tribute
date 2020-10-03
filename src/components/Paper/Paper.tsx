import React, {FunctionComponent, memo} from "react";
import {Container, Grid, Typography} from "@material-ui/core";
import "./Paper.scss";
import {useMediaQuery} from "react-responsive";

export interface PaperProps
{
	title?: string,
	desc?: string | JSX.Element,
	image?: string,
	className?: string,
	previewStyle?: React.CSSProperties,
	paperStyle?: React.CSSProperties
}

export const Paper: FunctionComponent<PaperProps> = (props: PaperProps): JSX.Element =>
{
	const isPortrait = useMediaQuery({ orientation: "portrait" });
	const isTabletOrMobileDevice = useMediaQuery({ query: "(max-device-width: 1224px)" });

	const mobilePaper: JSX.Element = (
		<Grid container justify={"center"} alignItems={"center"} className={`paper-mobile ${props.className}`}>
			<Grid container direction={"column"} justify={"space-evenly"}
				  alignItems={"center"} className={"paper-mobile-container"} style={props.paperStyle}>
				<header>
					<Typography align={"center"} component={"h2"} variant={"h2"}>
						{props.title}
					</Typography>
				</header>
				<Grid container direction={"column"} justify={"center"} alignItems={"center"}>
					<section className={"paper-mobile-preview"} style={props.previewStyle}>
						<img src={props.image} alt={"Presentation Paper"} />
					</section>
					<Typography component={"p"} paragraph>
						{props.desc}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);

	const desktopPaper: JSX.Element = (
		<Grid container justify={"center"} alignItems={"center"} className={`paper ${props.className}`}>
			<Grid container direction={"column"} justify={"space-evenly"}
				  alignItems={"center"} className={"paper-container"} style={props.paperStyle}>
				<header>
					<Typography align={"center"} component={"h2"} variant={"h2"}>
						{props.title}
					</Typography>
				</header>
				<Container>
					<Typography component={"p"} paragraph>
						{props.desc}
					</Typography>
				</Container>
				<section className={"paper-preview"} style={props.previewStyle}>
					<img src={props.image} alt={"Presentation Paper"} />
				</section>
			</Grid>
		</Grid>
	);

	return isTabletOrMobileDevice || isPortrait ? mobilePaper : desktopPaper;
};

export default memo(Paper);