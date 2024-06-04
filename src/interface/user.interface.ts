export interface IUser {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
    country: string,
    avatar: string
    btc_address: string
}

export type IListUser = Pick<IUser, 'id' | 'email' | 'avatar' | 'last_name'>[]
