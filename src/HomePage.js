import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>HOME</h1>
                <p>
                   This link redirects to page 1 <Link to="/page1/mail">Mail</Link>
                </p>
                <p>
                    <a href="https://reacttraining.com/react-router/web/guides/quick-start">Click me to find out more about routing</a>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);