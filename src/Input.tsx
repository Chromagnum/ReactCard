import { Field } from "formik";

function InputSet(props: {id: string, icon: any, inputs: {type: string, name: string}[]}) {
    return (
        <fieldset className="card-section" id={props.id}>
            <div className="icon">
                <img src={props.icon} alt={props.icon}/>
            </div>

            <div className="inputs">
                <Field type={props.inputs[0].type} name={props.inputs[0].name}/>
                <Field type={props.inputs[1].type} name={props.inputs[1].name}/>
                {/* {props.inputs.map((input) => <Field type={input.type} name={input.name}/>)} */}
            </div>
        </fieldset>
    );
}

export default InputSet;