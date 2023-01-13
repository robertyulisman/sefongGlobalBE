// Import model Product
import Whatsapp from "../models/Whatsapp.js";
import cron from "node-cron";
import { TableHints } from "sequelize";
import { sentMessage } from "../utils/whatsappApi.js";

// Get semua product
export const getWhatsapp = async (req, res) => {
  const task = cron.schedule(
    "*/5 * * * * *",
    async () => {
      console.log("stopped task");
      try {
        const data = await Whatsapp.findAll({
          where: {
            status: "N",
          },
        });

        console.log("data.length", data.length);

        if (data.length !== 0) {
          task.stop();

          await data.reduce(async (acc, whatsapp) => {
            console.log("whatsapp xxx", whatsapp.status);

            await sentMessage("6281271076751", whatsapp.pesan);
            await Whatsapp.update(
              { status: "N" },
              {
                where: {
                  status: "N",
                },
              }
            );
            await acc;
          }, Promise.resolve());

          console.log("selesai");
          task.start();
        }
      } catch (err) {
        console.log(err);
      }
    },
    {
      scheduled: false,
    }
  );

  task.start();
};
