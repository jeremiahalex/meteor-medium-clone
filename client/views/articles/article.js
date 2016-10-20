Template.Article.onCreated(function () {
  this.editMode = new ReactiveVar(false)
  this.summaryView = new ReactiveVar(true)
})

Template.Article.helpers({
  articleId () {
    return this._id
  },
  summaryView () {
    return Template.instance().summaryView.get()
  },
  editMode () {
    return Template.instance().editMode.get()
  },
  isOwner () {
    return this.author === Meteor.userId()
  }
})

Template.Article.events({
  'click .read-more': function (event, templateInstance) {
    templateInstance.summaryView.set(false)
  },
  'click .edit-article': function (event, templateInstance) {
    templateInstance.editMode.set(true)
  },
  'click .delete-article': function () {
    Meteor.call('removeArticle', this._id)
  },
  'click .close': function (event, templateInstance) {
    templateInstance.editMode.set(false)
  },
  'submit #9xLSup8LwLyttRShJ': function (event, template) {
    Template.instance().editMode.set(false)
  }
})
