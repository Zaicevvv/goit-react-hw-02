import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import publications from './ReaderGadget/publications';
import Reader from './ReaderGadget/Reader/Reader';

export default class App extends Component {
  state = {};

  render() {
    return <Reader items={publications} />;
  }
}
