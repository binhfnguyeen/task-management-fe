import { taskApi } from "./axios";

export type FormDataSignUp = {
    mail: string,
    firstName: string,
    lastName: string,
    password: string
}

export type FormDataSignIn = {
    mail: string,
    password: string
}

export interface SignInResponse {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    refresh_expires_in: number;
    token_type: string;
}

export const fetchSignUp = async (data: FormDataSignUp) => {
    const res = await taskApi.post("/users/signup", data);
    return res.data;
}

export const fetchSignIn = async (data: FormDataSignIn) => {
    const res = await taskApi.post("/users/login", data);
    return res.data;
}