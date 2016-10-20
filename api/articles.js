Articles = new Mongo.Collection('articles')

if (Meteor.isServer) {
  Meteor.publish('articles', function () {
    return Articles.find({})
  })
}

Articles.allow({
  // who is allowed to insert a record - any one who is logged in for now
  insert: function (userId, doc) {
    return !!userId
  },
  update: function (userId, doc) {
    return userId === doc.author
  }
})
const ArticleSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 50,
    min: 5
  },
  body: {
    type: String,
    label: 'Body',
    max: 500,
    min: 100
  },
  summary: {
    type: String,
    label: 'Summary',
    optional: true,
    autoValue: function () {
      if (!description) return ''
      var description = this.siblingField('body')
        .value
      return description.substring(0, 100)
    },
    autoform: {
      type: 'hidden'
    }
  },
  author: {
    type: String,
    label: 'Author',
    autoValue: function () {
      return this.userId
    },
    autoform: {
      type: 'hidden'
    }
  },
  createdAt: {
    type: Date,
    label: 'Created',
    autoValue: function () {
      return new Date()
    },
    autoform: {
      type: 'hidden'
    }
  }
})

Meteor.methods({
  removeArticle: function (articleId) {
    // only the owner can remove
    const article = Articles.findOne(articleId)
    if (article.author !== this.userId) {
      throw new Meteor.Error('not-authorized')
    }
    Articles.remove(articleId)
  }
})

Articles.attachSchema(ArticleSchema)
