import React, {PureComponent} from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import "./MediaCard.scss";

export interface MediaCardProps extends React.HTMLProps<HTMLElement>
{
	image?: string,
	mediaClass?: string,
	desc?: string,
	height?: number | string,
	width?: number | string
}

export class MediaCard extends PureComponent<MediaCardProps>
{
	public render(): JSX.Element
	{
		return (
			<Card className={"mediacard"} style={{height: this.props.height, width: this.props.width}}>
				<CardActionArea>
					<CardMedia component={"img"} className={this.props.mediaClass} image={this.props.image} title={this.props.title} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{this.props.title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{this.props.desc}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Lorem
					</Button>
					<Button size="small" color="primary">
						Ipsum
					</Button>
				</CardActions>
			</Card>
		);
	}
}

export default MediaCard;