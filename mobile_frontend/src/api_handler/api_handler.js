import { get_instance, instance_type } from "../api/instance";
import {TMDB_BASE_URL, API_ACCESS_TOKEN} from '@env';

const get_movie_details = async (movieId) => {
    try {
        const instance = get_instance(instance_type.FILME)
        const resposta = instance.get(`${movieId}`);
    return resposta.data;
    } catch (error) {
        console.error("ERRO: ", error);
        return null;
    }
};

const get_movie_id = async (movieName) => {
    try {
        const instance = get_instance(instance_type.FILME)
        const resposta = instance.get(`${process.env.TMDB_BASE_URL}/search/movie`,
        {params: {
            api_access_token: process.env.API_ACCESS_TOKEN, query: title
        }})
        if (Response.data.results.length > 0){
            const movie = response.data.results[0];
            return movie.id;
        } else {
            console.log("Nenhum filme encontrado")
            return null;
        }
    } catch (error) {
        console.error('Erro ao buscar filme', error)
    }
}
