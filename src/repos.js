require('dotenv').config()
const azdev = require("azure-devops-node-api")

getRepositories = () => {
    let orgUrl = process.env.AZURE_ORG_URL
    let token = process.env.AZURE_PERSONAL_ACCESS_TOKEN
    let project = process.env.AZURE_PROJECT_NAME

    let authHandler = azdev.getPersonalAccessTokenHandler(token)
    let connection = new azdev.WebApi(orgUrl, authHandler)

    connection.getGitApi().then(git => {
        git.getRepositories(project).then(repositories => {
            if (repositories) {
                console.log(`The script found ${repositories.length} repositories:`)
                repositories.forEach(repository => {
                    let visibilityText = getVisibilityText(repository.project.visibility);
                    let url = repository.remoteUrl
                    console.log(`${visibilityText} ${url}`)
                })
            }
        })
    })
}

// API Reference returns text (only two values: private and public) but the Client is returning numbers
// So, there goes a switch statement...
getVisibilityText = (visibility) => {
    switch (visibility) {
        case 0:
            return 'private'
        case 2:
            return 'public'
        default:
            return 'unknown'
    }
}

module.exports = { getVisibilityText, getRepositories }