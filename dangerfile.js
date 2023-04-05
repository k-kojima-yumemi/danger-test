import { danger, fail, markdown, message, peril, schedule, warn } from 'danger'

const github = danger.github
const baseBranchName = github.pr.base.ref
const branchName = github.pr.head.ref

message(`baseBranchName = ${baseBranchName} branchName = ${branchName}`)
if(baseBranchName === 'main' || baseBranchName === 'master'){
    // PR branch must start with hotfix or release
    if(!branchName.startsWith('hotfix/') || !branchName.startsWith('release/')){
        fail("You can't merge this branch into main.")
    }
}

