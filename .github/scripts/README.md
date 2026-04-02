# Meraki API Changelog Automation Scripts

This directory contains automation scripts for generating changelogs and release notes from Meraki API OpenAPI specifications using oasdiff.

## Overview

The automation workflow **automatically detects** new releases from the meraki/openapi repository and uses oasdiff to compare versions. When new releases are detected, it:
1. Generates changelog files (using oasdiff's natural markdown output)
2. Creates user-friendly release notes for annual documents
3. Updates changelog-config.json
4. Prepends release notes to the current year's markdown file
5. **Skips processing if no changes are detected**

### Key Features
- ✅ **Fully Automatic**: Runs daily, no manual intervention needed
- ✅ **Smart Detection**: Only processes new releases that don't have changelogs
- ✅ **Change Validation**: Skips if oasdiff detects no actual changes
- ✅ **Parallel Processing**: Handles GA and Beta releases independently
- ✅ **Manual Override**: Optional manual mode for custom version ranges

## Files

### Scripts

- **detect-versions.js** - Detects latest releases from meraki/openapi and determines what needs updating
- **generate-release-notes.js** - Parses oasdiff changelog and creates user-friendly release notes
- **update-changelog-config.js** - Updates `changelog/changelog-config.json` with new version entries
- **update-annual-document.js** - Prepends release notes to annual markdown files (e.g., `documents/2026.md`)

### Workflow

- **../workflows/generate-changelog.yml** - GitHub Actions workflow that orchestrates the entire process

## Usage

### Automatic Mode (Recommended)

The workflow runs **automatically every day at 10 AM UTC**. It will:
1. Check the meraki/openapi repository for new releases
2. Compare against existing changelogs to find what's new
3. Generate changelogs only if:
   - A new release is found
   - The release doesn't already have a changelog
   - oasdiff detects actual changes
4. Process GA and Beta releases in parallel
5. Commit and push changes automatically
6. Trigger the existing PubHub sync workflow

**No manual intervention required!** The workflow intelligently skips processing when there are no updates.

### Manual Mode (For Testing/Override)

If you need to manually generate a changelog for a specific version range:

1. Go to the **Actions** tab in GitHub
2. Select **Generate Changelog and Release Notes** workflow
3. Click **Run workflow**
4. Select **Mode**: `manual`
5. Fill in the version inputs:
   - **Old version tag**: e.g., `v1.68.0`
   - **New version tag**: e.g., `v1.69.0`
   - **Branch**: `master` (for GA) or `v1-beta` (for Beta)
6. Click **Run workflow**

This is useful for:
- Re-generating a changelog
- Processing a specific version range
- Testing the automation
- Backfilling historical changelogs

### Local Testing

You can test the scripts locally before running the full workflow:

#### 1. Test version detection

```bash
cd .github/scripts
node detect-versions.js both
```

This will show which versions need changelog generation.

#### 2. Generate test changelog with oasdiff

```bash
# Install oasdiff (requires Go)
go install github.com/oasdiff/oasdiff@latest

# Or via Homebrew (macOS)
# brew install oasdiff

# Generate changelog
oasdiff changelog \
  "https://raw.githubusercontent.com/meraki/openapi/v1.67.0/openapi/spec3.json" \
  "https://raw.githubusercontent.com/meraki/openapi/v1.68.0/openapi/spec3.json" \
  --format markdown \
  --include-path-params > test-changelog.md
```

#### 3. Test release notes generation

```bash
cd .github/scripts
node generate-release-notes.js test-changelog.md v1.68.0 master test-release-notes.md
```

#### 4. Test config update (dry run - make a backup first!)

```bash
cp ../../changelog/changelog-config.json ../../changelog/changelog-config.json.bak
node update-changelog-config.js v1.68.0 master v1.68.0.md
# Review the changes, then restore backup if needed
```

#### 5. Test annual document update (dry run - make a backup first!)

```bash
cp ../../documents/2026.md ../../documents/2026.md.bak
node update-annual-document.js test-release-notes.md v1.68.0 master
# Review the changes, then restore backup if needed
```

## How It Works

### GA Releases (master branch)

1. **Changelog**: Creates individual file `changelog/v{VERSION}.md` with oasdiff output
2. **Config**: Adds new entry to "Generally Available" section in `changelog-config.json`
3. **Release Notes**: Generates formatted release notes from changelog
4. **Annual Doc**: Prepends release notes to current year's file (e.g., `documents/2026.md`)

### Beta Releases (v1-beta branch)

1. **Changelog**: Appends changes to `changelog/v1-beta.md` (single file for all betas)
2. **Config**: Updates Beta section reference in `changelog-config.json`
3. **Release Notes**: Generates formatted release notes from changelog
4. **Annual Doc**: Skipped (beta releases don't update annual docs)

## Output Format

### Changelog Files

Uses oasdiff's natural markdown output format:
- Organized by HTTP method and endpoint
- Lists added, modified, and deleted endpoints
- Shows property changes and breaking changes

### Release Notes (Annual Documents)

User-friendly format like in `documents/2026.md`:
```markdown
# April 2026

Meraki API Release Notes **v1.69.0**

[**Changelog**](https://developer.cisco.com/meraki/whats-new/v1-69-0/)

## Summary
- 5 new operations added
- 20 operations enhanced
- 880 total operations available

## What's New
### wireless
**devices**
- List the zero touch deployments..., [getOrganizationWireless...](...)

## What's Updated
### appliance
**vpn**
- Update the third party VPN peers..., [updateOrganizationAppliance...](...)
> \- property `ecmpUplinkConfigs` added
```

## Troubleshooting

### Workflow fails at oasdiff step

- Check that version tags exist in the meraki/openapi repository
- Verify the OpenAPI spec URLs are accessible
- Check oasdiff installation step succeeded

### Config update fails

- Ensure `changelog/changelog-config.json` is valid JSON
- Check file permissions
- Verify the section structure matches expected format

### Annual document not updating

- Verify it's a GA release (not beta)
- Check that the year file exists in `documents/` directory
- Verify file permissions

### Scripts fail locally

- Ensure Node.js 20+ is installed: `node --version`
- Make scripts executable: `chmod +x *.js`
- Run from the scripts directory or use full paths

## Development

### Modifying Scripts

When making changes to scripts:
1. Test locally with historical data first
2. Create a feature branch
3. Run the workflow on the feature branch
4. Compare output against expected format
5. Create PR for review

### Testing with Historical Data

Use past versions to test without affecting production:
```bash
# Test with v1.67.0 -> v1.68.0 (known good data)
# Compare output against existing files
```

## References

- [oasdiff Documentation](https://github.com/oasdiff/oasdiff)
- [Meraki OpenAPI Specs](https://github.com/meraki/openapi)
- [PubHub Documentation](https://pubhub.cisco.com/)

## Support

For issues or questions:
1. Check workflow logs in GitHub Actions
2. Review generated artifacts
3. Consult the implementation plan at `/Users/cguynn/.claude/plans/`
4. Contact the Meraki API team
