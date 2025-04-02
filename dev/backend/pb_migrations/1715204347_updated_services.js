/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("leyaz9unyjgnw8k")

  // remove
  collection.schema.removeField("7dxr6zks")

  // remove
  collection.schema.removeField("uxmg3tgc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tnsd7m6f",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "f2fb5auumlwrbg6",
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

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("tnsd7m6f")

  return dao.saveCollection(collection)
})
