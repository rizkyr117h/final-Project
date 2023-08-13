const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/videoApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(bodyParser.json());

// Add CORS middleware
app.use(cors());

// Define API endpoints using routes
app.use(require('./routes/videoRoutes'));
app.use(require('./routes/productRoutes'));
app.use(require('./routes/commentRoutes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
