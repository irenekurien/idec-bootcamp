const express = require('express');
const router = express.Router();

const books = [{
    id: 1,
    title: "Book1",
    author: "Author1",
    numberOfPages: 10,
    genre: "Fiction",
    isbn: "111111111111",
    publisher: "Publisher1",
    publicationDate: "12/12/2022"
}]

const isValidId = (id) => {
    return isNaN(parseInt(id)) ? false : true;
}

const isEmpty = (val) => {
    return val === "" ? true : false;
}

router.get('/', (req, res) => {
    console.log(books);
    return res.status(200).send({ books: books });
});

router.post('/', (req, res) => {
    console.log(req.body);
    const title = req.body.title;
    const author = req.body.author;
    const numberOfPages = req.body.numberOfPages;
    const genre = req.body.genre;
    const isbn = req.body.isbn;
    const publisher = req.body.publisher;
    const publicationDate = req.body.publicationDate;

    // // Validate form data
    if (isEmpty(title)) {
        return res.status(400).send({ error: 'Title is required' });
    }
    if (isEmpty(author)) {
        return res.status(400).send({ error: 'Author is required' });
    }
    if (isEmpty(numberOfPages)) {
        return res.status(400).send({ error: 'Number of pages is required' });
    }
    if (isEmpty(genre)) {
        return res.status(400).send({ error: 'Genre is required' });
    }
    if(isEmpty(isbn))   {
        return res.status(400).send({ error: 'ISBN is required' });
    }
    if (isEmpty(numberOfPages)) {
        return res.status(400).send({ error: 'Number of pages is required' });
    }
    if (isEmpty(publisher)) {
        return res.status(400).send({ error: 'Publisher name is required' });
    }
    if(isEmpty(publicationDate))   {
        return res.status(400).send({ error: 'Publication date is required' });
    }

    // Create a new book
    const book = {
        id: books.length + 1,
        title,
        author,
        numberOfPages, 
        genre,
        isbn,
        numberOfPages,
        publisher,
        publicationDate,
    };

    // Add book to books array
    books.push(book);

    return res.status(201).send({ message: 'Book created successfully' });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    if (!isValidId(id)) {
        return res.status(400).json({ message: "Invalid ID" })
    }

    const book = books.find((b) => b.id === parseInt(id));

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const author = req.body.author;
    const publisher = req.body.publisher;
    const publicationDate = req.body.publicationDate;

    // Find the book to update
    const bookIndex = books.findIndex ((b) => {
        return b.id == id;
    });

    if (bookIndex === -1) {
        return res.status(404).send({ error: 'Book not found' });
    }

    // Update book properties
    books[bookIndex].title = title || books[bookIndex].title;
    books[bookIndex].author = author || books[bookIndex].author;
    books[bookIndex].publisher = publisher || books[bookIndex].publisher;
    books[bookIndex].publicationDate = publicationDate || books[bookIndex].publicationDate;

    return res.status(200).send({ message: 'Book updated successfully' });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    // Find the book to delete
    const bookIndex = books.findIndex ((b) => {
        return b.id == id;
    });

    if (bookIndex === -1) {
        return res.status(404).send({ error: 'Book not found' });
    }
});

module.exports = router;
