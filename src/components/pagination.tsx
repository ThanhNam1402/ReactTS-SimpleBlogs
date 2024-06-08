import { NavLink } from "react-router-dom";

function Pagination(props: any) {
  console.log(props);

  const { totalPage } = props;

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination    ">
        <li className="page-item disabled">
          <NavLink className="page-link" to="1" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </NavLink>
        </li>
        {Array(totalPage)
          .fill(0)
          .map((_, index) => {
            const page = index + 1;

            return (
              <li className="page-item" aria-current="page">
                <NavLink className="page-link" to={`/users?page=${page}`}>
                  {page}
                </NavLink>
              </li>
            );
          })}

        <li className="page-item">
          <NavLink className="page-link" to="1" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
