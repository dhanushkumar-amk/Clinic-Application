  const express = require("express");
  const { exec } = require("child_process");
  const app = express();
  app.get("/run", (req, res) => { exec("ls " + req.query.dir); });
  app.get("/user", (req, res) => { db.query("SELECT * FROM users WHERE id = " + req.query.id); });
  app.get("/eval", (req, res) => { eval(req.query.code); });
