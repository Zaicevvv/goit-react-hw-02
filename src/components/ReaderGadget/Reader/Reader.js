import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
// import Controls from '../Controls/Controls';
import css from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {
    publicationToShowNumber: 1,
  };

  render() {
    const { items } = this.props;
    const { publicationToShowNumber } = this.state;

    return (
      <div className={css.reader}>
        <Publication items={items} number={publicationToShowNumber} />
        <Counter number={publicationToShowNumber} counterMax={items.length} />
      </div>
    );
  }
}
