import React, {PureComponent} from "react";
import EmblaCarousel from "../../../components/EmblaCarousel/EmblaCarousel";
import {Container, Grid, Typography} from "@material-ui/core";
import Paper from "components/Paper/Paper";
import "./Presentation.scss";
import MediaCard from "../../../components/MediaCard/MediaCard";

const items = [
	<img src={"https://uploadstatic-sea.mihoyo.com/contentweb/20200924/2020092417575267258.jpg"} />,
	<img src={"https://uploadstatic-sea.mihoyo.com/contentweb/20200924/2020092417575221063.jpg"} />,
	<img src={"https://uploadstatic-sea.mihoyo.com/contentweb/20200924/2020092417575222081.jpg"} />,
	<img src={"https://uploadstatic-sea.mihoyo.com/contentweb/20200924/2020092417575255251.jpg"} />,
	<img src={"https://uploadstatic-sea.mihoyo.com/contentweb/20200924/2020092417575311801.jpg"} />,
	<img src={"https://uploadstatic-sea.mihoyo.com/contentweb/20200924/2020092417575488724.jpg"} />
];

export class Presentation extends PureComponent
{
	public render(): JSX.Element
	{
		return (
			<>
				<EmblaCarousel className={"presentation-carousel"} width={"100%"}
					autoplay={false} delayLength={10000} children={items} />
				<Grid container className={"presentation"} direction={"column"} alignItems={"center"} justify={"center"}>
					<Paper className={"presentation-paper"} title={"Lorem Ipsum"} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores atque, consequuntur debitis doloribus et incidunt laborum minima necessitatibus neque quidem rem similique tempore! Alias consequuntur dicta facere laudantium repudiandae."}
						image={"https://uploadstatic-sea.mihoyo.com/contentweb/20200924/2020092417575267258.jpg"}
						previewStyle={{right: "-20%"}} paperStyle={{left: "-10%"}} />
					<Grid container className={"presentation-cards"} justify={"center"} alignItems={"center"} direction={"row"}>
						<MediaCard title={"Lorem Ipsum"} image={"https://uploadstatic-sea.mihoyo.com/contentweb/20200924/2020092417575267258.jpg"} />
						<MediaCard title={"Lorem Ipsum"} image={"https://uploadstatic-sea.mihoyo.com/contentweb/20200924/2020092417575267258.jpg"} />
						<MediaCard title={"Lorem Ipsum"} image={"https://uploadstatic-sea.mihoyo.com/contentweb/20200924/2020092417575267258.jpg"} />
					</Grid>
					<Paper className={"presentation-paper"} title={"Lorem Ipsum"} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores atque, consequuntur debitis doloribus et incidunt laborum minima necessitatibus neque quidem rem similique tempore! Alias consequuntur dicta facere laudantium repudiandae."}
						image={"https://uploadstatic-sea.mihoyo.com/contentweb/20200924/2020092417575267258.jpg"}
						previewStyle={{left: "-20%"}} paperStyle={{right: "-10%"}} />
				</Grid>
			</>
		);
	}
}

export default Presentation;