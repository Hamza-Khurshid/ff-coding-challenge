export const callApi = async (path) => {
  const response = await fetch(process.env.REACT_APP_END_POINT + path, {
    method: "GET",
  });

  if (response.status === 500) {
    return "Server Exception";
  }
  if (response.status === 401) {
    return "unauthorized";
  }
  return await response.json();
};

export const callPostJsonApi = async (path, body) => {
  const response = await fetch(process.env.REACT_APP_END_POINT + path, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${localStorage.getItem("@token", "")}`,
      "Content-Type": "application/json",
    },
  });

  if (response.status === 401) {
    return "unauthorized";
  }
  if (response.status === 500) {
    return "Server Exception";
  }
  try {
    return await response.json();
  } catch (e) {
    return { done: "" };
  }
};
