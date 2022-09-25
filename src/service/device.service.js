import axios from "axios";
import { Configs } from "../utils/configs";
import { GetLoggedUserId, GetToken } from "./../service";


export const StoreDeviceId = (deviceID) => {
    sessionStorage.setItem("deviceID", deviceID);
}

export const GetStoredDeviceId = () => {
    return sessionStorage.getItem("deviceID");
}

export const RemoveStoredDeviceId = () => {
    return sessionStorage.removeItem("deviceID");
}


// funcionando na tela Devices
export const GetListAllDevices = async () => {
    return axios.get(`${Configs.URL_API}/devices/`, { headers: { authorization: `Bearer ${GetToken()}` }})
}

export const AddDevice = async (data) => {
    return axios.post(`${Configs.URL_API}/userDevices`, data ,{ headers: { authorization: `Bearer ${GetToken()}`, "Content-Type": "application/json" }})
}

export const DeleteDevice = async (idDevice) => {
    return axios.delete(`${Configs.URL_API}/userDevices/${idDevice}`, { headers: { authorization: `Bearer ${GetToken()}`,"Content-Type": "application/json"} })
}

export const UpdateDevice = async (boo) => {
       return axios.put(`${Configs.URL_API}/userDevices/${GetStoredDeviceId()}`, {is_on:boo},{ headers: { authorization: `Bearer ${GetToken()}`,"Content-Type": "application/json"} })
}

// funcionando na tela home
export const GetLocals = async () => {
    return axios.get(`${Configs.URL_API}/locals/`, { headers: { authorization: `Bearer ${GetToken()}` }})
}

export const GetDevicesUser = async () => {
    return axios.get(`${Configs.URL_API}/userDevices/user/${GetLoggedUserId()}`, { headers: { authorization: `Bearer ${GetToken()}` }})
}

// export const GetInfoDevice = async () => {
//     const data = await axios.get(`${Configs.URL_API}/userDevices/${GetStoredDeviceId()}`, {
//         headers: {
//             authorization: `Bearer ${GetToken()}`,
//             'Content-Type': 'application/json'
//         }} )
//     GetStoredDeviceId(data.data._id)
//     
//     return data 
// }