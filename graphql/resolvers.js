import { getMovies, getMovie, getSuggestions, getComments } from "./db";

const resolvers = {
    Query: {
        movies: (_, { rating, limit }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestion: (_, { id }) => getSuggestions(id),
        comment: (_, { id }) => getComments(id)
    }
};

export default resolvers;