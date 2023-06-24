import Express from "express";
import path from "path";
import { fileURLToPath } from "url";
import BodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Server = new Express();

Server.use(BodyParser.json());
Server.use(BodyParser.urlencoded({ extended: false }));

Server.get("/", (req, res) => {
  const emailaddress = req.query.emailaddress;
  const options = {
    root: path.join(__dirname),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };
  const fileName = emailaddress + ".pdf";
  res.sendFile(fileName, options, (err) => {
    if (err) {
      console.log(err);
      res.status(404).send();
    } else {
      console.log("Sent:", fileName);
    }
  });
});

Server.listen(80, () => {
  console.log("Listening at port 80");
});