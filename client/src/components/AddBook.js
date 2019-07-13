import React from 'react';
import {graphql} from 'react-apollo';

import {getAuthorsQuery} from '../queries/queries';


function AddBook(props){
    const authors = props.data.authors;
    function dd(){
        if(props.data.loading){
            return <div>Loading...</div>
        }
        else{
            return authors.map(author=>{
                return (<option key={author.id}>{author.name}</option>)
            })
        }
    }
    return(
        <div>
            <form id="add-book">
                <div className="field">
                    <label>Book Name:</label>
                    <input type='text'></input>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type='text'></input>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select>
                        <option>Select Author</option>
                        { dd() }
                    </select>
                </div>
                <button>+</button>
            </form>
        </div>
    )
}

export default graphql(getAuthorsQuery)(AddBook);
