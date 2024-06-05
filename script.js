// your code here
document.getElementById('button').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

    let url = 'https://localhost:8080/';
    const params = new URLSearchParams();

    if (name) {
        params.append('name', name);
    }

    if (year) {
        params.append('year', year);
    }

    if (params.toString()) {
        url += '?' + params.toString();
    }

    document.getElementById('url').textContent = url;
});
