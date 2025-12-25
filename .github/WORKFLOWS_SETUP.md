# GitHub Actions Workflows Setup Guide

## 📁 Project Structure

```
.github/
├── workflows/                    # Active workflows
│   ├── 01-core-concepts.yml     # Reference: Core concepts
│   ├── 02-workflow-syntax.yml   # Reference: Workflow syntax
│   ├── 03-events-triggers.yml   # Reference: Events & triggers
│   ├── 04-runners.yml           # Reference: Runners
│   ├── 05-actions-marketplace.yml # Reference: Actions & marketplace
│   ├── 06-matrix-builds.yml     # Reference: Matrix builds
│   ├── 07-secrets-variables.yml # Reference: Secrets & variables
│   ├── 08-caching-artifacts.yml # Reference: Caching & artifacts
│   ├── 09-reusable-workflows.yml # Reference: Reusable workflows
│   ├── 10-security-permissions.yml # Reference: Security & permissions
│   ├── 11-testing-debugging.yml # Reference: Testing & debugging
│   ├── 12-advanced-cicd.yml     # Reference: Advanced CI/CD
│   ├── stage-build.yml          # ⭐ Staging build & deploy
│   └── prod-build.yml           # ⭐ Production build & deploy
└── workflows-reference/          # Archived reference workflows
    └── (copies of 01-12 workflows)
```

## 🚀 Active Workflows

### 1. Stage Build & Deploy to GitHub Pages (`stage-build.yml`)

**Trigger:** Push to `develop` branch or manual `workflow_dispatch`

**Environment:** Staging (GitHub Pages)

**Node Version:** v20.19.6

**Jobs:**
1. **build-stage** - Build the project for staging with Node v20.19.6
2. **test-stage** - Run tests and linting
3. **deploy-stage** - Deploy to GitHub Pages (staging environment)

**Secrets Required:**
- `STAGING_API_ENDPOINT` - API endpoint for staging environment

**Environment Variables:**
- `VITE_API_ENDPOINT` - Passed from secret during build
- `VITE_ENVIRONMENT` - Set to "staging"
- `VITE_BASE_URL` - GitHub Pages base URL (optional, defaults to `/`)

**Setup Instructions:**

1. Go to GitHub repository Settings
2. Navigate to **Secrets and variables > Actions**
3. Click **New repository secret**
4. Create secret: `STAGING_API_ENDPOINT`
5. Set value to your staging API endpoint (e.g., `https://api-staging.example.com`)
6. Enable GitHub Pages in Settings > Pages > Source: Deploy from a branch > Branch: gh-pages

### 2. Production Build & Deploy to GitHub Pages (`prod-build.yml`)

**Trigger:** Manual `workflow_dispatch` only (no automatic push trigger)

**Environment:** Production (GitHub Pages)

**Node Version:** v20.19.6

**Jobs:**
1. **build-prod** - Build the project for production with Node v20.19.6
2. **security-scan** - Run security audit
3. **test-prod** - Run tests and linting
4. **deploy-prod** - Deploy to GitHub Pages (production environment)

**Secrets Required:**
- `PRODUCTION_API_ENDPOINT` - API endpoint for production environment

**Environment Variables:**
- `VITE_API_ENDPOINT` - Passed from secret during build
- `VITE_ENVIRONMENT` - Set to "production"
- `VITE_BASE_URL` - GitHub Pages base URL (optional, defaults to `/`)

**Setup Instructions:**

1. Go to GitHub repository Settings
2. Navigate to **Secrets and variables > Actions**
3. Click **New repository secret**
4. Create secret: `PRODUCTION_API_ENDPOINT`
5. Set value to your production API endpoint (e.g., `https://api.example.com`)
6. Enable GitHub Pages in Settings > Pages > Source: Deploy from a branch > Branch: gh-pages
7. To trigger production deployment: Go to Actions tab > Select "Production Build & Deploy" > Click "Run workflow"

## 🔐 Environment Variables & Secrets

### How Secrets are Used

```yaml
# In workflow file
env:
  VITE_API_ENDPOINT: ${{ secrets.STAGING_API_ENDPOINT }}
  VITE_ENVIRONMENT: staging
  VITE_BASE_URL: /github-actions/  # For GitHub Pages

# During build
run: npm run build
```

### How Environment Variables are Exposed

**vite.config.js:**
```javascript
base: process.env.VITE_BASE_URL || '/',
define: {
  __API_ENDPOINT__: JSON.stringify(process.env.VITE_API_ENDPOINT || 'https://api.example.com'),
  __ENVIRONMENT__: JSON.stringify(process.env.VITE_ENVIRONMENT || 'development'),
}
```

**src/App.jsx:**
```javascript
'API Endpoint': window.__API_ENDPOINT__ || 'Not configured',
'Environment': window.__ENVIRONMENT__ || 'development',
```

### GitHub Pages Deployment

The workflows use GitHub's official Pages deployment actions:
- `actions/configure-pages@v4` - Configure GitHub Pages
- `actions/upload-pages-artifact@v3` - Upload build artifacts
- `actions/deploy-pages@v4` - Deploy to GitHub Pages

Deployment URL: `https://<username>.github.io/<repository-name>/`

## 📊 Environment Display

The React application displays:
- **API Endpoint** - From `window.__API_ENDPOINT__`
- **Environment** - From `window.__ENVIRONMENT__`
- Other system and browser information

## 🔄 Workflow Execution Flow

### Staging Workflow (Automatic)
```
develop branch push
    ↓
build-stage (Build with STAGING_API_ENDPOINT)
    ↓
test-stage (Run tests)
    ↓
deploy-stage (Deploy to staging)
```

### Production Workflow (Manual)
```
Manual trigger (workflow_dispatch)
    ↓
build-prod (Build with PRODUCTION_API_ENDPOINT)
    ↓
security-scan (Security audit)
    ↓
test-prod (Run tests)
    ↓
deploy-prod (Deploy to production)
```

## 🛠️ Local Development

### Build for Staging Locally
```bash
VITE_API_ENDPOINT=https://api-staging.example.com \
VITE_ENVIRONMENT=staging \
VITE_BASE_URL=/ \
npm run build
```

### Build for Production Locally
```bash
VITE_API_ENDPOINT=https://api.example.com \
VITE_ENVIRONMENT=production \
VITE_BASE_URL=/ \
npm run build
```

### Build for GitHub Pages (with repository name as base)
```bash
VITE_API_ENDPOINT=https://api.example.com \
VITE_ENVIRONMENT=production \
VITE_BASE_URL=/github-actions/ \
npm run build
```

### Development Server
```bash
npm run dev
# Uses default values from vite.config.js
# Node version: v20.19.6 (recommended)
```

## 📝 Reference Workflows

The 12 reference workflows (01-12) are archived in `.github/workflows-reference/` for learning purposes:

1. **01-core-concepts.yml** - Fundamental GitHub Actions concepts
2. **02-workflow-syntax.yml** - YAML syntax and keywords
3. **03-events-triggers.yml** - Different trigger types
4. **04-runners.yml** - Runner types and configurations
5. **05-actions-marketplace.yml** - Using marketplace actions
6. **06-matrix-builds.yml** - Matrix strategy for multiple configs
7. **07-secrets-variables.yml** - Managing secrets and variables
8. **08-caching-artifacts.yml** - Caching and artifacts
9. **09-reusable-workflows.yml** - Reusable workflow patterns
10. **10-security-permissions.yml** - Security best practices
11. **11-testing-debugging.yml** - Testing and debugging
12. **12-advanced-cicd.yml** - Advanced CI/CD patterns

## ✅ Checklist for Setup

- [ ] Create `STAGING_API_ENDPOINT` secret in GitHub
- [ ] Create `PRODUCTION_API_ENDPOINT` secret in GitHub
- [ ] Enable GitHub Pages in repository Settings
- [ ] Set GitHub Pages source to: Deploy from a branch > gh-pages
- [ ] Test stage workflow by pushing to `develop` branch
- [ ] Test prod workflow by pushing to `main` branch
- [ ] Verify API endpoint is displayed in the app
- [ ] Verify environment is displayed correctly
- [ ] Check workflow logs in GitHub Actions tab
- [ ] Verify GitHub Pages deployment URL is accessible
- [ ] Confirm Node v20.19.6 is used in workflows

## 🔍 Monitoring Workflows

1. Go to your GitHub repository
2. Click **Actions** tab
3. Select workflow to view:
   - **Stage Build & Deploy** - For staging deployments to GitHub Pages
   - **Production Build & Deploy** - For production deployments to GitHub Pages
4. Click on a run to see detailed logs
5. Check environment variables and secrets are properly masked
6. Verify deployment URL in workflow logs: `${{ steps.deployment.outputs.page_url }}`
7. Visit GitHub Pages URL to verify deployment: `https://<username>.github.io/<repo-name>/`

## 🚨 Troubleshooting

### API Endpoint not showing in app
- Check if secret is created in GitHub
- Verify secret name matches workflow file
- Check build logs for environment variable values
- Ensure vite.config.js is using correct variable names

### GitHub Pages deployment not working
- Verify GitHub Pages is enabled in Settings > Pages
- Check that gh-pages branch exists (created by workflow)
- Verify deployment URL format: `https://<username>.github.io/<repo-name>/`
- Check workflow permissions include `pages: write` and `id-token: write`
- Review deployment logs for errors

### Workflow not triggering
- **Staging**: Verify branch name is `develop` and push is made to that branch
- **Production**: Manually trigger from Actions tab > "Production Build & Deploy" > "Run workflow"
- Check if workflow file is in `.github/workflows/` directory
- Ensure YAML syntax is correct
- Check GitHub Actions is enabled in repository settings

### Build fails
- Check Node.js version (should be v20.19.6)
- Verify dependencies install correctly with npm
- Check for linting errors
- Review build logs for specific errors
- Ensure VITE_API_ENDPOINT secret is set correctly

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [GitHub Secrets Management](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

## 🎯 Next Steps

1. Enable GitHub Pages in repository Settings
2. Set up secrets in GitHub (STAGING_API_ENDPOINT, PRODUCTION_API_ENDPOINT)
3. Push to develop branch to test staging workflow (automatic)
4. Manually trigger production workflow from Actions tab when ready
5. Monitor workflow execution in Actions tab
6. Verify app displays correct API endpoint and environment
7. Visit GitHub Pages URL to verify deployment
8. Customize workflows for your deployment needs
9. Configure custom domain (optional) in GitHub Pages settings

## 📌 Important Notes

- **Staging**: Automatically deploys on every push to `develop` branch
- **Production**: Requires manual trigger from GitHub Actions UI for safety and control
- **TEST_VAR**: Environment variable that's echoed in workflow logs for verification
- **API_ENDPOINT**: Secret that's masked in logs for security
