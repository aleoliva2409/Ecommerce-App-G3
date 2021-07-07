import './styles/index.css';
import Routes from './routes/Routes';
import Testing from './components/ProductCard/ProductCard.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

const App = () => (
	<div className="container">
    {/* //TODO: create Navbar */}
    <Navbar />
		<Routes />
    <Testing/>

	</div>
)

export default App;
