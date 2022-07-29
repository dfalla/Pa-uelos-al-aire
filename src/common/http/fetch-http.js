const generic = (method, url, body) => {
    // codigo antes de la llamada de cada http
    return fetch(url, {
        method,
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then( ( res ) => res.json() )
    .then( (res) => {
        // codigo despues de la llamada de cada http
        return res;
    } )
    .catch( ( err ) => {
        // interceptar los errores
        return err;
    } )
}

const get = (url) => {
    return generic('GET', url);
}

const post = (url, body) => {
    return generic('POST', url, body);
}

const put = (url, body) => {
    return generic('POST', url, body);
}

const remove = (url) => {
    return generic('DELETE', url);
}

const fetchHttp = {
    get,
    post,
    put,
    delete: remove
}

export default fetchHttp;













