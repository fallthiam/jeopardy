import React, {Component} from 'react';
import styled from 'styled-components';
import GridColumn from './GridColumn.js';
import {LanguageConsumer} from './LanguageContext.js';
import questions from './text/questions.json';

class GridContainer extends Component {
	renderColumn = (questions, language) => {
		return questions[language].map((section) => (
			<GridColumn
				column={section}
			/>
		));
	}

	render() {
		return (
			<FlexGrid>
				<LanguageConsumer>
					{(context) =>
						{return this.renderColumn(questions, context.language)}
					}
				</LanguageConsumer>
			</FlexGrid>
		);
	}
}

const FlexGrid = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 85%;
`;

export default GridContainer;