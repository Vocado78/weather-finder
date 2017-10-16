import React from 'react';


export default class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      term: "",
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({term: event.target.value});
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmitSearch(this.state.term);
    this.setState({term: ""});
  }
  render() {
    return (
        <form onSubmit={this.onFormSubmit}>
          <input
          placeholder="Stockholm"
          value={this.state.term}
          onChange={this.onInputChange} />
          <button type="submit">
          Get weather</button>
        </form>
    );
  }
}
