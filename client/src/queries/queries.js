import {gql} from 'apollo-boost';

const getAllBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`

const getAuthorsQuery = gql`
{
    authors{
        name
        id
    }
}`

const addBookMutation = gql`
    mutation($name:String!,$genre:String!,$authorId:ID!){
        addBook(name:$name,genre:$genre, authorId:$authorId){
            name
            id
        }
    }
`

const getSingleBookQuery = gql`
    query($id: String){
        book(id:$id){
            name
            genre
            author{
                name
                age
                books{
                    name
                }
            }
        }
    }
`

export {getAllBooksQuery, getAuthorsQuery, addBookMutation, getSingleBookQuery};