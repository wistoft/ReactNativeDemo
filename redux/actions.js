export function submitLogin(cprNumber, pass) {
  return {
    type: "SUBMIT_LOGIN",
    cprNumber,
    pass
  };
}
