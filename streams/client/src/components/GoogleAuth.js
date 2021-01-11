import React from 'react';


class GoogleAuth extends React.Component {

    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1098243600345-24oob1k9laeo6oepbjvh528ffevdn3b4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    renderedAuthButton = () => {
        if(this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <div>
                    <button onClick={this.onSignOut} type="button" className="btn btn-danger">
                        <i className="fab fa-google mr-2"/>
                        Signed Out
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.onSignIn} type="button" className="btn btn-danger">
                        <i className="fab fa-google mr-2"/>
                        Signed In
                    </button>
                </div>
            );
        }
    };

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };


    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
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

export default GoogleAuth;