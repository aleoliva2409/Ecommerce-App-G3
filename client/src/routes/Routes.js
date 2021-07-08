import { Switch, Route } from 'react-router-dom'
import CataloguePage from '../views/CataloguePage'
import ProductPage from '../views/ProductPage'
import CategoriesOptions from '../components/Categories/CategoriesOptions/CategoriesOptions';


const Routes = () => (
	<Switch>
    <Route exact path="/products" component={CataloguePage} />
    <Route path="/products/:id" component={ProductPage} />
    <Route path="/category" component={CategoriesOptions} />
		{/* //TODO: create component */}
		{/* <Route path="*" component={NotFound} /> */}
	</Switch>
)

export default Routes;
