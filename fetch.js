// 33-3 JSON Placeholder, GET Data, Display Data On UI
// alert('hi')
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => console.log(res))
// .then(json => console.log(json))

const url = "https://jsonplaceholder.typicode.com/todos/1";
// fetch(url)
//     // .then(res => console.log(res))
//     .then(res => res.json())
//     .then(data => console.log(data))

function loadData() {
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

//33-4 Load More Data, More APIs, Send Data To Function

// function loadUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}

//33-5 Dynamically Display Loaded Data On Your Website
function displayUser(datum) {
    // console.log(datum)
    for (user of datum) {
        console.log(user)
    }
}

start from 33 - 5: 5min