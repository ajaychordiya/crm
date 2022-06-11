import axios from "axios";

const url =
  "https://7304f1f8-adb5-4ee1-8d72-fbbc564499fc-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/ticket/collections/task";

const token = process.env.REACT_APP_ASTRA_TOKEN;

export const postData = async (formData) => {
  console.log("token", token);

  const options = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
      "Content-Type": "application/json",
    },
    data: formData,
  };

  try {
    const response = await axios(url, options);
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const getTickets = async () => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Cassandra-Token": token,
    },
  };
  try {
    const response = await axios(`${url}?page-size=20`, options);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return { message: err };
  }
};

export const getTicket = async (id) => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Cassandra-Token": token,
    },
  };
  try {
    const response = await axios(`${url}/${id}`, options);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return { message: err };
  }
};

export const updateTicket = async (id, data) => {
  const options = {
    method: "PUT",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
    },
    data,
  };

  try {
    const response = await axios(`${url}/${id}`, options);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return { message: err };
  }
};

export const deleteTicket = async (id) => {
  const options = {
    method: "DELETE",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
    },
  };

  try {
    const response = await axios(`${url}/${id}`, options);
    console.log(response);
    const success = response;
    if (success) window.location.reload();
  } catch (err) {
    console.log(err);
  }
};
