require('dotenv').config()
const azdev = require("azure-devops-node-api")

let orgUrl = process.env.AZURE_ORG_URL
let token = process.env.AZURE_PERSONAL_ACCESS_TOKEN
let project = process.env.AZURE_PROJECT_NAME

let authHandler = azdev.getPersonalAccessTokenHandler(token)
let connection = new azdev.WebApi(orgUrl, authHandler)

connection.getGitApi().then(git => {
    git.getRepositories(project).then(repositories => {
        repositories.forEach(repository => {
            let visibility = repository.project.visibility
            let visibilityText = visibility === 0 ? 'private' : 'public'
            let url = repository.remoteUrl
            console.log(`${visibilityText} ${url}`)
        })
    })
})