import ZKLib from "qr-zklib";
import Karyawan from "../models/Karyawan.js";

const config = {
  ip: "192.168.100.201",
  port: 4370,
};

export const getAttendance = async (req, res) => {
  const handleAttendance = async () => {
    let zkInstance = new ZKLib(config.ip, config.port, 5200, 5000);

    try {
      // Create socket to machine
      await zkInstance.createSocket();

      // Get general info like logCapacity, user counts, logs count
      // It's really useful to check the status of device

      console.log(await zkInstance.getInfo());
    } catch (e) {
      console.log(e);
      if (e.code === "EADDRINUSE") {
      }
    }

    // Get users in machine
    // const users = await zkInstance.getUsers();
    // console.log("get all user", users);

    // res.status(200).json(users);

    await zkInstance.getRealTimeLogs((data) => {
      // do something when some checkin
      console.log("realtime logs", data);
    });

    // get attendance data
    const logs = await zkInstance
      .getAttendances((percent, total) => {
        console.log("percent", percent);
        console.log("total!", total);
      })
      .catch((err) => console.log("err get attendance", err));
    console.log(logs);
    res.status(200).json({ data: logs, dataLength: logs.data.length });

    // Create new user: setUser(uid, userid, name, password, role = 0, cardno = 0)
    // await zkInstance.setUser(12, '9', 'testing', '111', 0, 0);

    // Get all logs in the machine
    // Currently, there is no filter to take data, it just takes all !!

    // You can also read realtime log by getRealTimelogs function

    // Get the current Time in the machine

    // await zkInstance
    //   .getTime()
    //   .then((z) => {
    //     console.log("get time to string", z);
    //   })
    //   .catch((err) => console.log("err get time", err));

    // Serial number

    const sr = await zkInstance.getSerialNumber();
    console.log("serial number", sr);

    // Firmware Version
    const fw = await zkInstance.getFirmware();
    console.log("get firmware", fw);

    // PIN of the device
    const pi = await zkInstance.getPIN();
    console.log("get pin", pi);

    // Check Face functionality (Yes if ON, No if OFF)
    const fo = await zkInstance.getFaceOn();
    console.log("get face on", fo);

    // SSR (Self-Service-Recorder)
    const ssr = await zkInstance.getSSR();
    console.log("get ssr", ssr);

    // Device Version
    const dv = await zkInstance.getDeviceVersion();
    console.log("device version", dv);

    // Device Name
    const n = await zkInstance.getDeviceName();
    console.log("device name", n);

    // Platform Version
    const p = await zkInstance.getPlatform();
    console.log("platform", p);

    // OS Version
    const o = await zkInstance.getOS();
    console.log("get os", o);

    // WorkCode of the machine
    const wc = await zkInstance.getWorkCode();
    console.log("get work code", wc);

    // Get Attendance size

    // const s = await zkInstance.getAttendanceSize();
    // console.log("get attendace size", s);

    // Delete the data in machine
    // Note: You should do this when there are too many data in the machine,
    // this issue can slow down machine.

    // zkInstance.clearAttendanceLog();

    // Disconnect the machine ( don't do this when you need realtime update :)))
    // await zkInstance.disconnect();
  };

  handleAttendance(); // in the end we execute the function
};

export const getRealtimeAttendance = async (req, res) => {
  let zkInstance = new ZKLib(config.ip, config.port, 5200, 5000);
  try {
    // Create socket to machine
    await zkInstance.createSocket();

    // Get general info like logCapacity, user counts, logs count
    // It's really useful to check the status of device
    console.log(await zkInstance.getInfo());
  } catch (e) {
    console.log(e);
    if (e.code === "EADDRINUSE") {
    }
  }

  const data = await zkInstance.getRealTimeLogs();

  if (data) {
    console.log("data", data);
  }

  // res.status(200).json({ message: "okeeee xx" });
};

export const getAllAttendanceData = async (req, res) => {
  let zkInstance = new ZKLib(config.ip, config.port, 5200, 5000);
  try {
    // Create socket to machine
    await zkInstance.createSocket();

    // get attendance data
    const logs = await zkInstance.getAttendances(function (err, result) {
      // console.log("err", err);
      // console.log("Very cool!", result);
    });
    console.log(logs.data[0]);

    // Get general info like logCapacity, user counts, logs count
    // It's really useful to check the status of device
  } catch (e) {
    console.log(e);
    if (e.code === "EADDRINUSE") {
    }
  }
};
