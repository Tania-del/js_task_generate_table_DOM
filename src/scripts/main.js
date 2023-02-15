'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const { name: fullName, sex, born, died } = person;
  const age = died - born;
  const century = Math.ceil(died / 100);

  table.lastChild.insertAdjacentHTML('beforeend', `<tr>
<td>${fullName}</td>
<td>${sex}</td>
<td>${born}</td>
<td>${died}</td>
<td>${age}</td>
<td>${century}</td>
</tr>`);
});
