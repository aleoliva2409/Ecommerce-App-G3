import { Switch, Route } from 'react-router-dom'
import ProductPage from '../views/ProductPage'
import AddCategory from '../components/AddCategorie/AddCategorie';

const Routes = () => (
	<Switch>
    <Route exact path="/products" component={ProductPage} />
    <Route path="/products/:id" component={ProductPage} />
	<Route path='/categories/add' component={AddCategory} />
		{/* //TODO: create component */}
		{/* <Route path="*" component={NotFound} /> */}
	</Switch>
)

export default Routes;
