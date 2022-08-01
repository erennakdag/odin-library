class Book {
  constructor(title, author, publishDate, coverImgUrl, isRead = false) {
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
    this.coverImgUrl = coverImgUrl;
    this.isRead = isRead;
  }
}

const myLibrary = [
  new Book(
    "Harry Potter: Sorcerer's Stone",
    "JK Rowling",
    1997,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdx9ZFfMTpv4lla2OvLrImn5X5i6d_V3sZg&usqp=CAU",
    true
  ),
  //   new Book(
  //     "Lord of the Rings: The Fellowship of the Ring",
  //     "J.R.R. Tolkien",
  //     1954,
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABQ6n5BkFhtYomAp09t19owjThPIn3MNVHA&usqp=CAU"
  //   ),
];

function BookComponent(book) {
  const container = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h4");
  const authorAndDate = document.createElement("p");
  const isReadLabel = document.createElement("label");
  const isRead = document.createElement("input");

  container.className = "container";

  img.src = book.coverImgUrl;

  title.innerText = book.title;

  authorAndDate.innerText = `${book.author}, ${book.publishDate}`;

  isReadLabel.innerText = "Read?";
  isRead.type = "checkbox";
  isRead.checked = book.isRead;
  isRead.addEventListener("change", (e) => {
    e.preventDefault();
    book.isRead = isRead.checked;
    console.log(book);
  });

  container.appendChild(img);
  container.appendChild(title);
  container.appendChild(authorAndDate);
  container.appendChild(isReadLabel);
  container.appendChild(isRead);

  document.getElementById("wrapper").append(container);
}

(function showBooksInlibrary() {
  myLibrary.forEach(BookComponent);
})();

(function () {
  document.getElementById("addBook").addEventListener("click", (e) => {
    e.preventDefault();
    const newBook = new Book(
      document.getElementById("title").value,
      document.getElementById("author").value,
      document.getElementById("publishDate").value,
      document.getElementById("coverImgUrl").value,
      document.getElementById("isRead").checked
    );
    myLibrary.push(newBook);
    BookComponent(newBook);
  });
})();

console.log(myLibrary);
