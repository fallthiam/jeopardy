import React, {Component} from 'react';
import styled from 'styled-components';
import plus from './img/plus.png';
import minus from './img/minus.png';

class TeamScore extends Component {
	constructor(props){
		super(props);
		this.state = {
			score : 0
		}
	}

	incrementScore = () => {
		this.setState({
			score : this.state.score + 100
		});
	}

	decrementScore = () => {
		this.setState({
			score : this.state.score - 100
		});
	}

	resetScore = () => {
		this.setState({
			score : 0
		});
	}

	render() {
		return(
			<div>
				<TeamName>{this.props.teamName}</TeamName>
				<Score>{this.state.score}</Score>
				<ButtonContainer>
				<IncrementButton onClick={this.incrementScore} src={plus}/>
				<DecrementButton onClick={this.decrementScore} src={minus}/>
				</ButtonContainer>
			</div>
		);
	}
}

export default TeamScore;

const TeamName = styled.div`
	text-align: center;
	width: 100%;
	height: 30%;
`;

const Score = styled.div`
	text-align: center;
	width: 100%;
	height: 30%;
`;

const ButtonContainer = styled.div`
	width: 100%;
	height: 30%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const IncrementButton = styled.img`
	height: 100%;
	margin: auto;
	&:hover{
		cursor: pointer;
	}
`;

const DecrementButton = styled.img`
	height: 100%;
	margin: auto;
	&:hover{
		cursor: pointer;
	}
`;