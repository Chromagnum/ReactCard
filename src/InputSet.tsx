import { Field, ErrorMessage } from "formik";

function InputSet(props: {id: string, icon: any, inputs: {type: string, name: string, placeholder: string}[]}) {
    return (
        <fieldset className="card-section" id={props.id}>
            <div className="icon">
                <img src={props.icon} alt={props.icon}/>
            </div>

            <div className="inputs">
                {props.inputs.map((input, key) => {
                    return <div key={key} className="input">
                        <Field type={input.type} name={input.name} placeholder={input.placeholder}/>
                        <ErrorMessage name={input.name} render={(msg) => <div className="error-message">{msg}</div>}/>
                    </div>
                })}
            </div>
        </fieldset>
    );
}

export default InputSet;