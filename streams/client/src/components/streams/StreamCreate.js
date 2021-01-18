import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {


    renderError = ({ touched, error }) => {
        const spanInfo = {
            fontSize: 14
        };

        if(touched && error) {
            return (
                <div className="alert alert-danger mt-1" role="alert">
                    <span style={spanInfo}>{ error }</span>
                </div>
            );
        }
    };

    inputRender = ({input, label, htmlFor, inputId, meta}) => {
        return (
            <div className="form-group">
                <label htmlFor={htmlFor} className={`mb-1 ${meta.touched && meta.error ? 'text-danger' : ''}`}>{label}</label>
                <input {...input} className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`} id={inputId}/>
                {this.renderError(meta)}
            </div>
        );
    };


    onSubmit = (valueForm) => {
        console.log(valueForm);
    };

    render () {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    name="title"
                    component={this.inputRender}
                    label="Enter Title"
                    htmlFor="createTitle"
                    inputId="createTitle"
                />
                <Field
                    name="description"
                    component={this.inputRender}
                    label="Enter Description"
                    htmlFor="createDescription"
                    inputId="createDescription"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
};

const validate = (values) => {
    const errors = {};
    console.log(values.name);
    if(!values.title) {
        errors.title = 'Please Enter a Title';
    }

    if(!values.description) {
        errors.description = 'Please Enter a Description';
    }

    return errors;
};

export default reduxForm({
    form: 'createStream',
    validate: validate
})(StreamCreate);