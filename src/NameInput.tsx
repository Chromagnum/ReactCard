import { Field } from "formik";

function NameInput(props: {}) {
    return (
        <fieldset className="card-name-input">
            <div className="name-inputs">
                <Field type="text" name="firstname"/>
                <Field type="text" name="lastname"/>
            </div>

            <Field type="text" name="jobtitle"/>
        </fieldset>
    );
}

export default NameInput;