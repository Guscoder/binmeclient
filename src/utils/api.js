import axios from "axios";

const createNewBin = async () => {
  let data = await axios
    .get("http://localhost:3010/create")
    .then((response) => {
      return response.data;
    });
  return data;
};

const viewBin = async (binId) => {
  let binRequests = await axios
    .get(`http://localhost:3010/inspect/${binId}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  return binRequests;
};

export { createNewBin, viewBin };
