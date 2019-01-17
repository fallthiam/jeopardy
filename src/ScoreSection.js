import React, {Component} from 'react';
import styled from 'styled-components';
import TeamScore from './TeamScore.js';

class ScoreSection extends Component {
	render(){
		return(
			<ScoreSectionContainer>
				<TeamScoreWrapper teamName="Number 1 team"/>
				<TeamScoreWrapper teamName="Team Grass" />
				<TeamScoreWrapper teamName="Bits" />
			</ScoreSectionContainer>
		);
	}
}

const ScoreSectionContainer = styled.div`
	height: 15%;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

const TeamScoreWrapper = styled(TeamScore)`
	width: 15%;
	height: 100%;
	margin-left: 100px;
	margin-right: 5%;
`;

export default ScoreSection;