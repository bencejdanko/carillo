/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "leyaz9unyjgnw8k",
    "created": "2024-04-03 21:19:15.053Z",
    "updated": "2024-04-03 21:19:15.053Z",
    "name": "services",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7dxr6zks",
        "name": "serviceName",
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
        "id": "uxmg3tgc",
        "name": "description",
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
  const collection = dao.findCollectionByNameOrId("leyaz9unyjgnw8k");

  return dao.deleteCollection(collection);
})
