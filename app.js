const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./router/movieRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/moviedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use(express.json()); // Body parser
app.use('/api/movies', movieRoutes); // Route prefix

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
