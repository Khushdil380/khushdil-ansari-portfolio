# Automated Release Workflows

This directory contains GitHub Actions workflows for automating releases of the Khushdil Ansari Portfolio.

## Workflows

### 1. Release (`release.yml`)

**Trigger**: Automatically runs when a version tag (e.g., `v1.0.0`) is pushed to the repository.

**What it does**:
- Builds the client React application
- Runs client tests
- Installs server dependencies
- Creates archives of both client and server
- Generates a changelog based on commits since the last release
- Creates a GitHub release with the changelog and artifacts

**Usage**:
```bash
# Create and push a version tag
git tag v1.0.0
git push origin v1.0.0
```

### 2. Create Release (`create-release.yml`)

**Trigger**: Manual workflow that can be triggered from the GitHub Actions UI.

**What it does**:
- Validates the version number format
- Checks if the tag already exists
- Builds and tests the application
- Creates a version tag
- Generates a changelog
- Creates a GitHub release with artifacts

**Usage**:
1. Go to the "Actions" tab in GitHub
2. Select "Create Release" workflow
3. Click "Run workflow"
4. Enter the version number (e.g., `1.0.0`)
5. Optionally mark as pre-release
6. Click "Run workflow"

## Release Artifacts

Each release includes:
- `client-build.tar.gz` - Production build of the React client application
- `server.tar.gz` - Server application files

## Version Numbering

This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR** version (X.0.0) - Incompatible API changes
- **MINOR** version (0.X.0) - Add functionality in a backward compatible manner
- **PATCH** version (0.0.X) - Backward compatible bug fixes

Examples:
- `v1.0.0` - First stable release
- `v1.1.0` - Added new features
- `v1.1.1` - Bug fixes

## Manual Release Process

If you prefer to create releases manually:

1. **Update version numbers** in package.json files if needed
2. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Prepare for release v1.0.0"
   git push
   ```
3. **Create and push a tag**:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
4. The release workflow will automatically trigger and create the release

## Permissions

The workflows require the following permissions:
- `contents: write` - To create releases and push tags

These permissions are already configured in the workflow files.
