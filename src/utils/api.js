import data from "../constants/mocks/api.json";

export const API = {
  fetchMessages: userId => {
    return data;
  },
  submitMessage: message => {
    console.log(message)
    const req = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message)
    };
    return fetch("https://jsonplaceholder.typicode.com/posts", req)
      .then(res => res.json())
  }
};
