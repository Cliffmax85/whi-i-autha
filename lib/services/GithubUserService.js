const GithubUser = require('../models/GithubUser');
const { exchangeCodeForToken, getGithubProfile } = require('../utils/github');

module.exports = class UserService {
    static async create(code) {
        
        const token = await exchangeCodeForToken(code);
console.log('////////', token);
        const profile = await getGithubProfile(token);
console.log('||||||||||', profile);
        let user = await GithubUser.findByUsername(profile.username);
        if (!user) {
            user = await GithubUser.insert(profile);
console.log('2434283746873246', user);

        }
        return user;

    }
}
