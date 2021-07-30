import jwt from "jsonwebtoken"

const useToken = () => {
  const token = localStorage.getItem("jwt");
  if(!!token) {
    const { id, email, isadmin } = jwt.decode(token);
    return {
      id,
      email,
      isadmin,
    }
  } else {
    return {}
  }


}

export {
  useToken
}
