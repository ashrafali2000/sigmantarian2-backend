import User from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";
import Moralis from "moralis";
export const getUserData = async (req, res, next) => {
  // create userData in database from Moralis
  // setInterval(async () => {
  //   const PrivateKey = process.env.USER_PRIVATE_KEY;
  //   const MatrixAddress = process.env.MATRIX_ADDRESS;
  //   try {
  //     await Moralis.start({
  //       apiKey: PrivateKey,
  //     });
  //     const response = await Moralis.EvmApi.events.getContractEvents({
  //       chain: "0x38",
  //       topic: "NewUser(uint,uint,uint)",
  //       order: "ASC",
  //       address: MatrixAddress,
  //       abi: {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: false,
  //             name: "_user",
  //             type: "uint256",
  //             internal_type: "uint256",
  //           },
  //           {
  //             indexed: false,
  //             name: "_ref",
  //             type: "uint256",
  //             internal_type: "uint256",
  //           },
  //           {
  //             indexed: false,
  //             name: "_time",
  //             type: "uint256",
  //             internal_type: "uint256",
  //           },
  //         ],
  //         name: "NewUser",
  //         type: "event",
  //       },
  //     });
  //     const data = response.toJSON().result;
  //     data.map(async (i) => {
  //       const newUserData = new User({
  //         userId: i.data._user,
  //         refId: i.data._ref,
  //         time: i.data._time,
  //       });
  //       await newUserData.save();
  //     });
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }, 5000);
  // end
  try {
    const users = await User.find();
    res.status(200).json({
      users,
    });
  } catch (error) {
    return next(error);
  }
};
