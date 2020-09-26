import path from 'path'

// module.exports = {
//   alias: {
//     // alias a path to a fs directory
//     // the key must start and end with a slash
//     '@/': path.join(__dirname, './src/'),
//   },
// }

const aliasRegx = /^@\//

const myResolver = {
  alias(id) {
    if (id.match(aliasRegx)) {
      return path.resolve('/src', id.replace(aliasRegx, ''))
    }
  },
}

module.exports = {
  resolvers: [myResolver],
}
