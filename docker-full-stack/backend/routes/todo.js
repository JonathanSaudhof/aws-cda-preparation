const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

router.get("/:id", (req, res, next) => {
  const todoId = req.params.id;
  //   res.json({ message: "test" });
  Todo.findById(todoId).then((doc) =>
    res.json(doc).catch((err) => {
      res.status(500).json(doc);
    }),
  );
});

router.get("/", function (req, res, next) {
  // get all
  //   res.json({ message: "das ist die api" });
  Todo.find()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/", (req, res, next) => {
  const { user, content } = req.body;
  console.log(req.body);
  Todo.create({
    content: content,
    author: user,
    done: false,
  })
    .then((doc) => {
      res.json({ message: `${doc._id} created` });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: err.message,
      });
    });
});

router.put("/:id", (req, res, next) => {
  const todoId = req.params.id;
  const { done } = req.body;

  Todo.findByIdAndUpdate(
    { _id: todoId },
    {
      done: done,
    },
  )
    .then((doc) => {
      res.json({ message: `${doc._id} updated` });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: err.message,
      });
    });
});

router.delete("/:id", (req, res, next) => {
  const todoId = req.params.id;

  res.json({ message: `try to delete ${todoId}` });
  Todo.deleteOne({ _id: todoId })
    .then(({ _id }) => {
      res.json({ message: `${_id} deleted` });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
