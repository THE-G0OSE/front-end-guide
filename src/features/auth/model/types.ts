export type stage = 'login' | 'registration' | 'none'

export interface IAuthScheme {
    currentStage: stage
    token: string
}

export interface RegisterRequest {
    username: string;
    password: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface AuthResponse {
    token: string
}

export interface MeResponse {
    uid: number;
    username: string;
}