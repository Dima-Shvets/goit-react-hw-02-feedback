import { PropTypes } from 'prop-types';
import { Component } from 'react';
import s from './Sectiom.module.scss';

export class Section extends Component {
  state = {
    title: this.props.title,
  };

  render() {
    return (
      <section className={s.section}>
        <h2 className={s.title}>{this.state.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

Section.protoTypes = {
  title: PropTypes.sting,
};
