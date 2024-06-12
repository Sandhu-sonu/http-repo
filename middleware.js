const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const userNmae = req.headers.username;
  const pass = req.headers.pass;
  const kid = req.query.kid;

  if (userNmae !== "sonu" || pass !== "pass") {
    res.status(400).json({ msg: "Somthing is up with your inputs" });
    return;
  }

  if (kid != 1 && kid != 2) {
    res.status(400).json({ msg: "Somthing is up with your kid" });
    return;
  }

  res.json({ msg: "Your kideny is fine" });
});

app.listen(3000);

// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   const userNmae = req.headers["username"];
//   const pass = req.headers["pass"];
//   const kid = parseInt(req.query.kid, 10);

//   if (userNmae !== "sonu" || pass !== "pass") {
//     res.status(400).json({ msg: "Something is up with your inputs" });
//     return;
//   }

//   if (kid !== 1 && kid !== 2) {
//     res.status(400).json({ msg: "Something is up with your kid" });
//     return;
//   }

//   res.json({ msg: "Your kidney is fine" });
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
