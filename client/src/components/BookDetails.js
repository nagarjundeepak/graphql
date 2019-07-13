import React from 'react';
import { graphql } from 'react-apollo';
import {getSingleBookQuery} from '../queries/queries';

function BookDetails(props){
    console.log(props.bookId);
    const {book} = props.data;
    function displayBook(){
        if(book && typeof book === "object" && book.constructor === Object){
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book && book.author && book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {book &&
                        book.author &&
                        book.author.books.map(book => {
                            return <li key={book.id}>{book.name}</li>;
                        })}
                    </ul>
                </div>
            )
        }
        else{
            return (<p>Select something mate.</p>)
        }
    }
    return(
        <div id="book-details">
            {displayBook()}
        </div>
    )
}

export default graphql(getSingleBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);
