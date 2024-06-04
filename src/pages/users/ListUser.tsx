import { getUsers } from "../../services/user.service";
import { useQueryParams } from "../../hooks/hook";
import { useQuery } from "@tanstack/react-query";

function ListUser() {
  let param = useQueryParams();
  let page = Number(param.page) | 1;

  let { data } = useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsers(page, 10),
  });

  return (
    <div className="card">
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
