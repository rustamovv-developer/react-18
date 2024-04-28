import React from "react";
import { useGetUsersQuery, useDeleteUserMutation } from "../../context/userApi";
import img from "../../assets/user.png";

const Users = () => {
  let { data, isLoading } = useGetUsersQuery();
  let [delUser, { data: delData }] = useDeleteUserMutation();

  const handleDeleteUser = (id) => {
    delUser(id);
  };

  let users = data?.data?.map((el) => (
    <div key={el.id} className="card">
      <img src={img} alt="user" className="card__img" />
      <div className="card__exam">
        <h2 className="card__full">Fullname: </h2>
        <h2 className="card__title">
          {el.FirstName} {el.LastName}
        </h2>
      </div>
      <div className="card__exam">
        <h2 className="card__full">Role:</h2>
        <h3 className="card__h3">{el.role}</h3>
      </div>
      <div className="card__exam">
        <h2 className="card__full">Phone number:</h2>
        <p className="card__text">{el.phones}</p>
      </div>
      <h2 onClick={() => handleDeleteUser(el.id)} className="card__del">
        Delete
      </h2>
    </div>
  ));
  return (
    <div className="container">
      <div className="wrapper">{users}</div>
    </div>
  );
};

export default Users;
