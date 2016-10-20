Meteor.publish('articles', function () {
  return Articles.find({})
})

Meteor.publish('article', function (id) {
  check(id, String)
  return Articles.find({_id: id})
})
