import React from 'react'

export const defUser = {
  email: "",
  password: "",
  isLoggedIn: false
}

function logOut() {
  console.log("Default log out");
}

export const AppContext = React.createContext({ defUser, logOut});
