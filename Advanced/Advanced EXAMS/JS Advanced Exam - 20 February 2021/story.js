'use strict';

class Story {
  #comments;
  #likes;

  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this.#comments = [];
    this.#likes = [];
  }

  get likes() {
    const likesCount = this.#likes.length;
    const username = this.#likes[0];

    if (likesCount === 0) {
      return `${this.title} has 0 likes`;
    } else if (likesCount === 1) {
      return `${username} likes this story!`;
    } else {
      return `${username} and ${likesCount - 1} others like this story!`;
    }
  }

  like(username) {
    if (this.#likes.includes(username)) {
      return "You can't like the same story twice!";
    } else if (username === this.creator) {
      return "You can't like your own story!";
    } else {
      this.#likes.push(username);
      return `${username} liked ${this.title}!`;
    }
  }

  dislike(username) {
    if (!this.#likes.includes(username)) {
      throw new Error("You can't dislike this story!");
    } else {
      const usernameIndex = this.#likes.findIndex((user) => user === username);
      this.#likes.splice(usernameIndex, 1);
      return `${username} disliked ${this.title}`;
    }
  }

  comment(username, content, id) {
    const currentComment = this.#comments.find((comment) => comment.id === id);

    if (!currentComment || !id) {
      const commentObject = {
        username,
        content,
        id: this.#comments.length + 1,
        replies: [],
      };

      this.#comments.push(commentObject);
      return `${username} commented on ${this.title}`;
    } else if (currentComment) {
      currentComment.replies.push({
        id: `${currentComment.id}.${currentComment.replies.length + 1}`,
        username,
        content,
      });

      return 'You replied successfully';
    }
  }

  get comments() {
    return this.#comments.forEach((comment) => console.log(comment.replies));
  }

  toString(sortingType) {
    const output = [
      `Title: ${this.title}`,
      `Creator: ${this.creator}`,
      `Likes: ${this.#likes.length}`,
      `Comments:`,
    ];

    const sortingOrder = function (a, b) {
      if (sortingType === 'asc') {
        return a.id - b.id;
      } else if (sortingType === 'desc') {
        return b.id - a.id;
      } else {
        return a.username.localeCompare(b.username);
      }
    };

    const sortedComments = this.#comments.sort(sortingOrder);

    sortedComments.forEach((comment) => {
      output.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
      if (comment.replies.length > 0) {
        const sortedReplies = comment.replies.sort(sortingOrder);
        sortedReplies.forEach((reply) =>
          output.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
        );
      }
    });

    return output.join('\n');
  }
}

let art = new Story('My Story', 'Anny');
console.log(art.like('John'));
// console.log(art.likes);
console.log(art.like('John'));
// console.log(art.likes);
art.comment('Sammy', 'Some Content');
console.log(art.comment('Ammy', 'New Content'));
art.comment('Zane', 'Reply', 1);
art.comment('Jessy', 'Nice :)');
console.log(art.comment('SAmmy', 'Reply@', 1));
console.log();
// console.log(art.toString('username'));
console.log();
art.like('Zane');
// console.log(art.toString('desc'));

// Unexpected error: expected 'Title: My Story\nCreator: Anny\nLikes: 0\nComments:\n-- 2. Ammy: New Content\n-- 3. Jessy: Nice :)\n-- 1. Sammy: Some Content\n--- 1.2. SAmmy: Reply@ \n--- 1.1. Zane: Reply '
//to equal 'Title: My Story\nCreator: Anny\nLikes: 0\nComments:\n-- 2. Ammy: New Content\n-- 3. Jessy: Nice :)\n-- 1. Sammy: Some Content\n--- 1.2. SAmmy: Reply@\n--- 1.1. Zane: Reply'
