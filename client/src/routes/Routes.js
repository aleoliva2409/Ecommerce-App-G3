import { Switch, Route } from 'react-router-dom'
import CataloguePage from '../views/CataloguePage'
import ProductPage from '../views/ProductPage'
import AddCategory from '../components/AddCategory/AddCategory';

const Routes = () => (
	<Switch>
    <Route exact path="/products" component={CataloguePage} />
    <Route path="/products/:id" component={ProductPage} />
    <Route path="/category" component={AddCategory} />
		{/* //TODO: create component */}
		{/* <Route path="*" component={NotFound} /> */}
	</Switch>
)

export default Routes;
