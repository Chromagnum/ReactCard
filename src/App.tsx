import './scss/App.scss';
import icon from "./svg/icon.svg";
import Card from "./Card";

function App() {
    return (
        <div className="App">
            <Card name="Fire Nation" motto="We do Invasions" logo={icon}/>
        </div>
    );
}

export default App;
