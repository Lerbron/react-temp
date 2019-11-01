import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom';
import { Route } from 'react-router';
import CoreLayout from 'components/coreLayout'
import routes from './routes'

export default () => (
	<BrowserRouter>
		<div className='route-container'>
			<Switch>
				<Route path="/" render={(props) => {
					return (
						<CoreLayout>
              {routes.map(route => {
                return <Route exact key={route.path} path={route.path} component={route.component} />
              })}
						</CoreLayout>
					)
				}} />
				
			</Switch>
		</div>
	</BrowserRouter>
)