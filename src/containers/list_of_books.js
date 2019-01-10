import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uniqId from 'uniqid';

class ListOfBooks extends Component {
  render() {
    const { filteredList } = this.props.books;

    return (
      <section className="book-section">
        <div className="card-container">
          {filteredList &&
            filteredList.data.docs.map(book => {
              return (
                <div key={uniqId()} className="card">
                  <div className="card__side card__side--front">
                    <img
                      className="card__picture--front"
                      src={`http://covers.openlibrary.org/b/olid/${
                        book.cover_edition_key
                      }-L.jpg`}
                      alt={`Book Cover for ${book.title} by ${
                        book.author_name
                      }`}
                    />
                    <img
                      className="card__picture--backup"
                      src={
                        'https://storage.googleapis.com/webdesignledger.pub.network/LaT/edd/2016/02/vintage-book-cover-textures-6-780x1176.jpg'
                      }
                      alt={`Book Cover for ${book.title} by ${
                        book.author_name
                      }`}
                    />
                    <div className="card__heading">
                      <h1>{book.title}</h1>
                      <h2>By {book.author_name}</h2>
                    </div>
                  </div>
                  <div className="card__side card__side--back">
                    <img
                      className="card__picture--back"
                      src={`http://covers.openlibrary.org/a/olid/${
                        book.author_key
                      }-L.jpg`}
                      alt={`Book Cover for ${book.title} by ${
                        book.author_name
                      }`}
                    />
                    <div className="card__btn">
                      <Link
                        key={uniqId()}
                        to={`/book/${book.cover_edition_key}+${
                          book.author_key[0]
                        }`}
                        className="btn btn--grey"
                      >
                        Book Info
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(
  mapStateToProps,
  null
)(ListOfBooks);
