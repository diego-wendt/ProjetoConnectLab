import axios from "axios";
import { Configs } from "../utils/configs";

const StoreToken = (token) => {
    sessionStorage.setItem("token", token);
}

export const StoreUserData = (data) => {
    sessionStorage.setItem("allUserData",JSON.stringify((data)));
}

const StoreLoggedUserID = (userId) => {
    sessionStorage.setItem("logged_user_id", userId);
}

const StoreLocalidade = (cidade, estado) => {
    sessionStorage.setItem("cidade", cidade);
    sessionStorage.setItem("estado", estado);
}

export const GetToken = () => {
    return sessionStorage.getItem("token");
}

export const GetUserData = () => {
    return JSON.parse(sessionStorage.getItem("allUserData"));
}

export const GetCidade = () => {
    return sessionStorage.getItem("cidade");
}

export const GetEstado = () => {
    return sessionStorage.getItem("estado");
}

export const GetLoggedUserId = () => {
    return sessionStorage.getItem("logged_user_id");
}

export const RemoveUserData = () => {
   sessionStorage.removeItem("allUserData");
}

export const Authenticate = async ({email, password}) => {
    const {
        data: { token, user: { _id , email: userEmail , userAddress:{city,state}} },
    } = await axios.post(`${Configs.URL_API}/auth/login`, { email, password })
    StoreToken(token)
    StoreLoggedUserID(_id)
    StoreLocalidade(city,state)
    return userEmail
}

export const CreateUser = async (data) => {
    const retorno = await axios.post(`${Configs.URL_API}/auth/register`,  data ,{ headers: { "Content-Type": "application/json" }})
    return retorno
}

export const GetUsuario = async () => {
    const {data} = await axios.get(`${Configs.URL_API}/users/${GetLoggedUserId()}`, { headers: { authorization: `Bearer ${GetToken()}` }})
    console.log(data)
    return data
}

export const UpdateUser = async (data) => {
        const retorno = await axios.put(`${Configs.URL_API}/users/${GetLoggedUserId()}`,  data ,{ headers: {
        authorization: `Bearer ${GetToken()}`,
        'Content-Type': 'application/json'
    }} )
    return retorno
}





