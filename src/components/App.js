import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import WidgetContainer from './WidgetContainer';
import data from '../data';
import NotFound from './NotFound';

class App extends React.Component {
	constructor(props) {
		super(props);
		const weeklyCount = data.reduce((acc, curr, index) => {
			return acc + curr.eggs;
		}, 0);
		this.state = {
			hens: data,
			weeklyCount
		};
	}

  //iterates through the hens array and returns the addition of all eggs
  updatedEggs = arr => {
    return arr.reduce((acc, curr, index) => {
      return acc + parseInt(curr.eggs, 0);
    }, 0);
  }

	updateCount = (index, eggCount) => {
		const hensCopy = [...this.state.hens];
    //if the user clicks the first egg twice, it goes to zero eggs
		if (this.state.hens[index].eggs === '1' && parseInt(eggCount, 0) === 1) {
			hensCopy[index].eggs = 0;
		} else {
			hensCopy[index].eggs = eggCount;
		}
		const updatedEggs = this.updatedEggs(hensCopy);
		this.setState(prevState => ({
      ...prevState,
      hens: hensCopy,
      weeklyCount: updatedEggs
    }));
	}

	addNewHen = (newHen) => {
		const hensCopy = [...this.state.hens];
		hensCopy.unshift(newHen);
		const updatedEggs = this.updatedEggs(hensCopy);
    this.setState(prevState => ({
      ...prevState,
      hens: hensCopy,
      weeklyCount: updatedEggs
    }));
	}

  deleteBird = (index) => {
    const hensCopy = [...this.state.hens];
    hensCopy.splice(index, 1);
    const updatedEggs = this.updatedEggs(hensCopy);
    this.setState(prevState => ({
      ...prevState,
      hens: hensCopy,
      weeklyCount: updatedEggs
    }));
  };

	render() {
		return (<BrowserRouter>
			<Switch>
				<Route exact path="/" render={() => <WidgetContainer updateCount={this.updateCount} deleteBird={this.deleteBird} {...this.state} isAuthed={true}/>}/>
				<Route path="/edit" render={() => <Home addNewHen={this.addNewHen} {...this.state} isAuthed={true}/>}/>
				<Route component={NotFound}/>
			</Switch>
		</BrowserRouter>)
	}
}

export default App;
