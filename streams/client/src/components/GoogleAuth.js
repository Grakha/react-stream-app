import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from "../actions";


class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1098243600345-24oob1k9laeo6oepbjvh528ffevdn3b4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    renderedAuthButton = () => {
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <div>
                    <button onClick={this.onSignOutClick} type="button" className="btn btn-danger">
                        <i className="fab fa-google mr-2"/>
                        Signed Out
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.onSignInClick} type="button" className="btn btn-danger">
                        <i className="fab fa-google mr-2"/>
                        Signed In
                    </button>
                </div>
            );
        }
    };

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };


    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };


    render() {
        return (
            <div className="d-flex justify-content-end">
                { this.renderedAuthButton() }
            </div>
        )
    }
};

const mapStateToProps = (state) => {
        return { isSignedIn: state.auth.isSignedIn }
};

export default connect(
    mapStateToProps,
    { signIn, signOut}
)(GoogleAuth);