const form = document.querySelector("form");

const isEmpty = (val) => {
    return val === "" ? true : false;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const numberOfPages = document.getElementById("pages").value;
    const genre = document.getElementById("genre").value;
    const isbn = document.getElementById("isbn").value;
    const publisher = document.getElementById("publisher").value;
    const publishingDate = document.getElementById("publishing_date").value;

    // if (isEmpty(title) ||
    //     isEmpty(author) ||
    //     isEmpty(numberOfPages) ||
    //     isEmpty(genre) ||
    //     isEmpty(isbn) ||
    //     isEmpty(publisher) ||
    //     isEmpty(publishingDate)) {
    //     alert('All fields are required');
    //     return;
    // }

    const book = {
        title,
        author,
        numberOfPages,
        genre,
        isbn,
        publisher,
        publishingDate,
    };

    console.log(book);

    fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
        .then(response => {
            if(response.status >= 400) {
                alert(`${response.status}: ${response.statusText}`)
            } 
            else {
                alert("Book Created!")
            }
            return response.json();
        })
        .then(data => {
            console.log("Success:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
})