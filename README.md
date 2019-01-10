# DigiLib

A simple React-Redux application where you could browse books from the Open library.

# Project File Structure

**1. PUBLIC** - the project's static files.

| ├── css

| | └── style.css

| ├── images

| | └── books_landing.jpg

| └── index.html

**2. SASS** - I recently learned SASS and attempted to use the 7 - 1 pattern which uses different folders for partial Sass files, and 1 main Sass file to import all other files into a compiled CSS stylesheet. Because my project was small I only used 4 out of the 7 folders recommended by the pattern.

| ├── abstracts

| | ├── \_mixins.scss

| | └── \_variables.scss

| ├── base

| | ├── \_animations.scss

| | ├── \_base.scss

| | ├── \_typography.scss

| | └── \_utilities.scss

| ├── components

| | ├── \_button.scss

| | ├── \_card.scss

| | └── \_search.scss

| ├── main.scss

| └── pages

| ├── \_bookDetail.scss

| ├── \_bookList.scss

| └── \_landing.scss

**3. SRC** - In this project I used React and Redux. The actions and reducers folders pertain to Redux and the components and containers folders as well as the index.js file on the same level are the project's React fils. For this project I attempted to use the container component pattern. For details on this React development pattern please reference the following article, https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0.

| ├── actions

| | ├── index.js

| | └── types.js

| ├── components

| | ├── App.js

| | └── Landing.js

| ├── containers

| | ├── book.js

| | ├── list_of_books.js

| | └── search.js

| ├── index.js

| └── reducers

| ├── books_reducer.js

| └── index.js

# What I accomplished

I completed the majority of the user stories detailed in the coding exercise. Users will be able to do the following:

**1.** Search for a book.

**2.** Fetch and display a list of results from the Open Library API (https://openlibrary.org/developers/api).

**3.** Filter results.

**4.** Click on a result and view additional details, including author photo and other book details.

# What I would improve with more time

**1.** Implement sorting functionality.

**2.** Improve UI presentation and flow.

**3.** Improve search by allowing users to search by subject in addition to author and title.

**4.** Improve navigation bar.

**5.** Improve overall project organization.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`
