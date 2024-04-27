import React, { useRef } from "react";
import { useGetUsersQuery, useCreateUserMutation } from "../../context/userApi";

const Users = () => {
  let { data, isLoading } = useGetUsersQuery();
  let users = data?.data?.map((el) => (
    <div key={el.id} className="card">
      <h2>{el.FirstName}</h2>
    </div>
  ));
  return (
    <div>
      <div className="wrapper">{users}</div>
    </div>
  );
};

export default Users;
