import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './../App';
import Data from './../Components/data';
import Counter from './../Components/VisistCounter';

const Router = () => {
	return (
		<div className="contenedor">
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Data} />
					<Route path="/" component={Counter} />
					<Route path="/" component={App} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}
 
export default Router;