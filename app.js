console.log("MY Test Bot on Telegram");

import axios from "axios";
import * as env from "dotenv";

env.config({ path: ".env" });

const BOT_KEY = process.env.BOT_KEY;
const BOT_API_URI = process.env.BOT_API_URI;

async function getMyBotDetails() {
  try {
    let result = await axios.get(`${BOT_API_URI}${BOT_KEY}/getMe`);
    console.log(result.data);
  } catch (err) {
    console.log({ err });
  }
}

getMyBotDetails();

async function getMessageDetails() {
  try {
    let result = await axios.get(`${BOT_API_URI}${BOT_KEY}/getUpdates`);
    // console.log(result.data);
    if (result.data && result.data.result) {
      let messages = result.data.result;
      messages.map((mes) => {
        console.log(mes);
        console.log(
          `from: ${mes.message.from.username}, message: ${mes.message.text}`
        );
      });
    }
  } catch (err) {
    console.log({ err });
  }
}

getMessageDetails();

async function doReply() {
  try {
    let result = await axios.post(`${BOT_API_URI}${BOT_KEY}/sendMessage`, {
      chat_id: 5891695423,
      //   reply_to_message_id: 2,
      text: "You gave me a sock, I am free now!",
    });

    console.log(result.data);
  } catch (err) {
    console.log({ err });
  }
}

doReply();
