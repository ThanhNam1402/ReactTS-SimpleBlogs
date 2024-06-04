

import http from "../api/http";

import { IListUser } from "../interface/user.interface";

export const getUsers = (_page : number | string, _limit : number | string) => {
    return http.get<IListUser>('/users', {
        params: {
            _page: _page,
            _limit: _limit
         }
    })
}