import React, {PureComponent} from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import "./MediaCard.scss";

export interface MediaCardProps extends React.HTMLProps<HTMLElement>
{
	image?: string,
	mediaClass?: string,
}

export class MediaCard extends PureComponent<MediaCardProps>
{
	public render(): JSX.Element
	{
		return (
			<Card className={this.props.className || "mediacard"} component={"article"}>
				<CardActionArea>
					<CardMedia component={"img"} className={this.props.mediaClass} image={this.props.image} title={this.props.title} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{this.props.title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit iusto, minima nulla placeat recusandae. Dignissimos excepturi magni molestias nihil possimus quia suscipit tempore! Eaque expedita mollitia nihil reiciendis rem!
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