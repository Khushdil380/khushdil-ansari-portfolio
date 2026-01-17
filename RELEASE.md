# Release Guide

This guide explains how to create releases for the Khushdil Ansari Portfolio.

## Quick Start

### Creating Your First Release

**Using Git Tags (Recommended):**

```bash
# Make sure you're on the main branch and up to date
git checkout main
git pull origin main

# Create a tag for version 1.0.0
git tag v1.0.0

# Push the tag
git push origin v1.0.0

# The release workflow will automatically run!
```

**Using GitHub UI:**

1. Go to https://github.com/Khushdil380/khushdil-ansari-portfolio/actions
2. Click on "Create Release" workflow
3. Click "Run workflow" button
4. Enter version: `1.0.0`
5. Click "Run workflow"

## What Happens During a Release?

When you create a release, the automated workflow:

1. ✅ **Builds the client** - Compiles the React application
2. ✅ **Runs tests** - Ensures everything works
3. ✅ **Packages artifacts** - Creates `.tar.gz` files for deployment
4. ✅ **Generates changelog** - Lists all commits since the last release
5. ✅ **Creates GitHub Release** - Makes it available in the Releases page
6. ✅ **Uploads artifacts** - Attaches build files to the release

## Version Numbering

Follow [Semantic Versioning](https://semver.org/):

- **v1.0.0** → First stable release
- **v1.1.0** → Add new features
- **v1.1.1** → Fix bugs
- **v2.0.0** → Breaking changes

### Examples

```bash
# Patch release (bug fixes)
git tag v1.0.1
git push origin v1.0.1

# Minor release (new features)
git tag v1.1.0
git push origin v1.1.0

# Major release (breaking changes)
git tag v2.0.0
git push origin v2.0.0
```

## Pre-releases

To create a pre-release (beta, alpha, etc.):

1. Use the "Create Release" workflow in GitHub Actions
2. Enter version like: `1.0.0-beta.1`
3. Check the "Mark as pre-release" option
4. Run the workflow

## Checking Release Status

1. Go to the **Actions** tab to see workflow runs
2. Go to the **Releases** tab to see published releases
3. Each release includes:
   - Changelog with all changes
   - Download links for artifacts
   - Links to compare with previous versions

## Troubleshooting

### "Tag already exists" error
- Choose a different version number
- Or delete the existing tag:
  ```bash
  git tag -d v1.0.0
  git push origin :refs/tags/v1.0.0
  ```

### Build fails during release
- Check the Actions tab for error logs
- Fix the issues in your code
- Create a new patch version (e.g., v1.0.1)

### Workflow doesn't trigger
- Ensure tag format is correct: `vX.Y.Z` (e.g., `v1.0.0`)
- Tags like `1.0.0` (without `v`) won't trigger the workflow
- Check that you pushed the tag: `git push origin v1.0.0`

## Best Practices

1. **Always test before releasing** - Ensure tests pass locally
2. **Update version in package.json** - Keep versions synchronized (optional but recommended)
3. **Write meaningful commit messages** - They appear in the changelog
4. **Create releases from main branch** - Don't create releases from feature branches
5. **Use semantic versioning** - Makes it clear what changed

## Example Release Workflow

```bash
# 1. Finish your feature/bugfix
git add .
git commit -m "Add new contact form validation"
git push

# 2. Merge to main (via PR or directly)
git checkout main
git pull origin main

# 3. Create and push a tag
git tag v1.1.0
git push origin v1.1.0

# 4. Wait for the workflow to complete (2-3 minutes)

# 5. Check the release at:
# https://github.com/Khushdil380/khushdil-ansari-portfolio/releases
```

## Need Help?

- Check workflow logs in the Actions tab
- Review [.github/workflows/README.md](.github/workflows/README.md)
- Check [GitHub Actions documentation](https://docs.github.com/en/actions)
