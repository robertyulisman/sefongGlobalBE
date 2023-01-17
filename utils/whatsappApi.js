import axios from "axios";
import { phoneNumberFormatter } from "./formatter.js";

export const sentMessage = function (dataMessage) {
  // sentMessage

  // const data = JSON.stringify({
  //   api_key: "23SXFASZ4ITZ6F3Y",
  //   number_key: "ieaxkDPSh6jEgyQ3",
  //   phone_no: phoneNumberFormatter(phoneNumber),
  //   message: message,
  // });

  // const config = {
  //   method: "post",
  //   url: "https://api.watzap.id/v1/send_message",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: data,
  // };

  // const promise = new Promise((resolve, reject) => {
  //   axios(config)
  //     .then((res) => {
  //       resolve(res.data);
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     });
  // });

  // return promise;

  const headers = {
    apikey: "078c210805ae6d5dd8edcd12e78edd0038ae114e",
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
