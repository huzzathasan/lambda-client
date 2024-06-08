const resolvers = {
  Query: {
    users: async (_, __, { models }) => {
      return await models.User.findAll();
    },
    user: async (_, { id }, { models }) => {
      return await models.User.findByPk(id);
    },
    blogs: async (_, __, { models }) => {
      return await models.Blog.findAll();
    },
    blog: async (_, { id }, { models }) => {
      return await models.Blog.findByPk(id);
    },
    authors: async (_, __, { models }) => {
      return await models.Author.findAll();
    },
    author: async (_, { id }, { models }) => {
      return await models.Author.findByPk(id);
    },
  },

  Mutation: {
    createUser: async (_, { data }, { models }) => {
      return await models.User.create(data);
    },
    createBlog: async (_, { data }, { models }) => {
      return await models.Blog.create(data);
    },
    createAuthor: async (_, { data }, { models }) => {
      return await models.Author.create(data);
    },

    deleteUser: async (_, { id }, { models }) => {
      return await models.User.destroy({ where: { id } });
    },
    deleteBlog: async (_, { id }, { models }) => {
      return await models.Blog.destroy({ where: { id } });
    },
    deleteAuthor: async (_, { id }, { models }) => {
      return await models.Author.destroy({ where: { id } });
    },

    updateUser: async (_, { id, data }, { models }) => {
      return await models.User.update(data, { where: { id } });
    },
    updateBlog: async (_, { id, data }, { models }) => {
      return await models.Blog.update(data, { where: { id } });
    },
    updateAuthor: async (_, { id, data }, { models }) => {
      return await models.Author.update(data, { where: { id } });
    },
  },

  //relational queries
  Blog: {
    author: async (blog, _, { models }) => {
      return await models.Author.findByPk(blog.authorId);
    },
  },
  Author: {
    blogs: async (author, _, { models }) => {
      return await models.Blog.findAll({ where: { authorId: author.id } });
    },
  },
};
module.exports = resolvers;
