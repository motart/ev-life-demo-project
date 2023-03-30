const gql = require("graphql-tag");

const typeDefs = gql`
    type Query {
        "Get tracks available"
        tracksForHome: [Track!]!
    }

    "Group of modules related to a specific topic"
    type Track {
        id: ID!
        "Title of our track"
        title: String!
        "URL to our thumbnail/photo"
        thumbnail: String
        "Approximate lenght of a track in minutes"
        length: Int
        "Number of modules contained in a Track"
        modulesCount: Int
        "Author"
        author: Author!
    }

    "The author of the track"
    type Author {
        id: ID!
        "Author's name"
        name: String!
        "Author's picture URL"
        photo: String
    }
`;

module.exports = typeDefs;