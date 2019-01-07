import React, {Component} from 'react';
import styled from 'styled-components';
import TeamScore from './TeamScore.js';

class ScoreSection extends Component {
	render(){
		return(
			<ScoreSectionContainer>
				<TeamScoreWrapper teamName="Team 1"/>
				<TeamScoreWrapper teamName="Team 2" />
			</ScoreSectionContainer>
		);
	}
}

const ScoreSectionContainer = styled.div`
	height: 15%;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const TeamScoreWrapper = styled(TeamScore)`
	width: 15%;
	height: 100%;
	margin-left: 5%;
	margin-right: 5%;

`;

export default ScoreSection;