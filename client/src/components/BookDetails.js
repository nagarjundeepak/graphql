import React from 'react';
import { graphql } from 'react-apollo';
import {getSingleBookQuery} from '../queries/queries';

function BookDetails(){
    return(
        <div id="book-details">
            <p>Output...</p>
        </div>
    )
}

export default graphql(getSingleBookQuery)(BookDetails);
