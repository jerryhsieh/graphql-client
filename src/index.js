//
//
// File name : index.js
// Author: Jerry Hsieh @ 2018-07-05
// Copyright © 2018, Jerry Hsieh, all rights reserved.
// 
// 


import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import gql from 'graphql-tag';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

client.query({
  query: gql`{
       users {
         username
         email
       }
    }
  `
})
  .then(res => addData(res))
  .catch(error => console.log(error));

function addData(res) {
  const body = document.querySelector('body');

  let table = document.createElement('table');
  res.data.users.forEach((item, index) => {
    let row = table.insertRow(index);
    row.insertCell(0).innerHTML = item.username;
    row.insertCell(1).innerHTML = item.email;
  });

  body.appendChild(table);
  addCSS();
}

function addCSS() {
  let css = document.createElement('style');
  css.type = 'text/css';

  css.innerHTML =
    `
       body {
          display: flex;
          justify-content: center;
       }
    `;
  document.querySelector('body').appendChild(css);
}
