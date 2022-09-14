const Router = require("@koa/router");
const jwt = require("jsonwebtoken");
const db = require("../db/models");
const initModels = require("../db/models/init-models");
const models = initModels(db.sequelize);

const router = new Router();

router.get("/token", async (ctx, next) => {
  const token = jwt.sign({ foo: "bar" }, "privateKey", { algorithm: "HS256" });
  ctx.body = { token };
});

router.get("/validate/:token", async (ctx, next) => {
  const { token } = ctx.params;
  try {
    const decoded = jwt.verify(token, "privateKey");
    ctx.body = { payload: decoded };
  } catch (err) {
    console.error(err);
    ctx.body = { message: err.message };
  }
});

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
