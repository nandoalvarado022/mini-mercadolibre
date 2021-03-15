const { Router, json } = require("express");
const router = Router();
const fetch = require("node-fetch");
const base_url = "https://api.mercadolibre.com"

router.get("/api/items", async(req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { query } = req
  const q = query ? query.q : null
  console.log("QUERYV");
  console.log(q);
  const url = base_url + `/sites/MLA/search?q=${q}`;
  let data = await fetch(url);
  data = await data.json();
  // const categories = data.results.reduce((a, b) => )
  data = {
    author: {
      name: "Hernando",
      lastname: "Alvarado",
    },
    // categories,
    items: data.results.slice(0, 4)
  }
  res.send(data);
})

router.get("/api/items/:id", async(req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const id = req.params.id;
  let data = {}
  data.general = await fetch(`${base_url}/items/${id}`);
  data.general = await data.general.json();
  data.description = await fetch(`${base_url}/items/${id}/description`);
  data.description = await data.description.json();
  res.send(data)
})

module.exports = router;