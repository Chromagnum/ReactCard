import "./scss/Card.scss";
import icon from "./svg/icon.svg";
import InputSet from "./Input";

import { Formik, Form } from "formik";

function Card() {
    return (
        <div className="business-card">
            <div className="logo">
                <img src={icon} alt="Logo"/>

                <div className="business-name">
                    <span>Fire</span>
                    <span>&nbsp;</span>
                    <span>Nation</span>
                </div>

                <span className="business">We do Invasions</span>
            </div>

            <Formik initialValues={{ }} onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
            }}>
                <Form>
                    <InputSet id="personal" icon="" inputs={[
                        { "type": "text", "name": "name" },
                        { "type": "text", "name": "jobtitle" }
                    ]}/>

                    <InputSet id="cellular" icon="" inputs={[
                        { "type": "text", "name": "phonenumber"},
                        { "type": "text", "name": "altphonenumber"}
                    ]}/>

                    <InputSet id="emails" icon="" inputs={[
                        { "type": "email", "name": "personalemail"},
                        { "type": "email", "name": "businessemail"}
                    ]}/>

                    <InputSet id="address" icon="" inputs={[
                        { "type": "text", "name": "address"},
                        { "type": "text", "name": "mailing"}
                    ]}/>
                </Form>
            </Formik>
        </div>
    );
}

export default Card;