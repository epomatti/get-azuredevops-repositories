# Get Azure DevOps Repositories

![workflow](https://github.com/epomatti/get-azuredevops-repositories/actions/workflows/node.js.yml/badge.svg)

Script that connects to Azure DevOps API using the client for Node.js and gets some repository information.

This SDK can be useful for large migrations that require automated commands on a large number of repositories.

## Getting Started

```sh
# project setup
cp .env.example .env

# run it
yarn install
yarn start
```

### Steps to create .env file

You'll need to provide the following configuration:

- **AZURE_ORG_URL** - This is the URL pointing to your Organization root (e.g. https://dev.azure.com/yourorgname).
- **AZURE_PERSONAL_ACCESS_TOKEN** - Create a PAT in your Azure DevOps profile (Follow the [documentation](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops)).
- **AZURE_PROJECT_NAME** - This is the plain name of the project in Azure, also part of the URL of repositories.

### Output

The script returns the repository URLs. Example:

```
The script found 3 repositories:
private https://epomatti@dev.azure.com/epomatti/Test/_git/repo1
private https://epomatti@dev.azure.com/epomatti/Test/_git/repo2
private https://epomatti@dev.azure.com/epomatti/Test/_git/repo3
```

## References

[Create a Personal Access Token](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops)

[Azure DevOps Client for Node.js](https://github.com/microsoft/azure-devops-node-api)

[Git Get Repository](https://docs.microsoft.com/en-us/rest/api/azure/devops/git/repositories/get?view=azure-devops-rest-4.1&viewFallbackFrom=azure-devops-rest-5.1#gitrepository)

[REST API Reference](https://docs.microsoft.com/en-us/rest/api/azure/devops/git/repositories/list?view=azure-devops-rest-5.1)
