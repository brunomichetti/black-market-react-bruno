const loginHandleError = (error) => {
  const nonFieldError = error.response.data.non_field_errors || null;

  if (nonFieldError) {
    return nonFieldError;
  }

  return "Error with server. Try again later.";
};

export const userErrorHandlers = {
  loginHandleError,
};
