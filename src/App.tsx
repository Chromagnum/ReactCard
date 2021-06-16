import './scss/App.scss';
import icon from "./svg/icon.svg";
import Card from './Card';

function App() {
    return (
        <div className="App">
            {/* <Card v="v1" name="Fire Nation" motto="We do Invasions" logo={icon}/> */}
            <Card v="v2" name="Fire Nation" motto="We do Invasions" logo={icon}/>
        </div>
    );
}

export default App;
