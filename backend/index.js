const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const feedbackRoutes = require('./routes/feedbackRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3031;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(YAML.load('./swagger.yaml')));
app.use('/feedback', feedbackRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
