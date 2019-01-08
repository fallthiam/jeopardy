import React, {Component} from 'react';
import styled from 'styled-components';

class CellModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			answerOpened: false
		}
	}

	toogleAnswer = (e) => {
		console.log(e.keyCode);
		if(e.keyCode == "32"){
			this.setState({
			   	answerOpened : true
			});
		}
	}

	componentDidMount() {
		window.addEventListener('keypress', this.toogleAnswer);
	}

	render(){
		return(
			<ContentWrapper>
				<PointsSection>
					<Points>
						For {this.props.points}
					</Points>
				</PointsSection>
				<Question onClick={this.toogleAnswer} answerOpened={this.state.answerOpened}>
					{this.props.question}
				</Question>
				<Answer answerOpened={this.state.answerOpened}>
					{this.props.answer}
				</Answer>
			</ContentWrapper>
		);
	}
}


const ContentWrapper = styled.div`
	height: 100%;
	width: 80%;
	position: relative;
	background-color: white;
	margin: auto;
`;

const PointsSection = styled.div`
	height: 10%;
	width: 100%;
	font-size: 100%;
	border-bottom: solid 1px black;
	margin-bottom: 5%;
	display: flex;
  	justify-content: center;
  	flex-direction: column;
  	text-align: center;
`;

const Points = styled.div`
	margin: auto;
	width: 30%;
	text-align: center;
	font-weight: bold;
	color: rgb(0, 51, 0);
`;

const Question = styled.div`
	width: 100%;
	text-align: center;
	font-size: 200%;
	transition: all 1s linear;
	-webkit-transition: all 1s linear;
	${({ answerOpened }) => answerOpened && `
		visibility: visible;
		font-size: 150%;
  	`}
`;

const Answer = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
	text-align: center;
	visibility: hidden;
	transition: all 1s linear;
	-webkit-transition: all 1s linear;
	background-color: white;
	font-size: 100%;
	color: rgb(0, 51, 0);
	${({ answerOpened }) => answerOpened && `
		visibility: visible;
		transform: translateY(-100%);
		height: 25%;
		font-size: 200%;
  	`}
`;

export default CellModal;

