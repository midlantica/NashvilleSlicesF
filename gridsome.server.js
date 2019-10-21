module.exports = function (api) {
  api.loadSource(actions => {
    // const JournalPosts = actions.addCollection('JournalPost')
    const tags = actions.addCollection('Tag')

    // makes all ids in the `tags` field reference a `Tag`
    tags.addReference('tags', 'Tag')

    tags.addNode({
      id: '1',
      title: 'The author'
    })

    // JournalPost.addNode({
    //   id: '1',
    //   title: 'A post',
    //   date: '1',
    //   author: 'Drew Harper',
    //   excerpt: 'An example excerpt',
    //   tags: ['1']
    // })
  })
}