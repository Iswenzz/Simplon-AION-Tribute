import React, {PureComponent} from "react";
import EmblaCarousel from "../../../components/EmblaCarousel/EmblaCarousel";
import * as uuid from "uuid";

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
			<EmblaCarousel autoplay delayLength={2000}>
				{items.map((item, i) => (
					<div key={i}>
						{item}
					</div>
				))}}
			</EmblaCarousel>
		);
	}
}

export default Presentation;