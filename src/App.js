import React, { Component } from 'react';
import GridContainer from './GridContainer.js';
import ScoreSection from './ScoreSection.js';
import styled from 'styled-components';
import {LanguageProvider} from './LanguageContext.js';

class App extends Component {
	constructor(props){
    	super(props);
    	this.state = {
      		language : 'en'
    	}
  	}

  	toggleLanguage = () => {
    	console.dir("current language : ");
    	this.setState(prevState => ({
      		language: prevState.language === 'en' ? 'fr' : 'en'
    	}))
  	}

  	render() {
    	return (
      		<AppContainer className="App">
	      		<LanguageProvider value={
		          	{
		            	language: this.state.language, 
		            	toggleLanguage: this.toggleLanguage
		          	}
		        }>
      				<ScoreSection />
        			<GridContainer />
        		</LanguageProvider>
      		</AppContainer>
    	);
  	}
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
