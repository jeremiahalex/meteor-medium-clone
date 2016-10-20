Template.Articles.onCreated(function () {
  this.autorun(() => {
    this.subscribe('articles')
  })
})

Template.Articles.helpers({
  featuredArticles: () => {
    // Show newest articles at the top
    return Articles.find({featured: true}, { sort: { createdAt: -1 } });
  },
  articles: () => {
    // Show newest articles at the top
    return Articles.find({}, { sort: { createdAt: -1 } });
  },
  authorName: () => {
    var names = ['Jeremiah Alexander', 'Kuan Yu Phua', 'Luke Lim', 'Yvonne Chia', 'Tek Yong Lim', 'Victor Seah']
    var index = Math.floor(Math.random() * names.length)
    return names[index]
  }
})

Template.Articles.events({
  'click .new-article': function (event, template) {
    Session.set('addMode', true)
  }
})
