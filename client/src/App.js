import './styles/index.css';
import Routes from './routes/Routes';
import Testing from './components/Product/Product.jsx';

const App = () => (
	<div className="container">
    {/* //TODO: create Navbar */}
    {/* <Navbar /> */}
		<Routes />
    <Testing/>
	</div>
)

export default App;
