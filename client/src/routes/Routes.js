import { Switch, Route } from 'react-router-dom'
import CataloguePage from '../views/CataloguePage'
import ProductPage from '../views/ProductPage'
import Categories from '../components/Categories/Categories';


const Routes = () => (
	<Switch>
    <Route exact path="/products" component={CataloguePage} />
    <Route path="/products/:id" component={ProductPage} />
    <Route path="/category" component={Categories} />
		{/* //TODO: create component */}
		{/* <Route path="*" component={NotFound} /> */}
	</Switch>
)

export default Routes;
