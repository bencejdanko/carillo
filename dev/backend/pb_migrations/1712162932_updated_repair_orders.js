/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sdv223xqq76vldw")

  collection.name = "repairOrders"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sdv223xqq76vldw")

  collection.name = "repair_orders"

  return dao.saveCollection(collection)
})
