# Get Azure DevOps Repositories

Script that connects to Azure DevOps API using the client for Node.js and gets some repository information.

## Getting Started

```shell
# Edit with your configuration
cp .env.example .env

npm install
node index.js
```

## References

[Create a Personal Access Token](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops)

[Azure DevOps Client for Node.js](https://github.com/microsoft/azure-devops-node-api)

[Git Get Repository](https://docs.microsoft.com/en-us/rest/api/azure/devops/git/repositories/get?view=azure-devops-rest-4.1&viewFallbackFrom=azure-devops-rest-5.1#gitrepository)

[REST API Reference](https://docs.microsoft.com/en-us/rest/api/azure/devops/git/repositories/list?view=azure-devops-rest-5.1)