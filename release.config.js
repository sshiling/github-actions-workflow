module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/sshiling/github-actions-workflow",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    {
      assets: [
        { path: "dist.zip", label: "Dist" },
        { path: "coverage.zip", label: "Coverage" }
      ]
    }
  ]
};
