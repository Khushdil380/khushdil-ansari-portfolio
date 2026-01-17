# Khushdil Ansari Portfolio

A full-stack portfolio website built with React and Node.js/Express.

## Project Structure

```
├── client/          # React frontend application
├── server/          # Node.js/Express backend
└── .github/         # GitHub Actions workflows
    └── workflows/   # Automated release workflows
```

## 🚀 Automated Releases

This repository uses GitHub Actions to automate the release process. There are two ways to create releases:

### Option 1: Automatic Release (Recommended)

Create and push a version tag, and the release will be created automatically:

```bash
# Create a version tag
git tag v1.0.0

# Push the tag to GitHub
git push origin v1.0.0
```

The workflow will automatically:
- Build the client application
- Run tests
- Create a GitHub release
- Upload build artifacts
- Generate a changelog

### Option 2: Manual Release via GitHub UI

1. Go to the **Actions** tab in GitHub
2. Select **"Create Release"** workflow
3. Click **"Run workflow"**
4. Enter the version number (e.g., `1.0.0`)
5. Click **"Run workflow"**

The workflow will create the tag and release for you.

## 📦 Release Artifacts

Each release includes:
- `client-build.tar.gz` - Production build of the React client
- `server.tar.gz` - Server application files

## 🔢 Version Numbering

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR** (X.0.0) - Breaking changes
- **MINOR** (0.X.0) - New features (backward compatible)
- **PATCH** (0.0.X) - Bug fixes (backward compatible)

Examples:
- `v1.0.0` - First stable release
- `v1.1.0` - Added new features
- `v1.1.1` - Bug fixes

## 🛠️ Development

### Client (React)

```bash
cd client
npm install
npm start      # Start development server
npm test       # Run tests
npm run build  # Build for production
```

### Server (Node.js/Express)

```bash
cd server
npm install
npm start      # Start server
npm run dev    # Start with nodemon
```

## 📝 Documentation

For more details about the automated release workflows, see [.github/workflows/README.md](.github/workflows/README.md).

## 📄 License

ISC
