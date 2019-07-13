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
    console.log(props)
    return(
        <div>
            <ul id="book-list">
                <li>
                    Book Name
                </li>
            </ul>
        </div>
    )
}

export default graphql(getAllBooksQuery)(BookList);