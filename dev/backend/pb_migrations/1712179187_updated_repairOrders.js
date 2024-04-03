/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sdv223xqq76vldw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "du1iteb3",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "leyaz9unyjgnw8k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sdv223xqq76vldw")

  // remove
  collection.schema.removeField("du1iteb3")

  return dao.saveCollection(collection)
})
