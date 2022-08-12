import client from "helpers/client";

const login = (email, password) =>
  client.post("dj-rest-auth/login/", JSON.stringify({ email, password }));

const logout = () => {
  const refreshToken = localStorage.getItem("refreshItem");
  return client.post(
    "dj-rest-auth/logout/",
    JSON.stringify({ refresh: refreshToken })
  );
};

export const userServices = {
  login,
  logout,
};
