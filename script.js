const getText = document.getElementById('getText');

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

getText.addEventListener('click', addText);