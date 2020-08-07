export interface AuthResponse {
    token: string,
    user: {
        _id: string,
        name: string,
        username: string,
        __v: number
    }
}
