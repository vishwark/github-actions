# GitHub Actions Learning Project

A comprehensive Vite+React project designed to teach GitHub Actions through practical examples and real-world workflows.

## 🎯 Project Overview

This project contains a React application that displays environment information and 12 comprehensive GitHub Actions workflow files that demonstrate all key concepts from basic to advanced CI/CD patterns.

## 📁 Project Structure

```
github-actions/
├── src/
│   ├── App.jsx              # Main component showing environment info
│   ├── App.css              # Styling for the app
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/           # GitHub Actions workflow files
│       ├── 01-core-concepts.yml
│       ├── 02-workflow-syntax.yml
│       ├── 03-events-triggers.yml
│       ├── 04-runners.yml
│       ├── 05-actions-marketplace.yml
│       ├── 06-matrix-builds.yml
│       ├── 07-secrets-variables.yml
│       ├── 08-caching-artifacts.yml
│       ├── 09-reusable-workflows.yml
│       ├── 10-security-permissions.yml
│       ├── 11-testing-debugging.yml
│       └── 12-advanced-cicd.yml
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd github-actions
npm install
```

### Running the Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

## 📚 GitHub Actions Workflows

### 1. **01-core-concepts.yml** - Core Concepts
Learn the fundamental building blocks of GitHub Actions:
- Workflows, jobs, steps, actions, runners
- Basic workflow structure
- Job dependencies with `needs`
- Using marketplace actions

**Key Concepts:**
- `on:` - Workflow triggers
- `jobs:` - Define work to do
- `steps:` - Individual tasks
- `uses:` - Run an action
- `run:` - Execute shell commands

---

### 2. **02-workflow-syntax.yml** - Workflow Syntax & YAML Basics
Master YAML syntax and common workflow keywords:
- Environment variables at different levels
- Conditional execution with `if`
- Context variables
- Step outputs and job dependencies

**Key Concepts:**
- `env:` - Environment variables
- `if:` - Conditional execution
- `needs:` - Job dependencies
- `id:` - Step identifiers
- Context variables: `${{ github.* }}`

---

### 3. **03-events-triggers.yml** - Events and Triggers
Understand different ways to trigger workflows:
- Push events with branch/path filtering
- Pull request events
- Manual triggers (workflow_dispatch)
- Scheduled triggers (cron)
- Repository dispatch
- Workflow run triggers

**Key Concepts:**
- `push:` - Code push trigger
- `pull_request:` - PR trigger
- `workflow_dispatch:` - Manual trigger
- `schedule:` - Cron-based scheduling
- `repository_dispatch:` - External trigger
- `workflow_run:` - Trigger on other workflow

---

### 4. **04-runners.yml** - Runners
Explore different runner types and configurations:
- GitHub-hosted runners (Ubuntu, Windows, macOS)
- Specific runner versions
- Self-hosted runners
- Container jobs
- Services (databases, etc.)

**Key Concepts:**
- `runs-on:` - Runner selection
- `container:` - Docker container
- `services:` - Additional containers
- Runner context variables

---

### 5. **05-actions-marketplace.yml** - Actions & Marketplace
Learn about using and creating actions:
- Official GitHub actions
- Marketplace actions
- Action inputs and outputs
- Composite actions
- Job outputs

**Key Concepts:**
- `uses:` - Run an action
- `with:` - Pass inputs to actions
- `outputs:` - Define job outputs
- Action versioning

---

### 6. **06-matrix-builds.yml** - Matrix Builds & Strategies
Master matrix strategies for testing multiple configurations:
- Basic matrix strategy
- Multi-dimensional matrices
- Include and exclude patterns
- fail-fast and max-parallel options
- Matrix with environment variables

**Key Concepts:**
- `strategy.matrix:` - Define matrix
- `include:` - Add specific combinations
- `exclude:` - Remove combinations
- `fail-fast:` - Stop on first failure
- `max-parallel:` - Limit concurrent jobs

---

### 7. **07-secrets-variables.yml** - Secrets, Variables & Environment Protection
Manage sensitive data and configuration:
- Repository secrets
- Environment variables at different levels
- Conditional environment setup
- Environment-specific deployments
- Secret masking and best practices

**Key Concepts:**
- `secrets:` - Access secrets
- `env:` - Environment variables
- `environment:` - Deployment environments
- Secret scanning and protection

---

### 8. **08-caching-artifacts.yml** - Caching, Dependency Cache & Artifacts
Speed up builds and manage build outputs:
- Basic caching with actions/cache
- Dependency caching
- Multiple cache paths
- Cache invalidation strategies
- Uploading and downloading artifacts
- Artifact retention policies

**Key Concepts:**
- `actions/cache:` - Cache dependencies
- `actions/upload-artifact:` - Upload files
- `actions/download-artifact:` - Download files
- `hashFiles():` - Cache key generation
- `retention-days:` - Artifact retention

---

### 9. **09-reusable-workflows.yml** - Reusable Workflows & DRY Patterns
Create reusable workflows to avoid repetition:
- Calling reusable workflows
- Workflow inputs and outputs
- Workflow composition
- Error handling
- Workflow orchestration

**Key Concepts:**
- `workflow_call:` - Make workflow reusable
- `inputs:` - Workflow parameters
- `outputs:` - Workflow return values
- `secrets:` - Pass secrets to workflows

---

### 10. **10-security-permissions.yml** - Security & Permissions
Implement security best practices:
- Least privilege permissions
- GITHUB_TOKEN scoping
- Third-party action security
- Dependency security
- Secret scanning and code scanning
- Audit logging

**Key Concepts:**
- `permissions:` - Scope permissions
- Permission levels: read, write, admin
- Secret scanning
- Code scanning
- Audit logs

---

### 11. **11-testing-debugging.yml** - Testing, Debugging & Local Development
Test and debug workflows effectively:
- Unit, integration, and E2E testing
- Code quality checks
- Debug logging
- Conditional debugging
- Test reporting
- Performance testing
- Local testing with act

**Key Concepts:**
- `ACTIONS_STEP_DEBUG:` - Enable debug logging
- `if: failure()` - Debug on failure
- `if: always()` - Always run
- Test artifacts and reporting

---

### 12. **12-advanced-cicd.yml** - Advanced CI/CD Patterns
Master advanced deployment strategies:
- Build, test, and security scanning pipeline
- Staging and production deployments
- Environment protection and approvals
- Monorepo strategies
- Blue-green deployments
- Canary deployments
- Rollback strategies

**Key Concepts:**
- `environment:` - Deployment environments
- Job dependencies for pipeline
- Artifact passing between jobs
- Deployment strategies
- Monorepo patterns

---

## 🎓 Learning Path

### Beginner
1. Start with **01-core-concepts.yml** - Understand basic structure
2. Learn **02-workflow-syntax.yml** - Master YAML syntax
3. Explore **03-events-triggers.yml** - Understand triggers

### Intermediate
4. Study **04-runners.yml** - Learn about runners
5. Explore **05-actions-marketplace.yml** - Use marketplace actions
6. Master **06-matrix-builds.yml** - Test multiple configurations
7. Learn **07-secrets-variables.yml** - Manage configuration

### Advanced
8. Implement **08-caching-artifacts.yml** - Optimize builds
9. Create **09-reusable-workflows.yml** - Build reusable components
10. Secure **10-security-permissions.yml** - Implement security
11. Debug **11-testing-debugging.yml** - Test and debug
12. Deploy **12-advanced-cicd.yml** - Advanced CI/CD patterns

## 🔑 Key Concepts Summary

### Workflow Structure
```yaml
name: Workflow Name
on: [push, pull_request]  # Triggers
jobs:
  job-name:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
```

### Common Patterns
- **Conditional Execution**: `if: github.ref == 'refs/heads/main'`
- **Job Dependencies**: `needs: [job1, job2]`
- **Matrix Strategy**: `strategy.matrix: { node: [16, 18, 20] }`
- **Caching**: `uses: actions/cache@v3`
- **Artifacts**: `uses: actions/upload-artifact@v3`

### Best Practices
1. Use least privilege permissions
2. Pin action versions (use @v4, not @latest)
3. Cache dependencies for faster builds
4. Use matrix for testing multiple configs
5. Implement security scanning
6. Use environment protection rules
7. Document your workflows
8. Test workflows locally with act
9. Monitor and log important events
10. Plan for disaster recovery

## 📖 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)
- [act - Run GitHub Actions locally](https://github.com/nektos/act)
- [GitHub Actions Best Practices](https://docs.github.com/en/actions/guides)

## 🛠️ Tools & Technologies

- **Vite**: Fast build tool and dev server
- **React**: UI library
- **GitHub Actions**: CI/CD platform
- **Node.js**: JavaScript runtime
- **npm**: Package manager

## 📝 Notes

- All workflows are configured to run on `push` to `main` branch
- Some workflows have `if: false` to prevent execution (for demonstration)
- Customize workflows based on your project needs
- Test workflows locally before pushing to main branch
- Use environment protection rules for production deployments

## 🤝 Contributing

Feel free to modify and extend these workflows for your learning purposes!

## 📄 License

This project is open source and available for educational purposes.

---

**Happy Learning! 🚀**

For questions or issues, refer to the [GitHub Actions Documentation](https://docs.github.com/en/actions).
# github-actions
