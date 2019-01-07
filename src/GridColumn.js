import React, {Component} from 'react';
import styled from 'styled-components';
import JeopardyCell from './JeopardyCell.js';

class GridColumn extends Component {
	constructor(props){
		super(props);
	}

	renderCell = (cells) => {
		return cells.map((cell) => (
			<JeopardyCell
				datas={cell}
			/>
		));
	}

	render() {
		return (
			<Column>
				<ColumnTitle>
					{this.props.column.title}
				</ColumnTitle>
				{this.renderCell(this.props.column.data)}
			</Column>
		);
	}
}

const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 20%;
	height: 100%;
	min-height: 80px;
`;

const ColumnTitle = styled.h1`
	width: 100;
	text-align: center;
	height: 15%;
`;

export default GridColumn;