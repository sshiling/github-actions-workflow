module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/sshiling/github-actions-workflow",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
}
