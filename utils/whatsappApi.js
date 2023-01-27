import axios from "axios";
import { phoneNumberFormatter } from "./formatter.js";

export const sentMessage = function (dataMessage) {
  const headers = {
    apikey: process.env.API_KEY_WHATSAPP,
  };
  const promise = new Promise((resolve, reject) => {
    axios
      .post(`https://starsender.online/api/sendText`, dataMessage, {
        headers: headers,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};
