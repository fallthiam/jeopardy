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
						{this.props.points}
					</Points>
				</PointsSection>
				<Question onClick={this.toogleAnswer}>
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
	width: 100%;
	position: relative;
	background-color: white;
`;

const PointsSection = styled.div`
	height: 15%;
	width: 100%;
	font-size: 100%;
`;

const Question = styled.div`
	height: 20%;
	width: 100%;
	text-align: center;
	font-size: 200%;
`;

const Answer = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
	text-align: center;
	visibility: hidden;
	transition: all 1.5s linear;
	-webkit-transition: all 1.5s linear;
	background-color: white;
	font-size: 100%;
	${({ answerOpened }) => answerOpened && `
		visibility: visible;
		transform: translateY(-100%);
		height: 25%;
		font-size: 200%;
  	`}
`;

const Points = styled.div`
	margin: auto;
	margin-top: 50px;;
	width: 30%;
	text-align: center;
`;

export default CellModal;

