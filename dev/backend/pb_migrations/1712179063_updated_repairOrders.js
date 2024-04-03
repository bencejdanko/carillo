/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sdv223xqq76vldw")

  // remove
  collection.schema.removeField("mbqffgvy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jnwzn0co",
    "name": "ro_number",
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
    "id": "nqmcaq6t",
    "name": "customer",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v5lookmv",
    "name": "serviceAdvisor",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9gxaf1oz",
    "name": "promised",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ufbufw0g",
    "name": "status",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sdv223xqq76vldw")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("jnwzn0co")

  // remove
  collection.schema.removeField("nqmcaq6t")

  // remove
  collection.schema.removeField("v5lookmv")

  // remove
  collection.schema.removeField("9gxaf1oz")

  // remove
  collection.schema.removeField("ufbufw0g")

  return dao.saveCollection(collection)
})
