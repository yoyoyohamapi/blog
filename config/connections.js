module.exports.connections = {
    mongo: {
        adapter: 'sails-mongo',
        host: 'localhost', // defaults to `localhost` if omitted
        port: 27017, // defaults to 27017 if omitted
        database: 'blog' // or omit if not relevant
    }
};