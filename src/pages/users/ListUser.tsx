import { DelUserService, getUsers } from "../../services/user.service";
import { useQueryParams } from "../../hooks/hook";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination";

function ListUser() {
  let param = useQueryParams();
  let page = Number(param.page) | 1;

  console.log(param);

  let { data } = useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsers(page, 10),
  });

  const handleDelUserQuery = useMutation({
    mutationFn: (id: number | string) => DelUserService(id),
    onSuccess: (_, id) => {
      console.log(id);
    },
  });

  const delUser = (id: number) => {
    handleDelUserQuery.mutate(id);
  };

  const totalUser = Number(data?.headers["x-total-count"] || 0);
  const totalPage = Math.ceil(totalUser / 10);
  console.log(totalUser, totalPage);

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
                    <button
                      type="button"
                      className="btn btn-primary ms-3"
                      onClick={() => delUser(user.id)}
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Pagination totalPage={totalPage} />
      </div>
    </div>
  );
}

export default ListUser;
