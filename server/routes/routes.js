const mongoose = require('mongoose');

require('../models/book');

const Book = mongoose.model('book');

module.exports = app => {
  app.post('/api/books', async (req, res) => {
    try {
      const book = new Book({ title: req.body.title });
      await book.save();
      res.send({ title: book.title, _id: book._id });
    } catch (error) {
      res.send({ error });
    }
  });

  app.get('/api/books', async (req, res) => {
    try {
      const books = await Book.find({}).select('-comments');
      res.send(books);
    } catch (error) {
      res.send({ error });
    }
  });

  app.get('/api/books/:id', async (req, res) => {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) throw 'invalid id';

      const book = await Book.findById(id).select('-commentcount');

      if (!book) throw 'no book exists';

      res.send(book);
    } catch (error) {
      res.send({ error });
    }
  });

  app.post('/api/books/:id', async (req, res) => {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) throw 'invalid id';

      const book = await Book.findByIdAndUpdate(
        id,
        { $push: { comments: req.body.comment } },
        { new: true }
      ).select('-commentcount');

      if (!book) throw 'no book exists';

      res.send(book);
    } catch (error) {
      res.send({ error });
    }
  });

  app.delete('/api/books/:id', async (req, res) => {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) throw 'invalid id';

      const result = await Book.findByIdAndDelete(id);

      if (!result) throw 'no book exists';

      res.send('delete successful');
    } catch (error) {
      res.send({ error });
    }
  });

  app.delete('/api/books', async (req, res) => {
    try {
      await Book.deleteMany({});
      res.send('complete delete successful');
    } catch (error) {
      res.send({ error });
    }
  });
};