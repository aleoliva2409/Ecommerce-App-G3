import React, { useEffect } from "react";
import UserCard from "./userCard/userCard";
import { getAllUsers } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";

export default function Promote() {

  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.allUsers);
  const log = useSelector((store) => store.users.loging);

useEffect(() => {
    dispatch(getAllUsers());
}, [dispatch,log])

  let cosas = users?.map((e) => (
    <UserCard
      key={e.id}
      id={e.id}
      userName={e.userName}
      email={e.email}
      isAdmin={e.isadmin}
      blocked={e.blocked}
      resetPw={e.passwordReset}
    />
  ));
  return (
      <Container>
          {cosas}
      </Container>
  )
}
