import React, { Component } from 'react';

import { Header } from '../components';

export default class HomePage extends Component {
    render() {
        return (
          <div>
            <Header />
            <div className="container-fluid border">
              test
            </div>
          </div>
        );
    };
}