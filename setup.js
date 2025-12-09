// setup.js
// This file contains the steps to set up GitHub account, repository,
// and VS Code / GitHub Codespaces with Node.js environment.

// 1. Create GitHub Account
console.log("1) Open https://github.com in browser.");
console.log("2) Click on 'Sign up' and create your account using email, username, and password.");
console.log("3) Verify your email address to activate your GitHub account.");

// 2. Create a new GitHub Repository
console.log("4) After login, click on the '+' icon in the top-right corner and select 'New repository'.");
console.log("5) Enter repository name: js-day1-assignment.");
console.log('6) Add description: \"My first JavaScript & GitHub practice repo\".');
console.log("7) Keep the repository Public and click on 'Create repository'.");

// 3. Open project using GitHub Codespaces (VS Code in browser)
console.log("8) On the repository page, click on the green 'Code' button.");
console.log("9) Go to the 'Codespaces' tab.");
console.log("10) Click on 'Create codespace on main'. This will open VS Code in your browser.");

// 4. Check Node.js installation
console.log("11) In Codespaces, open the Terminal from the menu: Terminal -> New Terminal.");
console.log("12) Type 'node -v' to check if Node.js is installed.");

// 5. Create and run a JavaScript file
console.log("13) In the Explorer, create a new file named 'intro.js'.");
console.log("14) Write a simple console.log introduction program inside it.");
console.log("15) In the Terminal, run 'node intro.js' to execute the file.");

// 6. Commit and push changes
console.log("16) In the Terminal, run 'git status' to see changed files.");
console.log("17) Run 'git add .' to stage all changes.");
console.log("18) Run 'git commit -m \"Added intro.js (introduction program)\"' to commit.");
console.log("19) Run 'git push' to upload your changes to GitHub.");

// 7. Summary
console.log("These are the basic steps to set up GitHub, create a repository,");
console.log("use GitHub Codespaces (VS Code in browser) with Node.js, and run JavaScript programs.");