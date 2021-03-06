import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTicker } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    //bind context of this
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //Change search bar state when user inputs new input
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    //Get the ticker data
    this.props.fetchTicker(this.state.term);

    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} onChange={this.onInputChange} className="input-group">
        <input placeholder="Add a ticker"
          className="form-control"
          value={this.state.term}
           />
        <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTicker }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
