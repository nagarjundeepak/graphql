import React,{useState} from 'react';
import {graphql} from 'react-apollo';

// queries
import {getAllBooksQuery} from '../queries/queries';
// components
import BookDetails from './BookDetails';

function BookList(props){
    const books = props.data.books;

    // get single book detail
    const [bookId, setbookId] = useState('');
    
    return(
        <>
        <div>
            {books?(<ul id="book-list">
                {
                    books.map(book=>(
                        <li key={book.id} onClick={()=>{setbookId(book.id)}}>{book.name}</li>
                    ))
                }
            </ul>):(<div>loading...</div>)}
        </div>
        <BookDetails bookId={bookId}/>
        </>
    )
}

export default graphql(getAllBooksQuery)(BookList);