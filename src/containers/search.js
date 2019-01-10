import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks, filterBooks } from '../actions';
import { bindActionCreators } from 'redux';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      searchBy: 'author',
      searchOrFilter: 'search',
      searchSelected: false,
      placeholder: 'Select search or filter'
    };
  }

  searchBooks = event => {
    event.preventDefault();
    this.props.getBooks(this.state.searchTerm, this.state.searchBy);
  };

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });

    if (this.state.searchOrFilter === 'filter') {
      this.props.filterBooks(event.target.value);
    }
  };

  changeSearchBy = event => {
    this.setState({
      searchBy: event.target.value,
      placeholder: 'Begin your jorney!'
    });
  };

  changeSearchOrFilter = event => {
    this.setState({
      searchOrFilter: event.target.value
    });
    if (event.target.value === 'search') {
      this.setState({
        searchSelected: true,
        placeholder: 'Search by author or title?'
      });
    } else {
      this.setState({
        searchSelected: false,
        placeholder: "Filter to your heart's desire"
      });
    }
  };

  render() {
    return (
      <div className="main-search">
        <form onSubmit={this.searchBooks}>
          <div className="heading-secondary">
            <input
              type="radio"
              id="search"
              value="search"
              name="searchOrFilter"
              onClick={this.changeSearchOrFilter}
            />
            <label className="heading-tertiary" htmlFor="search">
              &nbsp; Search
            </label>
            &nbsp; or &nbsp;
            <input
              type="radio"
              id="filter"
              value="filter"
              name="searchOrFilter"
              onClick={this.changeSearchOrFilter}
            />
            <label className="heading-tertiary" htmlFor="filter">
              &nbsp; Filter
            </label>
          </div>
          <input
            type="text"
            value={this.state.searchTerm}
            placeholder={this.state.placeholder}
            onChange={this.handleChange}
          />

          {this.state.searchSelected && (
            <div className="heading-secondary">
              Search by: &nbsp;
              <input
                type="radio"
                id="author"
                value="author"
                name="searchBy"
                onClick={this.changeSearchBy}
              />
              <label className="heading-tertiary" htmlFor="author">
                &nbsp; Author
              </label>
              &nbsp; Or &nbsp;
              <input
                type="radio"
                id="title"
                value="title"
                name="searchBy"
                onClick={this.changeSearchBy}
              />
              <label className="heading-tertiary" htmlFor="title">
                &nbsp; Title
              </label>
            </div>
          )}
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBooks, filterBooks }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Search);
