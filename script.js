// Get Data
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then((data) => console.log(data));

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}
getData();

// Post data

const data = {
  title: 'Belajar Fetch',
  body: 'Ini latihan POST',
  userID: 1,
};
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'Post',
  headers: {
    'content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((data) => console.log(data));

async function getTodo() {
  const res = await fetch('http://localhost:3000/todos');
  const data = await res.json();
  console.log(data);
}
getTodo();

fetch('http://localhost:3000/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Harry',
    email: 'Harry@email.com',
  }),
});
