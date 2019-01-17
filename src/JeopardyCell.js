import React, {Component} from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import CellModal from './CellModal.js';
import closeButton from './img/close.png';
ReactModal.setAppElement("#root");

class JeopardyCell extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		modalIsOpen: false,
      		hasBeenOpened: false
    	};
  	}

  	openModal = () => {
    	this.setState({
    		modalIsOpen: true,
      		hasBeenOpened: true
    	});
  	}

  	closeModal = () => {
    	this.setState({modalIsOpen: false});
  	}

  	renderCell = (points) => {
  		if (!this.state.hasBeenOpened) {
  			return(
				<CellScore>{points}</CellScore>
			);
  		}
  	}

	render(){
		return(
			<Cell>
				<CellInfos onClick={this.openModal} className="score">
					{this.renderCell(this.props.datas.points)}
				</CellInfos>
				<Modal isOpen={this.state.modalIsOpen} style={modalContainserSize}>
			        <CloseModalButton onClick={this.closeModal} src={closeButton} />
			        <ModalContent 
			        	points={this.props.datas.points} 
			        	question={this.props.datas.question}
			        	answer={this.props.datas.answer}
			        />
			    </Modal>
			</Cell>
		);
	}
}

const Cell = styled.div`
	height: 17%;
	box-sizing: border-box;
	border: 3px grey solid;
	&:hover {
		cursor: pointer;
		border: 3px yellow solid;
	}
`;

const CellInfos = styled.div`
	margin: 0;
	text-align: center;
	height: 100%;
	position: relative;
`;

const CellScore = styled.div`
	position: absolute;
  	left: 50%;
  	top: 50%;
  	transform: translate(-50%, -50%);
  	font-size: 200%;
  	font-weight: bold;
`;

const CloseModalButton = styled.img`
	position: absolute;
	top: 0%;
    right: 0%;
    width: 5%;
	&:hover{
		cursor: pointer;
	}
`;

const Modal = styled(ReactModal)`
	position: absolute;
	background-color: white;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50%;
	height; 50%;
`;

const ModalContent =styled(CellModal)`
	width: 100%;
	height: 100%;
	border-sizing: border-box;
`;

const modalContainserSize = {
  content : {
    width: '60%',
    height: '60%'
  },
};

export default JeopardyCell;