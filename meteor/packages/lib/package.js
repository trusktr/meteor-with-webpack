Package.describe({
    name: 'trusktr:lib',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
})

Npm.depends({
    'upper-case': "1.1.2",
})

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2')

    api.use([
        'rocket:module'
    ], 'client')

    api.addFiles('main.js', 'client')

    api.export('Lib', 'client')
})

Package.onTest(function(api) {
    api.use('tinytest')
    api.use('trusktr:lib')
    api.addFiles('lib-tests.js')
})