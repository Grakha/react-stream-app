import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {


    onSubmit = (valueForm) => {
        this.props.createStream(valueForm);
    };

    render () {
        return (
            <div>
                <div className="mt-3">
                    <h4 className="lead">
                        <strong>Create Stream</strong>
                    </h4>
                </div>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
};

export default connect(
    null,
    { createStream }

)(StreamCreate);