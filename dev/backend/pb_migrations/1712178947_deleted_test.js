/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("t3keedzd89f4sw5");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "t3keedzd89f4sw5",
    "created": "2024-03-28 17:58:49.307Z",
    "updated": "2024-03-28 17:58:49.307Z",
    "name": "test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3ahdeero",
        "name": "testing",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
