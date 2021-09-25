import axios from "axios";

const createNewBin = async () => {
  console.log("creating bin");
  let data = await axios
    .get("http://localhost:3010/create")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};

const viewBin = async (binId) => {
  console.log("viewing bin");
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
