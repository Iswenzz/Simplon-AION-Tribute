import React, {PureComponent} from "react";
import {Container, Grid, Typography} from "@material-ui/core";
import "./Paper.scss";

export interface PaperProps
{
	title?: string,
	desc?: string | JSX.Element,
	image?: string,
	className?: string,
	previewStyle?: React.CSSProperties,
	paperStyle?: React.CSSProperties
}

export class Paper extends PureComponent<PaperProps>
{
	public render(): JSX.Element
	{
		return (
			<section className={this.props.className}>
				<div className="paper">
					<Grid container direction={"column"} justify={"space-evenly"} alignItems={"center"} className={"paper-container"} style={this.props.paperStyle}>
						<Typography align={"center"} component={"h2"} variant={"h2"}>
							{this.props.title}
						</Typography>
						<Container>
							<Typography component={"p"} paragraph>
								{this.props.desc}
							</Typography>
						</Container>
						<section className={"paper-preview"} style={this.props.previewStyle}>
							<img src={this.props.image} alt={"Presentation Paper"} />
						</section>
					</Grid>
				</div>
			</section>
		);
	}
}

export default Paper;