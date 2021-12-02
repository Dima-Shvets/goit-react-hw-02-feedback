import { Component } from 'react';

export class Section extends Component {
  state = {
    title: this.props.title,
  };

  render() {
    return (
      <section>
        <h2>{this.state.title}</h2>
        {this.props.children}
      </section>
    );
  }
}
