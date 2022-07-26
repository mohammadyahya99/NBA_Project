const express = require("express");
const urllib = require("urllib");
const router = express.Router();
let teaminfo = {};
const teamToIDs = {
  lakers: "1610612747",
  warriors: "1610612744",
  heat: "1610612748",
  suns: "1610612756",
};

urllib.request(
  `http://data.nba.net/10s/prod/v1/2018/players.json`,
  function (err, data, response) {
    if (err) {
      throw err;
    }
    response.body;
    teaminfo = JSON.parse(data).league.standard;
  }
);

router.get("/teams/:teamName", (req, res) => {
  const result = req.params.teamName;
  let info = teaminfo

    .filter((team) => team.isActive && team.teamId === teamToIDs[result])
    .map((t) => {
      return {
        firstName: t.firstName,
        lastName: t.lastName,
      };
    });

  res.send(info);
});

module.exports = router;
