import "./scss/Card.scss";
import icon from "./svg/icon.svg";
import rhombus from "./svg/rhombus-red.svg";
import InputSet from "./Input";

import { Formik, Form, Field } from "formik";

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
                    <InputSet id="personal" icon={rhombus} inputs={[
                        { "type": "text", "name": "name" },
                        { "type": "text", "name": "occupation" }
                    ]}/>

                    <fieldset className="card-section" id="cellular">
                        <Field type="text" name="phonenumber"/>
                        <Field type="text" name="altphonenumber"/>
                    </fieldset>

                    <fieldset className="card-section" id="emails">
                        <Field type="email" name="personalemail"/>
                        <Field type="email" name="businessemail"/>
                    </fieldset>

                    <fieldset className="card-section" id="address">
                        <Field type="text" name="address"/>
                        <Field type="text" name="mailing"/>
                    </fieldset>
                </Form>
            </Formik>
        </div>
    );
}

export default Card;