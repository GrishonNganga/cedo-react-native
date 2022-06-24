import axios from 'axios';

const prod = '';
const dev = 'http://127.0.0.1:5000';

const api = axios.create({
    baseURL: dev,
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': dev,
    },
    withCredentials: true
})


export const registerUser = async (user) => {

    return await api.post('/signup', user).then((response) => response).catch((error) => {
        return error.response
    })
}

export const loginUser = async (user) => {

    return await api.post('/signin', user).then((response) => response).catch((error) => {
        return error.response
    })
}


export const refreshToken = async () => {

    return await api.get('/refresh_session').then((response) => response).catch((error) => {
        return error.response
    })
}

export const logoutUser = async () => {

    return await api.post('/logout').then((response) => response).catch((error) => {
        return error.response
    })
}

export const updateUserFields = async (params) => {

    return await api.post('/update_user', params).then((response) => response).catch((error) => {
        return error.response
    })
}
