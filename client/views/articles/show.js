Template.ShowArticle.onCreated(function () {
  this.autorun(() => {
    var id = FlowRouter.getParam('id')
    console.log('article id', id)
    this.subscribe('article', id)
  })
})

Template.ShowArticle.helpers({
  article: () => {
    var id = FlowRouter.getParam('id')
    console.log('article',Articles.findOne({_id: id}))
    return Articles.findOne({_id: id})
  }
})
