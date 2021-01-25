import React from 'react';
import Modal from "../Modal";
import history from "../../history";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;

        return (
            <React.Fragment>
                <Link to="/" type="button" className="btn btn-secondary">Cancel</Link>
                <button onClick={() => this.props.deleteStream(id)} type="button" className="btn btn-danger">Delete</button>
            </React.Fragment>
        );
    }

    onDismiss() {
        return history.push('/');
    }

    renderContent() {
        if(!this.props.stream) {
            return 'Loading ...';
        }

        return this.props.stream.title;
    }


    render () {

        return (
            <Modal
                header="Stream Delete"
                title="Are you sure you want to delete current stream with title?"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={this.onDismiss}
            />
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchStream, deleteStream }
)(StreamDelete);