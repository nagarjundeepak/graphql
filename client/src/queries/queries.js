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

export {getAllBooksQuery, getAuthorsQuery};