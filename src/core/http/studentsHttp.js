import Http from "../../common/http";

const endpoint = `http://localhost:3001/alumnos`;

const endpoint2 = 'https://reqres.in/api/users?per_page=12';


const getAll = () => {
    return Http.get(endpoint);
}

const getAll2 = () =>{
    return Http.get(endpoint2);
}

const getOne = (id) => {
    return Http.get(`${endpoint}/${id}`);
}

const create = (body) => {
    return Http.post(endpoint, body);
}

const update = (id, body) => {
    return Http.put(`${endpoint}/${id}`, body);
}

const remove = (id) => {
    return Http.delete(`${endpoint}/${id}`);
}

const StudentsHttp = {
    getAll,
    getAll2,
    getOne,
    create,
    update,
    delete: remove,
}

export default StudentsHttp;








