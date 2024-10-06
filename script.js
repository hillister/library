const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        let readStatus = this.read ? "already read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}.`
    }
}

function preloadBook() {
    let sampleBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
    myLibrary.push(sampleBook);
    myLoop(); // Render the preloaded book
    let sampleBook2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
    myLibrary.push(sampleBook2);
    myLoop(); // Render the preloaded book
    let sampleBook3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
    myLibrary.push(sampleBook3);
    myLoop(); // Render the preloaded book
}


document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();

    const titleValue = document.getElementById("title").value;
    const authorValue = document.getElementById("author").value;
    const pagesValue = document.getElementById("pages").value;
    const readValue = document.getElementById("read").checked;

    addBookToLibrary(titleValue, authorValue, pagesValue, readValue);
    myLoop();
    togglePopUp();

    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
    var checkbox = document.getElementById("read");
    (checkbox.checked = false);
})




function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    console.log(myLibrary)
};

function myLoop(){
    let container = document.getElementById("container");
    container.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        
        let card = document.createElement("div");
        card.className = "card";

        let bookTitle =  document.createElement("p")
        bookTitle.className = "cardTitle";
        bookTitle.innerHTML = `Title: ${book.title}`;

        let bookAuthor =  document.createElement("p")
        bookAuthor.className = "cardAuthor";
        bookAuthor.innerHTML = `Author: ${book.author}`;

        let bookPages =  document.createElement("p")
        bookPages.className = "cardPages";
        bookPages.innerHTML = `Pages: ${book.pages}`;

        let bookRead =  document.createElement("p")
        bookRead.className = "cardRead";
        bookRead.innerHTML = `Status: ${(book.read ? 'Already read' : 'Not read yet')}`

        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookRead);

        container.appendChild(card);        

        if(book.read === false) {
            let changeRead = document.createElement("button")
            changeRead.className = "read"
            changeRead.innerHTML = "READ"
            card.appendChild(changeRead);

            changeRead.addEventListener("click", function(){
                book.read = true
                bookRead.innerHTML = 'Already read'
                changeRead.remove()
            });
        }

        let deleteBtn = document.createElement("button")
        deleteBtn.className = "delBtn"
        deleteBtn.innerHTML = "DELETE"
        
        deleteBtn.addEventListener("click", function(){
            removeCard(i)
        });
        card.appendChild(deleteBtn);

    }
}


function removeCard(index){
    myLibrary.splice(index, 1);
    myLoop()
}

function togglePopUp() {
    const popUp = document.getElementById("popUp");
    popUp.classList.toggle('show');
}

document.getElementById("btnPopUp").addEventListener("click", togglePopUp);

window.onload = preloadBook