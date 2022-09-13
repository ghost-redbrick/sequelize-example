const Router = require("@koa/router");
const db = require("../db/models");
const initModels = require("../db/models/init-models");
const models = initModels(db.sequelize);

const router = new Router();

router.get("/ip", async (ctx, next) => {
  ctx.body = { ip: ctx.request.ip };
});

router.get("/artists", async (ctx, next) => {
  const artists = await models.Artists.findAll();
  ctx.body = artists;
});

router.get("/albums", async (ctx, next) => {
  const albums = await models.Albums.findAll();
  ctx.body = albums;
});

module.exports = router;
