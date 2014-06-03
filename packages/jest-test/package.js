Package.describe({
  summary: "Jest + Meteor test package"
})

Package.on_use(function (api, where) {
  api.add_files('jest-test.js', ['client', 'server'])

  api.export && api.export('JestTest');
})
