Template.Articles.onCreated(function () {
  this.autorun(() => {
    this.subscribe('articles')
  })
})

Template.Articles.helpers({
  articles: () => {
    // Show newest articles at the top
    return Articles.find({}, { sort: { createdAt: -1 } });
  }
})

Template.Articles.events({
  'click .new-article': function (event, template) {
    Session.set('addMode', true)
  }
})
