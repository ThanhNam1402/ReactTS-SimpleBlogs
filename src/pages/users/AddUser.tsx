import { useMutation } from "@tanstack/react-query";

import { IUser } from "../../interface/user.interface";
import { AddUserService } from "../../services/user.service";
import { useState } from "react";

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

  const { mutate } = useMutation({
    mutationFn: (data: FormDataUser) => {
      return AddUserService(data);
    },
  });

  const handleInputValue =
    (name: keyof FormDataUser) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUser((prev) => ({
        ...prev,
        [name]: event.target.value,
      }));
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(userForm);
    console.log(userForm);
  };

  return (
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
  );
}

export default AddUser;
