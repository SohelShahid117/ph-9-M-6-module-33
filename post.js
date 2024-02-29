// 33-6 Load Posts And Display On The Website With CSS
// alert('hi');

function loadPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displayPost(data))
}
function displayPost(posts) {
    console.log(posts)
    const postContainer = document.getElementById('post-container');
    for (pst of posts) {
        console.log(pst)
        const div = document.createElement('div');
        div.classList.add('post-div');
        div.innerHTML = `
            <h2>Id: ${pst.id}</h2>
            <h3>userId: ${pst.userId}</h3>
            <h4>Title: ${pst.title}</h4>
            <p>Body/Post Description: ${pst.body}</p>
        `
        // div.innerText = pst.userId;
        postContainer.appendChild(div);
    }
}



//33-7 GET, POST, PATCH, DELETE, CRUD, GET Vs POST
// CRUD(create,read,update,delete)
//Rest API method(GET===read,POST===create,PUT/PATCH===update,DELETE===delete)
//PUT VS POST VS PATCH
/*
PUT = create a new resourse or replace if the resourse existing
POST = create a new resourse
PATCH = Partially update an existing resourse
*/
/*
HTTP Status code
1.200
2.301
3.302
4.404
5.500
6.503
*/

//33-8 Debug API, Network Tab,Status Code, Headers, Bad API

function deleteApost() {
    console.log('hi');
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    fetch(url, {
        method: 'DELETE'
    })
}

function patchApost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function createApost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

//http status code :https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


