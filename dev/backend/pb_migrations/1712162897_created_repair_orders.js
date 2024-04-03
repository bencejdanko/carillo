/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sdv223xqq76vldw",
    "created": "2024-04-03 16:48:17.752Z",
    "updated": "2024-04-03 16:48:17.752Z",
    "name": "repair_orders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mbqffgvy",
        "name": "vin",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sdv223xqq76vldw");

  return dao.deleteCollection(collection);
})
