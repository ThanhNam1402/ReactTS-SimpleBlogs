import { getUsers } from "../../services/user.service";
import { useQueryParams } from "../../hooks/hook";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function ListUser() {
  let param = useQueryParams();
  let page = Number(param.page) | 1;

  let { data, isLoading } = useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsers(page, 10),
    staleTime: 60 * 1000,
    // cacheTime : thoi gian data dc luu
    gcTime: 10 * 1000,
    // giu lai data cu != undefined
    placeholderData: keepPreviousData,
  });

  console.log(isLoading);

  return (
    <div className="card">
      <div className="p-3">
        <Link to="/users/add" className="btn btn-primary">
          + Add user
        </Link>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">avatar</th>
              <th scope="col">Last</th>
              <th scope="col">email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{user.id}</th>
                  <td>
                    <img src={user.avatar} alt="s" />
                  </td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button type="button" className="btn btn-primary">
                      Detail
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListUser;
