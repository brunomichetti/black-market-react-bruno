import client from "helpers/client";

const login = (email, password) =>
  client.post("dj-rest-auth/login/", JSON.stringify({ email, password }));

export const userServices = {
  login,
};
