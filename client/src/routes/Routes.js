import { Switch, Route } from "react-router-dom";
import CataloguePage from "../views/CataloguePage";
import ProductPage from "../views/ProductPage";
import CategoriesOptions from "../components/Categories/CategoriesOptions/CategoriesOptions";
import HomePage from "../views/HomePage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/products" component={CataloguePage} />
    <Route path="/products/:id" component={ProductPage} />
    <Route path="/category" component={CategoriesOptions} />
  </Switch>
);

export default Routes;
