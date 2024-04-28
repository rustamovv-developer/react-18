import React, { useRef } from "react";
import { useCreateUserMutation } from "../../context/userApi";

const CreateUsers = () => {
  let [createUser, { data: dataCreateUser }] = useCreateUserMutation();
  console.log(dataCreateUser);
  let firstName = useRef();
  let lastName = useRef();
  let phones1 = useRef();
  let role = useRef();
  let userName = useRef();
  let password = useRef();
  const handleCreateUser = (e) => {
    e.preventDefault();
    let user = {
      FirstName: firstName.current.value,
      LastName: lastName.current.value,
      phones: [phones1.current.value],
      role: role.current.value,
      UserName: userName.current.value,
      password: password.current.value,
    };
    createUser(user);
  };
  return (
    <div div className="container">
      <form
        className="form"
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        onSubmit={handleCreateUser}
        action=""
      >
        <input
          className="form__input"
          placeholder="First Name"
          ref={firstName}
          type="text"
        />
        <input
          className="form__input"
          placeholder="Last Name"
          ref={lastName}
          type="text"
        />
        <input
          className="form__input"
          placeholder="Phone number"
          ref={phones1}
          type="text"
        />
        <input
          className="form__input"
          placeholder="Role user"
          ref={role}
          type="text"
        />
        <input
          className="form__input"
          placeholder="User Name"
          ref={userName}
          type="text"
        />
        <input
          className="form__input"
          placeholder="Password"
          ref={password}
          type="password"
        />
        <button className="form__btn">Add</button>
      </form>
    </div>
  );
};

export default CreateUsers;
