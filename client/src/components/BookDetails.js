import React from 'react';
import { graphql } from 'react-apollo';
import {getSingleBookQuery} from '../queries/queries';

function BookDetails(props){
    console.log(props.bookId);
    const {book} = props.data;
    return(
        <div id="book-details">
            {
                book ? (<div>{book.name}</div>) : (<p>Select something mate...</p>)
            }
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
