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
`;

const getSingleBookQuery = gql`
query GetBook($id: ID){
    book(id: $id) {
        id
        name
        genre
        author {
            id
            name
            age
            books {
                name
                id
            }
        }
    }
}
`;

export {getAllBooksQuery, getAuthorsQuery, addBookMutation, getSingleBookQuery};