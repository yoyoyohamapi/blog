/**
 * Policy Mappings
 */
module.exports.policies = {

    '*': true,

    'PostController': {
        '*': 'isAuthenticated'
    }

};
