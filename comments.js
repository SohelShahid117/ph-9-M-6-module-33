// 33-9 Async Await And Interview Questions
// alert('hi')
const loadComments = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
        .then(res => res.json())
        .then(res => res.jon())
        // .then(data => console.log(data))
        .catch(err => console.log(err))
    // .catch(err => console.error(err))
}

const loadComments2 = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()
    console.log(data)
}

const loadComments3 = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        // const data = await res.json()
        const data = await res.jon()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}