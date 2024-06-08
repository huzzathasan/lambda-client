const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }
    type Blog{
        id: ID!
        title: String!
        paragraph: String!
        image: String!
        tags: String!
        publishDate: String!
        authorId: ID!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        image: String!
        designation: String!
        blogs: [Blog!]!
    }
    # QUERIES
    type Query {
        users: [User!]!
        user(id: ID!): User!
        blogs: [Blog!]!
        blog(id: ID!): Blog!
        authors: [Author!]!
        author(id: ID!): Author!
    }
    # INPUT 
    input userInput{
        name: String!
        email: String!
        password: String!
    }
    input blogInput{
        title: String!
        paragraph: String!
        image: String!
        tags: String!
        authorId: ID!
    }
    input authorInput{
        name: String!
        image: String!
        designation: String!
    }

    # MUTATIONS 
    type Mutation {
        createUser(data: userInput!): User!
        createBlog(data: blogInput!): Blog!
        createAuthor(data: authorInput!): Author!

        deleteUser(id: ID!): User!
        deleteBlog(id: ID!): Blog!
        deleteAuthor(id: ID!): Author!

        updateUser(id: ID!, data: userInput!): User!
        updateBlog(id: ID!, data: blogInput): Blog!
        updateAuthor(id: ID!, data: authorInput): Author!
    }
`;
module.exports = typeDefs;
