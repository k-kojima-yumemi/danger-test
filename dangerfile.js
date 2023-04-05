import { danger, fail, markdown, message, peril, schedule, warn } from 'danger'

const github = danger.github
const baseBranchName = github.pr.base.ref
const branchName = github.pr.head.ref

message(baseBranchName)
message(branchName)

