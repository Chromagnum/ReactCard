import './scss/App.scss';
import icon from "./svg/icon.svg";
import Card from './Card';

function App() {
    return (
        <div className="App">
            <Card logo={icon} initialValues={{
            "businessname": "Fire Nation",
            "business": "We do Invasions",
            "firstname": "Alvaro",
            "lastname": "Hulse",
            "jobtitle": "Fullstack Developer",
            "phonenumber": "+501 000-0000",
            "altphonenumber": "+501 000-0001",
            "personalemail": "alvaro.hulsehabet@gmail.com",
            "businessemail": "alvaro.businessname@gmail.com",
            "address": "4 Elements Street",
            "mailing": "Some P.O. Box",
            "github": "https://github.com/Chromagnum"
            }}/>
        </div>
    );
}

export default App;
