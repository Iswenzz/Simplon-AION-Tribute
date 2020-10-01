import React, {PureComponent} from "react";
import * as uuid from "uuid";

export interface VideoBGSource
{
	src: string,
	type: string
}

export interface VideoBGProps extends React.HTMLProps<HTMLVideoElement>
{
	sources: VideoBGSource[]
	clip?: string
}

export class VideoBG extends PureComponent<VideoBGProps>
{
	public render(): JSX.Element
	{
		return (
			<video className={this.props.className} autoPlay={this.props.autoPlay}
				   muted={this.props.muted} loop={this.props.loop} poster={this.props.poster}
				   style={{maskImage: `url(${this.props.clip})`,
					   WebkitMaskImage: `url(${this.props.clip})`}}>
				{this.props.sources.map((source: VideoBGSource) => (
					<source key={uuid.v4()} src={source.src} type={source.type} />
				))}
			</video>
		);
	}
}

export default VideoBG;