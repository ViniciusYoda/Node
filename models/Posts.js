import { Sequelize, sequelize } from "./db.js";

const Post = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

export default Post