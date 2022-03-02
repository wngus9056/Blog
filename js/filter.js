start();

function start() {
    document.getElementById('searchText').addEventListener('keyup', search);
    document.querySelector('nav').addEventListener('click', category);
    document.getElementById('swap').addEventListener('click', swap);
}

function search() {
    const value = document.getElementById('searchText').value.toUpperCase();
    const array = document.getElementsByClassName('card__caption');
    
    for (let row of array) {
        let array_key = row.textContent
        console.log(array_key);
        console.log(value);
        
        if (array_key.toUpperCase().indexOf(value) > -1) {
            row.parentNode.parentNode.parentNode.parentNode.style = ''
        } else {
            row.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
        }
    }
}

function category(e) {
    const dataValue = 'DATA';
    const testValue = '비행기';
    const testValue2 = '하프갤런';
    const array = document.getElementsByClassName('card__title');

    if (e.target.className == 'fa fa-database fa-3x tooltip') {
        for (let row of array) {
            let array_key = row.textContent
            if (array_key.toUpperCase().indexOf(dataValue) > -1) {
                row.parentNode.parentNode.parentNode.parentNode.style = ''
            } else {
                row.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
            }
        }
    } else if (e.target.className == 'fa fa-plane fa-3x tooltip') {
        for (let row of array) {
            let array_key = row.textContent
            if (array_key.toUpperCase().indexOf(testValue) > -1) {
                row.parentNode.parentNode.parentNode.parentNode.style = ''
            } else {
                row.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
            }
        }
    } else if (e.target.className == 'fa fa-truck fa-3x tooltip') {
        for (let row of array) {
            let array_key = row.textContent
            if (array_key.toUpperCase().indexOf(testValue2) > -1) {
                row.parentNode.parentNode.parentNode.parentNode.style = ''
            } else {
                row.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
            }
        }
    }
}


function swap(e) {
    let value = e.target.innerHTML;
    console.log(value);
    if (value === 'Mini Project') {
        e.target.innerHTML = 'Filter';
    } else {
        e.target.innerHTML = 'Mini Project';
    }
}
