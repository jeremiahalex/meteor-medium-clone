FlowRouter.route('/', {
  name: 'Articles.index',
  action() {
    BlazeLayout.render('MainLayout', {templateToRender: 'Articles'})
  }
})
FlowRouter.route('/:id', {
  name: 'Articles.show',
  action(params, queryParams) {
    let id = FlowRouter.getParam('id')
    BlazeLayout.render('MainLayout', {templateToRender: 'ShowArticle'})
  }
})
