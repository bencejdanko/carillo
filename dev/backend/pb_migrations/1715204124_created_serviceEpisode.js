/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ua12ymd1amq33wb",
    "created": "2024-05-08 21:35:24.293Z",
    "updated": "2024-05-08 21:35:24.293Z",
    "name": "serviceEpisode",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r2okcke9",
        "name": "repairOrder",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "sdv223xqq76vldw",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "gjmvonar",
        "name": "clockIn",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "1ttzm5o4",
        "name": "clockOut",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("ua12ymd1amq33wb");

  return dao.deleteCollection(collection);
})
