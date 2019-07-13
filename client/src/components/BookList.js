import React from 'react';
import {graphql} from 'react-apollo';

import {getAllBooksQuery} from '../queries/queries';

function BookList(props){
    const books = props.data.books;
    return(
        <div>
            {books?(<ul id="book-list">
                {
                    books.map(book=>(
                        <li key={book.id}>{book.name}</li>
                    ))
                }
            </ul>):(<div>loading...</div>)}
        </div>
    )
}

export default graphql(getAllBooksQuery)(BookList);