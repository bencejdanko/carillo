/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "f2fb5auumlwrbg6",
    "created": "2024-05-08 21:38:28.266Z",
    "updated": "2024-05-08 21:38:28.266Z",
    "name": "serviceType",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xnt91t90",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fn9fjatn",
        "name": "cost",
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
  const collection = dao.findCollectionByNameOrId("f2fb5auumlwrbg6");

  return dao.deleteCollection(collection);
})
