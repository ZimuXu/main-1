# Assignment #01

Zimu Xu
NUID 001531739
xu.zim@northeastern

## Web Application Development

Create a web application using a technology stack that meets Cloud-Native Web Application Requirements. Start implementing APIs for the web application. Features of the web application will be split among various applications. For this assignment, we will focus on the backend API (no UI) service. Additional features of the web application will be implemented in future assignments. We will also build the infrastructure on the cloud to host the application. This assignment will focus on the user management aspect of the application. You will implement RESTful APIs based on user stories you will find below.

## Function

This api will show 200 HTTP status code rightly.
Implement GitHub branch protection to prevent users from merging PR when GitHub Actions workflow run fails.

## How to work 
Type:
npm i
node api.js
in terminal

Open Postman to check http://localhost:3000/healthz

## Grading Guidelines

The following guidelines are for information only. They are subject to change at the discretion of the instructor and TA.

### Web Application Crash (10% Penalty)
No 500 internal server errors.
No restart of application server between API calls.
Web Application (30%)
Students to demo the web application from their laptops.
APIs can be demoed using any Postman or Restlet or some other REST client but not via browser.
Check for UI. The application cannot have UI.
### Git (30%)
All students must use the Github forking workflow and their repositories (main branch which must include code for this assignment) must be in-sync. Check this by asking students to create pull requests between their main branch and their assignment branch. There should be no changes. Verify that all assignment changes are in main branch.

Verify that students have added TAs and instructors as collaborators to the GitHub repository.

Verify that students have README.md file in their git repository and it contains instructions on how to build, test and deploy their application including any pre-requisites for a programming language, frameworks, and third-party libraries.
Verify that the dev environment is not set up in Downloads folder.
Git repositories should be cloned locally using git/ssh protocol and not https.
Verify this by running git remote -v the command in the cloned repository in the VM.
Validate that students have created a fork of the organization repository are working on it.
Verify that the student has made no direct commits to their organization repository.
### Git Repository Content Check (10%)
Check the repository for any IDE-specific files. IDE configuration files must not be in the repository.
Verify their .gitignore configuration.
Check the repository for build artifacts such as .class, .jar, .war files and build, node_modules directory. None of these should be checked into the repository.
Check for dependencies. Dependencies from the Maven repository or npm should not be committed to the git repository.
### Continuous Integration (30%)
GitHub Action workflow is triggered when PR is opened.
GitHub Repository has branch protection configured to prevent PRs from merging when a workflow fails.
 



