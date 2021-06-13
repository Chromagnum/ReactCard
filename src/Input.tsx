import "./scss/InputSet.scss";
import { Field } from "formik";

function InputSet(props: {id: string, icon: any, inputs: {type: string, name: string}[]}) {
    return (
        <fieldset className="card-section" id={props.id}>
            <div className="icon">
                <img src={props.icon} alt={props.icon}/>
            </div>

            <div className="inputs">
                {props.inputs.map((input) => <Field type={input.type} name={input.name}/>)}
            </div>
        </fieldset>
    );
}

export default InputSet;