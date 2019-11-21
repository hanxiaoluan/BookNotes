//import instance from './service'
import {
    get
}
from './service'

/* export function getMenu(params, id) {
    return instance({
        url: 'news/before/20191121',
        methods: 'get',
        params: params
    })
} */
export const getMenu = (params, id) =>
    get('http://127.0.0.1:8010/4/news/before', params, id)

export const getHot = (params, id) => get('http://127.0.0.1:8010/3/news/hot', params, id);

export const getArticle = (params, id) => get('http://127.0.0.1:8010/4/news', params, id)