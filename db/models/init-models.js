var DataTypes = require("sequelize").DataTypes;
var _Albums = require("./albums");
var _Artists = require("./artists");
var _Customers = require("./customers");
var _Employees = require("./employees");
var _Genres = require("./genres");
var _InvoiceItems = require("./invoice_items");
var _Invoices = require("./invoices");
var _MediaTypes = require("./media_types");
var _PlaylistTrack = require("./playlist_track");
var _Playlists = require("./playlists");
var _Tracks = require("./tracks");

function initModels(sequelize) {
  var Albums = _Albums(sequelize, DataTypes);
  var Artists = _Artists(sequelize, DataTypes);
  var Customers = _Customers(sequelize, DataTypes);
  var Employees = _Employees(sequelize, DataTypes);
  var Genres = _Genres(sequelize, DataTypes);
  var InvoiceItems = _InvoiceItems(sequelize, DataTypes);
  var Invoices = _Invoices(sequelize, DataTypes);
  var MediaTypes = _MediaTypes(sequelize, DataTypes);
  var PlaylistTrack = _PlaylistTrack(sequelize, DataTypes);
  var Playlists = _Playlists(sequelize, DataTypes);
  var Tracks = _Tracks(sequelize, DataTypes);

  Tracks.belongsTo(Albums, { as: "album", foreignKey: "albumId" });
  Albums.hasMany(Tracks, { as: "tracks", foreignKey: "albumId" });
  Albums.belongsTo(Artists, { as: "artist", foreignKey: "artistId" });
  Artists.hasMany(Albums, { as: "albums", foreignKey: "artistId" });
  Invoices.belongsTo(Customers, { as: "customer", foreignKey: "customerId" });
  Customers.hasMany(Invoices, { as: "invoices", foreignKey: "customerId" });
  Customers.belongsTo(Employees, {
    as: "supportRep",
    foreignKey: "supportRepId",
  });
  Employees.hasMany(Customers, { as: "customers", foreignKey: "supportRepId" });
  Employees.belongsTo(Employees, {
    as: "reportsToEmployee",
    foreignKey: "reportsTo",
  });
  Employees.hasMany(Employees, { as: "employees", foreignKey: "reportsTo" });
  Tracks.belongsTo(Genres, { as: "genre", foreignKey: "genreId" });
  Genres.hasMany(Tracks, { as: "tracks", foreignKey: "genreId" });
  InvoiceItems.belongsTo(Invoices, { as: "invoice", foreignKey: "invoiceId" });
  Invoices.hasMany(InvoiceItems, {
    as: "invoiceItems",
    foreignKey: "invoiceId",
  });
  Tracks.belongsTo(MediaTypes, { as: "mediaType", foreignKey: "mediaTypeId" });
  MediaTypes.hasMany(Tracks, { as: "tracks", foreignKey: "mediaTypeId" });
  PlaylistTrack.belongsTo(Playlists, {
    as: "playlist",
    foreignKey: "playlistId",
  });
  Playlists.hasMany(PlaylistTrack, {
    as: "playlistTracks",
    foreignKey: "playlistId",
  });
  InvoiceItems.belongsTo(Tracks, { as: "track", foreignKey: "trackId" });
  Tracks.hasMany(InvoiceItems, { as: "invoiceItems", foreignKey: "trackId" });
  PlaylistTrack.belongsTo(Tracks, { as: "track", foreignKey: "trackId" });
  Tracks.hasMany(PlaylistTrack, {
    as: "playlistTracks",
    foreignKey: "trackId",
  });

  return {
    Albums,
    Artists,
    Customers,
    Employees,
    Genres,
    InvoiceItems,
    Invoices,
    MediaTypes,
    PlaylistTrack,
    Playlists,
    Tracks,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
