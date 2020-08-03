import axios from "axios";
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const DETAIL_MOVIE_URL = `${BASE_URL}movie_details.json`;
const SUGGESTION_URL = `${BASE_URL}movie_suggestions.json`;
const COMMENT_URL = `${BASE_URL}movie_comments.json`;

export const getMovies = async (limit, rating) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(LIST_MOVIES_URL, {
        params: {
            limit,
            minimum_rating: rating
        }
    });
    return movies;
};

export const getMovie = async id => {
    const {
        data: {
            data: { movie }
        }
    } = await axios(DETAIL_MOVIE_URL, {
        params: {
            movie_id: id
        }
    });
    return movie;
};

export const getSuggestions = async id => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(SUGGESTION_URL, {
        params: {
            movie_id: id
        }
    });
    return movies;
};

export const getComments = async id => {
    const {
        data: {
            data: { movie }
        }
    } = await axios(COMMENT_URL, {
        params: {
            movie_id: id
        }
    });
    return movie
}

