start();

function start() {
    document.getElementById('searchText').addEventListener('keyup', search);
    document.querySelector('nav').addEventListener('click', category);
}

function search() {
    const value = document.getElementById('searchText').value.toUpperCase();
    const array = document.getElementsByClassName('card__title');

    for (let row of array) {
        let array_key = row.textContent
        let test_key = row.parentNode.parentNode.parentNode.parentNode
        if (array_key.toUpperCase().indexOf(value) > -1) {
            row.parentNode.parentNode.parentNode.parentNode.style = ''
        } else {
            row.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
        }
    }
}

function category(e) {
    const dataValue = 'DATA'
    const testValue = '비행기'
    const testValue2 = '하프갤런'
    const array = document.getElementsByClassName('card__title');

    if (e.target.className == 'fa fa-twitter-square fa-3x') {
        for (let row of array) {
            let array_key = row.textContent
            if (array_key.toUpperCase().indexOf(dataValue) > -1) {
                row.parentNode.parentNode.parentNode.parentNode.style = ''
            } else {
                row.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
            }
        }
    } else if (e.target.className == 'fa fa-instagram fa-3x') {
        for (let row of array) {
            let array_key = row.textContent
            if (array_key.toUpperCase().indexOf(testValue) > -1) {
                row.parentNode.parentNode.parentNode.parentNode.style = ''
            } else {
                row.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
            }
        }
    }
}
