# Book & Subject Force-Directed Graph

Search and add books by title, then see a graph connecting them by subject.

![screenshot](./screenshot.png)

## Installation

Requirements:

- git
- Node.js

Clone this repository.

```sh
git clone https://github.com/travishorn/book-graph
```

Change into the directory.

```sh
cd book-graph
```

Install the dependencies.

```sh
npm install
```

Run the database migrations.

```sh
npx knex migrate:latest
```

Optional - Seed the database with sample data.

```sh
npx knex seed:run
```

## Usage

Start the development server.

```sh
npm run dev
```

Go to http://localhost:5173/

At the bottom of the page, enter a book title and click **Search**.

Browse the search results. When you find the book you want to add, click
**Add**. Note: books with a higher subject count will provide more data for the
graph.

A force-directed graph is automatically built from the books you've added. Books
are in blue while subjects are in yellow. Hover over a node to see it's label.

## License

The MIT License

Copyright 2024 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
