import Axios from "axios";
import {TMDB_BASE_URL, API_ACCESS_TOKEN} from '@env';

export enum instance_type {
    FILME = 'filme',
    MANGA = 'manga',
    JOGO = 'jogo',
    ANIME = 'anime'
}

const instance = Axios.create({
    timeout: 30000
})

const instance_object = {
    [instance_type.ANIME]: {
        Headers: {
            
        }, 
        baseURL: ''
    },
    [instance_type.JOGO]: {
        Headers: {
            
        }, 
        baseURL: ''
    },
    [instance_type.MANGA]: {
        Headers: {
            
        }, 
        baseURL: ''
    },
    [instance_type.FILME]: {
        Headers: {
            
        }, 
        baseURL: `${process.env.TMDB_BASE_URL}`,
        params: {api_access_token: process.env.API_ACCESS_TOKEN}
    }
} 
const get_default_headers = () => {
    return {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*',
        'Authorization': `${process.env.API_ACCESS_TOKEN}` 
    }
}

export const get_instance = (type) => {
    instance.defaults.headers = {...get_default_headers() , ...instance_object[type].Headers};
    instance.defaults.baseURL = instance_object[type].baseURL;
    instance.defaults.params = instance_object[type]?.params;

    return instance
}
