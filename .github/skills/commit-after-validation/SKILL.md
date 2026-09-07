---
name: commit-after-validation
description: 'Automatically create a local git commit after every completed code or configuration change has been validated. Use whenever an agent edits workspace files and a focused validation check passes. Never push commits.'
user-invocable: false
disable-model-invocation: false
---

# Commit After Validation

## When to Use

Use this workflow after every agent-made change to workspace files once the relevant validation has passed. This applies to code, configuration, documentation, tests, and other tracked project files.

## Procedure

1. Make the smallest focused change needed for the request.
2. Run the test suite (`bun run test`) and the narrowest relevant validation command or check.
3. If tests or validation fail, fix the change and rerun the failed command. Do not commit until all required checks pass.
4. Inspect the working tree and diff before staging so existing user changes are preserved and unrelated files are not included.
5. Stage only the files changed for the completed task.
6. Create a new local git commit with a concise imperative message describing the change.
7. Confirm the commit succeeded and the working tree contains only pre-existing or intentionally uncommitted changes.
8. Do not push, fetch, pull, amend commits, reset user changes, or create branches as part of this workflow.

## Commit Rules

- Commit only after validation has passed.
- Always run and pass the test suite before committing, even for changes that appear unrelated to tests.
- Never include secrets, generated artifacts, dependencies, or unrelated user changes unless the task explicitly requires them.
- Never use destructive git commands to make the working tree clean.
- If the repository has no changes belonging to the task, do not create an empty commit.
- If a commit cannot be created safely, report the blocker instead of bypassing these rules.
