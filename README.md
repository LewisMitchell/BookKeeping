# BookKeeping

A simple Node.JS application that keeps track of books in a library?

Created with the purpose of exploring Express, Jade, Mongoose and Node.JS coming from a Scala + Play background.

## Prerequisites

- NodeJS v16 (npm 8.5.0)
- MongoDB

## Running

If this is the first time runnning the application, run `npm install`

To run this application, run `npm start`

This app runs on port 3000.

## Endpoints

### `GET /`
Index page which calls Mongo to retrieve the books stored (in the library?)

---

### `GET /add-book`

Renders view to add book to library

---

### `POST /add-book`

Creates a new book based on the given parameters and stores it in Mongo

Sample payload:
```
    {
        "book_name": "string",
        "book_author": "string
    }
```

TODO: need to add CSRF protection

---

### `GET /remove-book`

Renders view to remove book from library

---

### `POST /remove-book`

Removes the book based on the ID given

Sample payload:
```
    {
        "book_id": "string"
    }
```

TODO: ideally should be DELETE endpoint
## Testing

Should have followed TDD :(
 
Need to explore testing options (stay tuned)

