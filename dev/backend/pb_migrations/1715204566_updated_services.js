/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("leyaz9unyjgnw8k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hzsrmbu5",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("leyaz9unyjgnw8k")

  // remove
  collection.schema.removeField("hzsrmbu5")

  return dao.saveCollection(collection)
})
