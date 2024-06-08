import { useMutation } from "@tanstack/react-query";

import { IUser } from "../../interface/user.interface";
import { AddUserService } from "../../services/user.service";
import { useMemo, useState } from "react";
import { isAxiosError } from "axios";

type FormDataUser = Omit<IUser, "id">;
const dataUser: FormDataUser = {
  avatar: "",
  email: "",
  first_name: "",
  last_name: "",
  country: "",
  gender: "",
  btc_address: "",
};

function AddUser() {
  const [userForm, setUser] = useState<FormDataUser>(dataUser);

  const { mutate, error, data, reset } = useMutation({
    mutationFn: (data: FormDataUser) => {
      return AddUserService(data);
    },
  });

  const errForm = useMemo(() => {
    if (isAxiosError(error) && error.response?.status === 422) {
      return error.response?.data.error;
    }
    return null;
  }, [error]);

  const handleInputValue =
    (name: keyof FormDataUser) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUser((prev) => ({
        ...prev,
        [name]: event.target.value,
      }));

      if (data || error) {
        reset();
      }
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(userForm, {
      onSuccess: () => {
        setUser(dataUser);
      },
    });
    console.log(userForm);
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              first_name
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              onChange={handleInputValue("first_name")}
              value={userForm.first_name}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              last_name
            </label>
            <input
              type="text"
              value={userForm.last_name}
              onChange={handleInputValue("last_name")}
              name="last_name"
              id="last_name"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={userForm.email}
              onChange={handleInputValue("email")}
              className="form-control"
            />
            <span className="text-warning">{errForm && errForm.email}</span>
          </div>

          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id=""
                checked={userForm.gender === "male"}
                onChange={handleInputValue("gender")}
                value="male"
              />
              <label className="form-check-label" htmlFor="">
                male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id=""
                checked={userForm.gender === "female"}
                onChange={handleInputValue("gender")}
                value="female"
              />
              <label className="form-check-label" htmlFor="">
                female
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Them
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
