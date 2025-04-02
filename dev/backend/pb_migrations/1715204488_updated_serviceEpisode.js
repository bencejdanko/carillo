/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ua12ymd1amq33wb")

  // remove
  collection.schema.removeField("r2okcke9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a3kguxb9",
    "name": "service",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "leyaz9unyjgnw8k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ua12ymd1amq33wb")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("a3kguxb9")

  return dao.saveCollection(collection)
})
