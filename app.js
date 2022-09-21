// const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDLLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 🙋‍♂️');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2) ROUTE HANDLERS

// 3) ROUTES

/*
app.get('/api/v1/tours', getAllTours)
app.get('/api/v1/tours/:id', getTour)
app.post('/api/v1/tours', createTour)
app.patch('/api/v1/tours/:id', updateTour)
app.delete('/api/v1/tours/:id', deleteTour)
*/

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
// 4) START THE SERVER

// Important Points

// we can add a vriable using :

// PUT vs PATCH
// PUT: we expect that our app receives the entire new updated object
// PATCH: we only expect the properties that should actually be updated on the object
// so PATCH is better

module.exports = app;
