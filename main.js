
const body = document.querySelector('body');
const mainDiv = document.createElement('div');
mainDiv.className = "mainDiv";
mainDiv.style.margin = "auto 120px";
mainDiv.style.height = "500px";
mainDiv.style.width = "900px";
mainDiv.style.backgroundImage = "url('libraray.jpg')";
mainDiv.style.backdropFilter = "10px";
mainDiv.style.display = "flex";
mainDiv.style.justifyContent = "center";
mainDiv.style.alignContent = "center";
mainDiv.style.color = 'white';
// mainDiv.style.border="2px solid black";
mainDiv.style.position = "absolute";
mainDiv.style.top = "10%";
body.appendChild(mainDiv);
const conDiv = document.createElement('div');
conDiv.className = "conDiv";
conDiv.style.height = "400px";
conDiv.style.width = "800px";
// conDiv.style.border="2px solid white";
conDiv.style.position = "absolute";
conDiv.style.display = "flex";
conDiv.style.justifyContent = "center";
conDiv.style.alignContent = "center";
mainDiv.appendChild(conDiv);
const headDiv = document.createElement('div');
headDiv.className = "headDiv";
headDiv.innerHTML = "<h1> Library Management System</h1>";
headDiv.style.position = "absolute";
headDiv.style.display = "flex";
headDiv.style.justifyContent = "center";
headDiv.style.alignContent = "center";
conDiv.append(headDiv);
const formDiv = document.getElementById('formDiv');
conDiv.append(formDiv);
//adding real functionality of js

const details = document.getElementById('details');
const searchInput = document.getElementById('searchInput');
const studentForm = document.getElementById('studentForm');
const noResultsMessage = document.getElementById('noResultsMessage');

let books = [];

studentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // const para = document.createElement('p');
    const authorName = document.getElementById('authorName').value;
    const titleName = document.getElementById('titleName').value;
    const pages = document.getElementById('pages').value;
    const genreName = document.getElementById('genreName').value;
    if (authorName && titleName && pages && genreName) {
        const book = { authorName, titleName, pages, genreName };
        books.push(book);
        displayBooks(books);
        studentForm.reset();
    }
    else {
        alert('Please fill in all the fields.');
    }
    // para.innerHTML = " <b>" + titleName + "</b>" + "<br>" + "Author:" + authorName + "<br>" + "Pages:" + pages + "<br>" + "Genre:" + genreName;
    // details.style.border = "2px solid white";
    // details.style.background = "rgba(52, 22, 5, 0.5)";
    // details.style.backdropfilter = "blur(10px)";
    // details.append(para);
});

searchInput.addEventListener('input', function (e) {
    e.preventDefault();
    const searchValue = searchInput.value.toLowerCase();
    const filterBooks = books.filter(book => book.titleName.toLowerCase().includes(searchValue));
    displayBooks(filterBooks);
});
function displayBooks(books) {
    details.innerHTML = '';
    if (books.length > 0) {
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book');
            bookItem.innerHTML = `
                <h2>${book.titleName}</h2>
                <p>Author: ${book.authorName}</p>
                <p>Pages: ${book.pages}</p>
                <p>Genre: ${book.genreName}</p>
            `;
            details.appendChild(bookItem);

        });
        noResultsMessage.style.display = 'none';

    }else{
        noResultsMessage.style.display = 'block';

    }
}







