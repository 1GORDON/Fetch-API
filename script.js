const getText = document.getElementById('getText');
const getJson = document.getElementById('getJson');
const getPosts = document.getElementById('getPosts');

const addText = () => {
    // Fetch method takes two parameters the request url and returns a promise
    fetch('sample.txt')
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        // Append Text to the DOM or webpage
        let output = document.getElementById('output');
        output.innerHTML = `<h2>${data}</h2>`
    })
    // To Catch Errors
    .catch((err) => {
        console.log(err);
    })
}

const addJson = () => {
    // Fetch method takes two parameters the request url and returns a promise
    fetch('user.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Append Text to the DOM or webpage
        let output = document.getElementById('output');
        let users = `<h2>Users</h2>`;
        data.forEach((user) => {
            users += `
            <ul>
              <li>ID: ${user.id}</li>
              <li>Name: ${user.name}</li>
              <li>Email: ${user.email}</li>
            </ul>
            `
            output.innerHTML = users;
        });
    })
    // To Catch Errors
    .catch((err) => {
        console.log(err);
    })
}

const addPosts = () => {
    // Fetch method takes two parameters the request url and returns a promise
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Append Posts from the API to the DOM or webpage
        let output = document.getElementById('output');
        let posts = `<h2>Posts</h2>`;
        data.forEach((post) => {
            posts += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `
            output.innerHTML = posts;
        });
    })
    // To Catch Errors
    .catch((err) => {
        console.log(err);
    })
}

getText.addEventListener('click', addText);
getJson.addEventListener('click', addJson);
getPosts.addEventListener('click', addPosts);