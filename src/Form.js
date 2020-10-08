import React from 'react';
import './Form.css';
import Input from './Input'

function InputChanged(event, form ,inputIdentifier, setState){
    const updatedForm = {...form};
    const updatedElement = {...updatedForm[inputIdentifier]};
    updatedElement.value = event.target.value;
    updatedForm[inputIdentifier] = updatedElement;
    setState(updatedForm);

}

function Form(props) {
    let formElementsArray = [];
    for(let key in props.form){
        formElementsArray.push({
            id: key,
            config: props.form[key]
        })
    }

    const inputs = formElementsArray.map(formElement => {
        return (
            <Input
                key={formElement.id}
                placeholder={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event) => InputChanged(event, props.form, formElement.id, props.setState)}
            />
        )
    })

    return (
        <div className="Main">
            {inputs}
        </div>
    );
}

export default Form;
