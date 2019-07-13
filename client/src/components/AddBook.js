import React,{useState} from 'react';
import {graphql} from 'react-apollo';

import {getAuthorsQuery} from '../queries/queries';


function AddBook(props){

    // getting data from server
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

    // updating local state to server
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name, genre, authorId);
    }

    return(
        <div>
            <form id="add-book" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Book Name:</label>
                    <input type='text' onChange={(e)=>{setName(e.target.value)}}></input>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type='text' onChange={(e)=>{setGenre(e.target.value)}}></input>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e)=>{setAuthorId(e.target.value)}}>
                        {dd()}
                    </select>
                </div>
                <button>+</button>
            </form>
        </div>
    )
}

export default graphql(getAuthorsQuery)(AddBook);
