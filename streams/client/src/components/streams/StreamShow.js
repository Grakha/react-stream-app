import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {

    componentDidMount() {
        console.log(this.props);
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {

        if(!this.props.stream) {
            return <div>Loading ...</div>;
        }

        const { title, description } = this.props.stream;

        return (
            <div className="mt-3">
                <h4 className="lead">
                    <strong>Show Stream</strong>
                </h4>
                <div className="video-section">
                    <div className="embed-responsive embed-responsive-16by9 border border-secondary rounded">
                        <iframe title={title} className="embed-responsive-item bg-secondary" src=""></iframe>
                    </div>
                </div>
                <div className="card mt-2">
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                      </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchStream }
)(StreamShow);