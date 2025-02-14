function fetchData() {
    fetch('http://127.0.0.1:5000/ask')
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').innerText = data;
        })
        .catch(error => console.error('Error:', error));
}
