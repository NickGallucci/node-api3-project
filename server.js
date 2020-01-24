const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

// function validatePostId() {
//   return (req, res, next) => {
//     posts
//       .getById(req.params.id)
//       .then(post => {
//         if (post) {
//           req.post = post;
//           next();
//         } else {
//           res.status(400).json({ message: "could not find post with ID" });
//         }
//       })
//       .catch(err =>
//         res.status(500).json({ message: "error getting post with this ID" })
//       );
//   };
// }

// function validatePost() {
//   return (req, res, next) => {
//     resource = {
//       text: req.body.text
//     };

//     if (!req.body.text) {
//       return res.status(404).json({ message: "missing post data" });
//     } else {
//       req.text = resource;
//       next();
//     }
//   };
// }

module.exports = server;
