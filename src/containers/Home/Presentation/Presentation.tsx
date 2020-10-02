import React, {PureComponent} from "react";
import EmblaCarousel from "../../../components/EmblaCarousel/EmblaCarousel";
import {Grid} from "@material-ui/core";
import { Parallax } from "react-parallax";
import Paper from "components/Paper/Paper";
import "./Presentation.scss";
import MediaCard from "../../../components/MediaCard/MediaCard";

const items = [
	<img src={require("assets/images/bg/25.jpg")} />,
	<img src={require("assets/images/bg/26.jpg")} />,
	<img src={require("assets/images/bg/35.jpg")} />,
	<img src={require("assets/images/bg/24.jpg")} />,
	<img src={require("assets/images/bg/32.jpg")} />,
	<img src={require("assets/images/bg/39.jpg")} />,
	<img src={require("assets/images/bg/19.jpg")} />,
];

const towerOfEternityLore = (
	<>
		The creation of Atreia remains a mystery even to its earliest inhabitants. The existence of Aion, the powerful entity who created it, exists as the only immutable fact surrounding the celestial event. An ageless deity with authority over the cosmos, Aion took the shape of a colossal tower as it presided over the formation of Atreia, and its earliest species, called the Drakan. As a master watchmaker would construct an elegant timepiece, Aion molded and shaped every mountain, valley and continent on the planet.<br/>
		In its nativity, the world of Atreia stood as the pinnacle of creation. Beautiful and pure, life flourished within the interior of the planet where Aion had positioned itself as a wondrous structure known as The Tower of Eternity. The Tower pierced the sky and connected one side of the world to the other. A monument to the greatness of Aion, The Tower of Eternity eclipsed everything on Atreia.<br/>
		The Tower anchored the world as much as the lives of the Drakan living on it. However, the Drakan were not the only species on the planet. As mysterious as the creation of the world itself, and of the powerful Drakan, stood the birth of other sentient species known as the Sapiens. Humankind was another such species. Humans lived and flourished throughout the known world, nurtured physically and spiritually by the Tower of Eternity and a reverence to Aion. Humans served Aion with humility and were provided with everything they needed through the nurturing glow of the Tower. Life prospered for thousands of years under this celestial arrangement.<br/>
	</>
);

const theMilleniumWarLore = (
	<>
		The twelve Empyrean Lords, who Aion appointed to protect the world of Atreia and its inhabitants, fought bravely against the Balaur oppressors for years. Appearing as winged and luminescent beings, the Empyrean Lords were admired and worshiped by the Humans for their bravery and unflinching loyalty to preserving life and a reverence to Aion. The two leaders of the Empyrean Lords - Siel and Israphel - assumed guardianship of the Tower of Eternity. While dissimilar in thought and character, Siel and Israphel united in defense of the Tower.<br/>
		To assist in the battle against the Balaur, Aion gifted the Empyrean Lords with a powerful substance known as Aether. An energy source with limitless potential, the use of Aether was limited to the pure and devout. This included a select group of Human followers. The Empyrean Lords would identify and handpick certain Humans to undergo a physical and spiritual transformation known as Ascension, which saw each Human candidate infused with the power of Aether. As part of the Ascension process, massive wings would erupt from the backs of each Human, gifting them with the power of flight.<br/>
		The war raged on the outskirts of the field where Daevas and the Empyrean Lords fought bravely against their enemies. Despite the bravery and ferocity displayed on each side of the conflict, each soon realized the futility of the situation. The Balaur could not enter the field to destroy the Tower and the Empyrean Lords and their Daevas could not venture outside the Aetheric Field long enough to secure a decisive victory.<br/>
	</>
);

export class Presentation extends PureComponent
{
	public render(): JSX.Element
	{
		return (
			<>
				<Parallax className={"parallax-carousel"} bgImageAlt="index" strength={400}
						  bgImage={require("assets/images/bg/43.jpg")}>
					<EmblaCarousel className={"presentation-carousel"} width={"100%"}
								   autoplay={false} delayLength={10000} children={items} />
				</Parallax>
				<Grid container className={"presentation"} direction={"column"} alignItems={"center"} justify={"center"}>
					<Paper className={"presentation-paper"} title={"The Tower of Eternity"} desc={towerOfEternityLore}
						   image={require("assets/images/bg/40.jpg")}
						   previewStyle={{right: "-30%"}} paperStyle={{left: "-20%"}} />
					<Parallax className={"presentation-cards"} bgImageAlt="index" strength={400}
							  bgImage={require("assets/images/bg/21.jpg")}>
						<Grid container justify={"center"} alignItems={"stretch"} direction={"row"}>
							<MediaCard title={"Katalam"} desc={"Katalam was rich in diversity. An abundance of forests spread along the northern parts and sides of the map, an image in stark contrast with the arid and dry wasteland that made up the center. The southern part of the map was buried under a glacier, with its many mountain formations, cavern systems and imposing ice structures making for one of the game's most popular sightseeing spots."} image={require("assets/images/bg/17.jpg")} />
							<MediaCard title={"Pandaemonium"} desc={"Pandaemonium, the city of darkness, is the capital of the Asmodian faction and is the apex of Asmodian technology, culture and style. Pandaemonium is the center of Asmodian life and as such, all aspects of Asmodian lifestyle can be found there. From the master artisans to the traders and brokers to government officials, all the denizens of Pandaemonium work diligently for the prosperity of Asmodae."} image={require("assets/images/bg/33.jpg")} />
							<MediaCard title={"Abyss"} desc={"During the Cataclysm, the Tower of Eternity was shattered. When this occurred Atreia was sundered into two halves, leaving a base for the tower on each half of the world. Between the tower’s bases a great disharmonious resonance began to flow. This is where Reshanta lies."} image={require("assets/images/bg/31.jpg")} />
						</Grid>
					</Parallax>
					<Paper className={"presentation-paper"} title={"The Millennium War"} desc={theMilleniumWarLore}
						image={require("assets/images/bg/41.jpg")}
						previewStyle={{left: "-30%"}} paperStyle={{right: "-20%"}} />
				</Grid>
			</>
		);
	}
}

export default Presentation;