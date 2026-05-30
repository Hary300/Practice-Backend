// // Get Data
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// async function getData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();
//   console.log(data);
// }
// getData();

// // Post data

// const data = {
//   title: 'Belajar Fetch',
//   body: 'Ini latihan POST',
//   userID: 1,
// };
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'Post',
//   headers: {
//     'content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// async function getTodo() {
//   const res = await fetch('http://localhost:3000/todos');
//   const data = await res.json();
//   console.log(data);
// }
// getTodo();

// async function run() {
//   await fetch('http://localhost:3000/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name: 'Harry',
//       email: 'Harry@email.com',
//     }),
//   });

//   await fetch('http://localhost:3000/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name: 'Dave',
//       email: 'Dave@email.com',
//     }),
//   });

//   const res = await fetch('http://localhost:3000/register');
//   const data = await res.json();
//   console.log(data);

//   const res2 = await fetch('http://localhost:3000/register/count');
//   const data2 = await res2.json();
//   console.log(data2);

//   const res3 = await fetch('http://localhost:3000/register', {
//     method: 'Delete',
//   });
//   const data3 = await res3.json();
//   console.log(data3);

//   const res4 = await fetch('http://localhost:3000/register');
//   const data4 = await res4.json();
//   console.log(data4);
// }

// run();

async function postData() {
  try {
    const res = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'test',
        email: 'test@test.com',
        password: '12345678',
      }),
    });

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// postData();

async function getData() {
  try {
    const res = await fetch('http://localhost:3000/movies');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getData();

async function deleteAllData() {
  try {
    const res = await fetch('http://localhost:3000/register', {
      method: 'DELETE',
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// deleteAllData();
