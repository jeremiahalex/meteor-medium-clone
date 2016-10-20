// import { Tasks } from '../api/tasks.js'
Template.NewArticle.events({
  'click .close': function (event, template) {
    Session.set('addMode', false)
  },
  'submit #insertArticleForm': function (event, template) {
    Session.set('addMode', false)
  }
})
