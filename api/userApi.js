import axios from 'axios';

// const basePath='user-api';
const basePath='';

function findUserList() {
    return axios.get(`${basePath}/user`).then(
        (response) => response.data
    );
}

function registerUser(user) {
    return axios.post(`${basePath}/user`, user).then(
        (response) => response.data
    );
}

export default {
    findUserList,
    registerUser
}