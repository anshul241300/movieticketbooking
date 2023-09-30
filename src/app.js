const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use a default port or read it from environment variables

// Middleware configuration (body parsing, CORS, etc.)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define your routes here (e.g., require and use route files)
const moviesRouter = require('./routes/movies');
const authRouter = require('./routes/auth');
const artistsRouter = require('./routes/artists');
const genresRouter = require('./routes/genres');

app.use('/movies', moviesRouter);
app.use('/auth', authRouter);
app.use('/artists', artistsRouter);
app.use('/genres', genresRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
