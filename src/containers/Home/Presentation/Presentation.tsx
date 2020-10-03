import React, {PureComponent} from "react";
import EmblaCarousel from "../../../components/EmblaCarousel/EmblaCarousel";
import {Grid} from "@material-ui/core";
import {Parallax} from "react-parallax";
import Paper from "components/Paper/Paper";
import MediaCard from "../../../components/MediaCard/MediaCard";
import {Element} from "react-scroll/modules";
import Zoom from "react-medium-image-zoom";
import "./Presentation.scss";
import "react-medium-image-zoom/dist/styles.css";

const items = [
	<Zoom overlayBgColorEnd={"rgba(0, 0, 0, 0.7)"}><img src={require("assets/images/bg/52.jpg")} alt={"Aion Preview"} width={500} /></Zoom>,
	<Zoom overlayBgColorEnd={"rgba(0, 0, 0, 0.7)"}><img src={require("assets/images/bg/26.jpg")} alt={"Aion Preview"} width={500} /></Zoom>,
	<Zoom overlayBgColorEnd={"rgba(0, 0, 0, 0.7)"}><img src={require("assets/images/bg/25.jpg")} alt={"Aion Preview"} width={500} /></Zoom>,
	<Zoom overlayBgColorEnd={"rgba(0, 0, 0, 0.7)"}><img src={require("assets/images/bg/24.jpg")} alt={"Aion Preview"} width={500} /></Zoom>,
	<Zoom overlayBgColorEnd={"rgba(0, 0, 0, 0.7)"}><img src={require("assets/images/bg/56.jpg")} alt={"Aion Preview"} width={500} /></Zoom>,
	<Zoom overlayBgColorEnd={"rgba(0, 0, 0, 0.7)"}><img src={require("assets/images/bg/55.jpg")} alt={"Aion Preview"} width={500} /></Zoom>,
	<Zoom overlayBgColorEnd={"rgba(0, 0, 0, 0.7)"}><img src={require("assets/images/bg/19.jpg")} alt={"Aion Preview"} width={500} /></Zoom>
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
				<EmblaCarousel className={"presentation-carousel"} width={"100%"} loop
							   autoplay={false} delayLength={10000} children={items} />
				<Grid container className={"presentation"} direction={"column"} alignItems={"center"} justify={"center"}>
					<Element name={"lore-section"} />
					<Paper className={"presentation-paper"} title={"The Tower of Eternity"} desc={towerOfEternityLore}
						   image={require("assets/images/bg/40.jpg")}
						   previewStyle={{right: "-30%"}} paperStyle={{left: "-8%"}} />
					<Element name={"maps-section"} />
					<Parallax className={"presentation-cards"} bgImageAlt="index" blur={4} strength={400}
							  bgImage={require("assets/images/bg/6.jpg")}>
						<Grid className={"presentation-cards-container"} container justify={"center"} alignItems={"stretch"} direction={"row"}>
							<MediaCard className={"presentation-card"} title={"Katalam"} image={require("assets/images/bg/17.jpg")}
									   desc={"Katalam was rich in diversity. An abundance of forests spread along the northern parts and sides of the map, an image in stark contrast with the arid and dry wasteland that made up the center. The southern part of the map was buried under a glacier, with its many mountain formations, cavern systems and imposing ice structures making for one of the game's most popular sightseeing spots."} />
							<MediaCard className={"presentation-card"} title={"Pandaemonium"} image={require("assets/images/bg/33.jpg")}
									   desc={"Pandaemonium, the city of darkness, is the capital of the Asmodian faction and is the apex of Asmodian technology, culture and style. Pandaemonium is the center of Asmodian life and as such, all aspects of Asmodian lifestyle can be found there. From the master artisans to the traders and brokers to government officials, all the denizens of Pandaemonium work diligently for the prosperity of Asmodae."} />
							<MediaCard className={"presentation-card"} title={"Abyss"} image={require("assets/images/bg/31.jpg")}
									   desc={"During the Cataclysm, the Tower of Eternity was shattered. When this occurred Atreia was sundered into two halves, leaving a base for the tower on each half of the world. Between the tower’s bases a great disharmonious resonance began to flow. This is where Reshanta lies."} />
						</Grid>
					</Parallax>
					<Element name={"war-section"} />
					<Paper className={"presentation-paper"} title={"The Millennium War"} desc={theMilleniumWarLore}
						image={require("assets/images/bg/41.jpg")}
						previewStyle={{left: "-30%"}} paperStyle={{right: "-8%"}} />
				</Grid>
			</>
		);
	}
}

export default Presentation;