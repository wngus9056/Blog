start();

function start() {
    document.getElementById('searchText').addEventListener('keyup', search);
}

function search() {
    const value = document.getElementById('searchText').value.toUpperCase();
    const array = document.getElementsByClassName('card__title');

    for (let row of array) {
        let array_key = row.textContent
        let test_key = row.parentNode.parentNode.parentNode.parentNode
        if (array_key.toUpperCase().indexOf(value) > -1) {
            row.parentNode.parentNode.parentNode.parentNode.style = ''
        }else{
            row.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
        }
    }
}
