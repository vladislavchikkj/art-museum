# Art Museum

## Description

The "Art Museum" project is a web application for displaying a catalog of paintings, allowing users to search, sort, and add paintings to a favorites list. The application uses an external API to fetch painting data and provides an intuitive interface for viewing them.

## Features

- Fetch painting data from an external API ([ART API](https://api.artic.edu/docs/#introduction)).
- Display a list of paintings with pagination.
- Implement a search form with input validation.
- Use routing to separate different pages of the application.
- Implement debounce for the search form.
- Add paintings to a favorites list and save them in LocalStorage.
- View detailed information about a painting.
- Interface to view the favorites list and remove items from it.
- Sort paintings by various criteria (by date or alphabetically).

## Technologies Used

- **node.js** - a JavaScript runtime built on Chrome's V8 JavaScript engine.
- **eslint** - a tool for identifying and reporting on patterns in JavaScript.
- **prettier** - an opinionated code formatter.
- **yarn** - a package manager.
- **react** - a JavaScript library for building user interfaces.
- **typescript** - a strongly typed programming language that builds on JavaScript.
- **styled-components** - a library for styling React components.
- **jest** - a JavaScript testing framework.
- **react-router-dom** - a library for routing in React applications.
- **yup** - a JavaScript schema builder for value parsing and validation.
- **formik** - a library for building forms in React.

## Installation and Running

1. Clone the repository:
   ```sh
   git clone https://github.com/vladislavchikkj/modsen-art-museum.git
   ```
2. Navigate to the project directory:
   ```sh
   cd modsen-art-museum
   ```
3. Install the dependencies:
   ```sh
   yarn install
   ```
4. Start the application:
   ```sh
   yarn start
   ```

## Testing

To run tests, use the command:

```sh
yarn test
```
