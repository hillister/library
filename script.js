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

document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();

    const titleValue = document.getElementById("title").value;
    const authorValue = document.getElementById("author").value;
    const pagesValue = document.getElementById("pages").value;
    const readValue = document.getElementById("read").checked;

    addBookToLibrary(titleValue, authorValue, pagesValue, readValue);
    myLoop()

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


        let bookTitle =  document.createElement("p")
        bookTitle.innerHTML = book.title;

        let bookAuthor =  document.createElement("p")
        bookAuthor.innerHTML = book.author;

        let bookPages =  document.createElement("p")
        bookPages.innerHTML = book.pages;

        let bookRead =  document.createElement("p")
        bookRead.innerHTML = (book.read ? 'yes' : 'no')

        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookRead);
        container.appendChild(card);
    }
}

