const getText = document.getElementById('getText');
const getJson = document.getElementById('getJson');
const getPost = document.getElementById('getPost');
const addPost = document.getElementById('addpost');

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
            <ul class="list-group mb-3">
              <li class="list-group-item">ID: ${user.id}</li>
              <li class="list-group-item">Name: ${user.name}</li>
              <li class="list-group-item">Email: ${user.email}</li>
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

const getPosts = () => {
    // Fetch method takes two parameters the request url and returns a promise
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        if (response.status === 200) {
            return response.json();
          } else {
            throw new Error('Something went wrong on API server!');
          }
    })
    .then((data) => {
        // Append Posts from the API to the DOM or webpage
        let output = document.getElementById('output');
        let posts = `<h2 class="mb-4">Posts</h2>`;
        data.forEach((post) => {
            posts += `
            <div class="card card-body mb-3">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
            `
            output.innerHTML = posts;
        });
    })
    // To Catch Errors
    .catch((err) => {
        console.log(err);
    })
}

const addPosts = (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {

        method: 'POST',
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"
        },
        // This will be where we shall apply the data and then change it into a string.
        body: JSON.stringify({
            title: title,
            body: body
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
    });
}

getText.addEventListener('click', addText);
getJson.addEventListener('click', addJson);
getPost.addEventListener('click', getPosts);
addPost.addEventListener('submit', addPosts);