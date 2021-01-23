import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (valueForm) => {
        this.props.editStream(this.props.match.params.id, valueForm);
    };

    render() {
        if(!this.props.stream) {
            return <div>Loading ...</div>;
        }

        return (
            <div>
                <div className="mt-3">
                    <h4 className="lead">
                        <strong>Stream Edit</strong>
                    </h4>
                </div>
                <StreamForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchStream, editStream }
)(StreamEdit);