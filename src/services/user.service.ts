

import http from "../api/http";

import { IListUser, IUser } from "../interface/user.interface";

export const getUsers = (_page : number | string, _limit : number | string) => {
    return http.get<IListUser>('/users', {
        params: {
            _page: _page,
            _per_page: _limit
         }
    })
}

export const AddUserService = (data : Omit<IUser, 'id'>) => {
    return http.post<IUser>('/users', data)
}

export const DelUserService = (id : number | string) => {
    return http.delete<{}>('/users/' + id)
}