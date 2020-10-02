import React, {PureComponent} from "react";
import {Container, Fab, Grid, Typography} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faYoutube, faGithub, faReddit, faFacebook, faTwitch } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

export class Footer extends PureComponent
{
	public render(): JSX.Element
	{
		return (
			<footer className={"footer"}>
				<Grid container direction={"row"} alignItems={"flex-start"}>
					<Fab color="primary" style={{ margin: 5 }}>
						<FontAwesomeIcon color='#7289da' icon={faDiscord} size='2x' />
					</Fab>
					<Fab color="primary" style={{ margin: 5 }}>
						<FontAwesomeIcon color='#7289da' icon={faYoutube} size='2x' />
					</Fab>
					<Fab color="primary" style={{ margin: 5 }}>
						<FontAwesomeIcon color='#7289da' icon={faGithub} size='2x' />
					</Fab>
					<Fab color="primary" style={{ margin: 5 }}>
						<FontAwesomeIcon color='#7289da' icon={faReddit} size='2x' />
					</Fab>
					<Fab color="primary" style={{ margin: 5 }}>
						<FontAwesomeIcon color='#7289da' icon={faFacebook} size='2x' />
					</Fab>
					<Fab color="primary" style={{ margin: 5 }}>
						<FontAwesomeIcon color='#7289da' icon={faTwitch} size='2x' />
					</Fab>
				</Grid>
				<hr/>
				<Container maxWidth={"md"}>
					<Grid container direction={"row"} justify={"space-evenly"} alignItems={"center"}>
						<Grid item xs={6}>
							<img src={require("assets/images/logo/ncsoft-logo.svg")} alt="NCSoft Logo"/>
							<img src={require("assets/images/logo/ncsoft-logo.svg")} alt="NCSoft Logo"/>
						</Grid>
						<Grid className={"footer-copyrights"} item xs={6}>
							<Typography paragraph component={"p"}>
								상호 (주)엔씨소프트 대표 김택진 사업자 등록번호 144-85-04244 통신판매업신고 제2013-경기성남-1268호 사업자정보확인
								주소 경기도 성남시 분당구 대왕판교로 644번길 12 PC 게임 고객상담 1600-0020 팩스 02-2186-3550 이메일 credit@ncsoft.com
								AION ® is a registered trademark of NCSOFT Corporation. Copyright © NCSOFT Corporation. All Rights Reserved.
							</Typography>
							<Typography className={"footer-iswenzz"} variant={"h6"} component={"h6"}>
								Iswenzz © 2020
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</footer>
		);
	}
}

export default Footer;