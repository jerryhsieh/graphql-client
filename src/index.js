//
//
// File name : index.js
// Author: Jerry Hsieh @ 2018-07-05
// Copyright © 2018, Jerry Hsieh, all rights reserved.
// 
// 



fetch('http://localhost:4000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({ query: "{ users { id username email}}" })
}).then(r => r.json())
  .then(res => addData(res));


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
