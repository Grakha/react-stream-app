import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from "../../actions";


class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderedList = () => {
        return this.props.streams.map(stream => {
            return (
                <li className="d-flex align-items-center list-group-item mb-2" key={stream.id}>
                    <i className="fas fa-2x fa-video"></i>
                    <div className="ml-3 mr-auto">
                        <h6 className="mb-1">{stream.title}</h6>
                        <p className="mb-0">{stream.description}</p>
                    </div>
                    {this.renderAdmin(stream)}
                </li>
            );
        })
    }

    renderAdmin = (stream) => {
        console.log(stream.userId);
        if(stream.userId === this.props.curUserId) {
            return (
                <div className="d-flex">
                    <button
                        type="button"
                        className="btn btn-primary pl-4 pr-4"
                    >Edit
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger pl-3 pr-3 ml-3"
                    >Delete
                    </button>
                </div>
            );
        }
    };

    render() {
        return (
            <div>
                <h4 className="mt-3 lead">
                    <strong>List of Streams</strong>
                </h4>
                <ul className="list-group p-3">{this.renderedList()}</ul>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        curUserId: state.auth.userId
    };
};

export default connect(
    mapStateToProps,
    { fetchStreams }
)(StreamList);