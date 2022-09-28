const Comment = require("../models/Comments");

module.exports = {
    createComment: async (req, res) => {
      try {
        await Comment.create({
          comment: req.body.comment,
          postId: req.params.id,
          likes: 0,
          user: req.user.id,
        });
        console.log("Comment has been added!");
        res.redirect(`/post/${req.params.id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };
  