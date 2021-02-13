const db = require('./Db');

const Post = db.sequelize.define('conteudo', {
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

module.exports = Post;

// Post.sync({force: true});