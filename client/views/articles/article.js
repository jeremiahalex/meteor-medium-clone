Template.Article.onCreated(function () {
  this.editMode = new ReactiveVar(false)
  this.summaryView = new ReactiveVar(true)
})

Template.Article.helpers({
  articleId() {
    return this._id
  },
  summaryView() {
    return Template.instance().summaryView.get()
  },
  editMode() {
    return Template.instance().editMode.get()
  },
  isOwner() {
    return this.author === Meteor.userId()
  },
  randomImage() {
    var images = ['https://cdn-images-1.medium.com/fit/t/800/240/1*UDlNMt246MU0xby_XXqguw.jpeg',
      'https://cdn-images-1.medium.com/fit/t/800/240/1*XyWRLiuyXWbLquDcJXvpMQ.jpeg',
      'https://cdn-images-1.medium.com/focal/800/240/28/46/1*138NYR7mJTvQOWPGoyLg-g.jpeg',
      'https://cdn-images-1.medium.com/focal/800/240/36/9/1*AURMiMzWP22gUsi9sGNcPg.jpeg',
      'https://cdn-images-1.medium.com/fit/t/800/240/0*d5CVxiz8p1PizsgL.jpg',
      'https://cdn-images-1.medium.com/fit/t/800/240/1*722H7nWsDQ0D-ReOKoRytQ.jpeg'
    ]
    var index = Math.floor(Math.random() * images.length)
    return images[index]
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
  'submit form': function (event, template) {
    Template.instance().editMode.set(false)
  }
})
