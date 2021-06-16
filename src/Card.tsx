import "./scss/Card-v1.scss";
import "./scss/Card-v2.scss";
import InputSet from "./Input";
import NameInput from "./NameInput";

import neticon from "./svg/internet-icon.svg";
import phoneicon from "./svg/phone-icon.svg";
import homeicon from "./svg/home-icon.svg";

import { Formik, Form } from "formik";

function Card(props: { name: string, motto: string, logo: string, v: string}) {
    return (
        <div className={"business-card-" + props.v}>
            <div className="logo">
                <img src={props.logo} alt="Logo"/>

                <div className="business-name">
                    <span>{props.name.split(" ")[0]}</span>
                    <span>&nbsp;</span>
                    <span>{props.name.split(" ")[1]}</span>
                </div>

                <span className="business">{props.motto}</span>
            </div>

            <Formik initialValues={{
                "firstname": "Alvaro",
                "lastname": "Hulse",
                "jobtitle": "Fullstack Developer",
                "phonenumber": "+501 000-0000",
                "altphonenumber": "+501 000-0001",
                "personalemail": "alvaro.hulsehabet@gmail.com",
                "businessemail": "alvaro.businessname@gmail.com",
                "address": "4 Elements Street",
                "mailing": "Some P.O. Box"
            }} onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
            }}>
                <Form>
                    <NameInput/>

                    <InputSet id="cellular" icon={phoneicon} inputs={[
                        { "type": "text", "name": "phonenumber"},
                        { "type": "text", "name": "altphonenumber"}
                    ]}/>

                    <InputSet id="emails" icon={neticon} inputs={[
                        { "type": "email", "name": "personalemail"},
                        { "type": "email", "name": "businessemail"}
                    ]}/>

                    <InputSet id="address" icon={homeicon} inputs={[
                        { "type": "text", "name": "address"},
                        { "type": "text", "name": "mailing"}
                    ]}/>
                </Form>
            </Formik>
        </div>
    );
}

export default Card;