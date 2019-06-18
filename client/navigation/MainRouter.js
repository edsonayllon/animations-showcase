import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { Router, Route } from './';
// import { } from '../screens';
// import { screenHolder, withAuth } from '../components';
// mport styles from '../stylesheet';


export default class MainRouter extends Component {
    render() {
        return (
            <Router>
                <View>
                    <Route exact path="/" component={AuthRedirect} />
                </View>
            </Router>
        )
    }
}
