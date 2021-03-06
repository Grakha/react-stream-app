import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends React.Component {

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
        this.props.onSubmit(valueForm);
    };

    render () {
        return (
            <div>
                <form
                    className="p-3"
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
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
                    <div className="d-flex justify-content-end">
                        <button
                            type="submit"
                            className="btn btn-primary pl-4 pr-4"
                        >Submit Form</button>
                    </div>
                </form>
            </div>
        );
    }
};

const validate = (values) => {
    const errors = {};

    if(!values.title) {
        errors.title = 'Please Enter a Title';
    }

    if(!values.description) {
        errors.description = 'Please Enter a Description';
    }

    return errors;
};


export default reduxForm({
    form: 'formStream',
    validate: validate
})(StreamForm);