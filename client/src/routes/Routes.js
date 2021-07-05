import { Switch, Route } from 'react-router-dom'
import PruebaPage from '../views/PruebaPage';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={PruebaPage}/>

		{/* //TODO: create component */}
		{/* <Route path="*" component={NotFound} /> */}
	</Switch>
)

export default Routes;
