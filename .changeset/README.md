# Changesets

This repository uses Changesets for the publishable package under `package/`.
The `website` workspace remains private and is excluded from release automation.

## Daily workflow

1. Run `node --run changeset` to add a release note.
2. Merge the PR into `main` for stable releases or `next` for prereleases.
3. Let the release workflow open or update the version PR for that branch.
