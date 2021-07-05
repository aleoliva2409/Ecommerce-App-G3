import { Switch, Route } from 'react-router-dom'
import ProductPage from '../views/ProductPage'

const Routes = () => (
	<Switch>
    <Route exact path="/products" component={ProductPage} />
    <Route path="/products/:id" component={ProductPage} />
		{/* //TODO: create component */}
		{/* <Route path="*" component={NotFound} /> */}
	</Switch>
)

export default Routes;
