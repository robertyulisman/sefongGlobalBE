import axios from "axios";
import { phoneNumberFormatter } from "./formatter.js";

export const sentMessage = function (phoneNumber, message) {
  // sentMessage

  const data = JSON.stringify({
    api_key: "23SXFASZ4ITZ6F3Y",
    number_key: "65N1eEYD0cnSeAF7",
    phone_no: phoneNumberFormatter(phoneNumber),
    message: message,
  });

  const config = {
    method: "post",
    url: "https://api.watzap.id/v1/send_message",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const promise = new Promise((resolve, reject) => {
    axios(config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};
