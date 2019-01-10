import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookDetail, clearDetail } from '../actions';
import { bindActionCreators } from 'redux';

class Book extends Component {
  componentWillMount() {
    this.props.bookDetail(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearDetail();
  }

  render() {
    const { detail } = this.props.books;
    const id = this.props.match.params.id;
    const idx = id.indexOf('+');
    const bookId = id.slice(0, idx);

    if (detail && detail[`${bookId}`]) {
      const authorId = id.slice(idx + 1);

      return (
        <div className="book-detail-container">
          <div className="book-info-box">
            <img
              className="book-detail-img"
              src={`http://covers.openlibrary.org/a/olid/${authorId}-L.jpg`}
              alt={`Author`}
            />
            <div className="book-details">
              <h2>{detail[`${bookId}`]['details']['title']}</h2>
              <h4>{detail[`${bookId}`]['details']['by_statement']}</h4>
              <h4>
                Number of Pages:{' '}
                {detail[`${bookId}`]['details']['number_of_pages']}
              </h4>
              <h4>
                Publish Date: {detail[`${bookId}`]['details']['publish_date']}
              </h4>
            </div>
          </div>
        </div>
      );
    } else return <div>Detail</div>;
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ bookDetail, clearDetail }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
