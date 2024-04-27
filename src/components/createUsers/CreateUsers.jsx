import React, { useRef } from "react";
import { useCreateUserMutation } from "../../context/userApi";

const CreateUsers = () => {
  let [createUser, { data: dataCreateUser }] = useCreateUserMutation();
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
    <>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        onSubmit={handleCreateUser}
        action=""
      >
        <input placeholder="firstName" ref={firstName} type="text" />
        <input placeholder="lastName" ref={lastName} type="text" />
        <input placeholder="phones1" ref={phones1} type="text" />
        <input placeholder="role" ref={role} type="text" />
        <input placeholder="userName" ref={userName} type="text" />
        <input placeholder="password" ref={password} type="text" />
        <button>Add</button>
      </form>
    </>
  );
};

export default CreateUsers;
