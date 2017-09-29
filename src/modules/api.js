import { v4 } from 'node-uuid'

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  items: [],
  actors: [],
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchItems = (filter) =>
  delay(300).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.items
      case 'zapas':
        return fakeDatabase.items.filter(t => t.type === 'zapas')
      case 'invest':
        return fakeDatabase.items.filter(t => t.type === 'invest')
      default:
        return fakeDatabase.items
      // throw new Error(`Unknown filter: ${filter}`)
    }
  })

export const saveItem = (itm) =>
  delay(300).then(() => {
    const newitem = Object.assign({})
    newitem.type = itm.type
    newitem.name = itm.name
    newitem.otchet = itm.otchet
    newitem.summa = parseFloat(itm.summa)
    newitem.otkl = parseFloat(itm.otkl)

    if (itm.id === '0') {
      newitem.id = v4()
      fakeDatabase.items.push(
        newitem
      )
    } else {
      newitem.id = itm.id
    }

    let item = fakeDatabase.items.find(t => t.id === newitem.id)
    if (item !== undefined) {
      item = Object.assign(item, newitem)
    }
    return item
  })

export const deleteItem = (id) =>
  delay(300).then(() => {
    fakeDatabase.items = fakeDatabase.items.filter(t => id !== t.id)
    return id
  })

export const fetchActors = () =>
  delay(300).then(() => fakeDatabase.actors)

export const saveActor = (act) =>
  delay(300).then(() => {
    const newactor = Object.assign({})
    newactor.action = act.action
    newactor.result = act.result
    newactor.sign = act.sign
    newactor.link = act.link

    if (act.id === '0') {
      newactor.id = v4()
      fakeDatabase.actors.push(newactor)
    } else {
      newactor.id = act.id
    }

    let actor = fakeDatabase.actors.find(t => t.id === newactor.id)
    if (actor !== undefined) {
      actor = Object.assign(actor, newactor)
    }
    return actor
  })

export const deleteActor = (id) =>
  delay(300).then(() => {
    fakeDatabase.actors = fakeDatabase.actors.filter(t => id !== t.id)
    return id
  })
