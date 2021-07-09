import { Switch, Route } from 'react-router-dom'
import CataloguePage from '../views/CataloguePage'
import SearchPage from '../views/SearchPage'
import ProductPage from '../views/ProductPage'
import Categories from '../components/Categories/Categories';
import HomePage from '../views/HomePage';

const Routes = () => (
	<Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/products/search" component={SearchPage} />
    <Route path="/products" component={CataloguePage} />
    <Route path="/products/:id" component={ProductPage} />
    <Route path="/category" component={Categories} />
	</Switch>
)

export default Routes;
