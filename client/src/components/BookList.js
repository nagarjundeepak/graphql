import React from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getAllBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`

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