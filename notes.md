# Notes

## Notes from GitHub Assignment
Though I was already familiar with git, I learned the following about GitHub:
- Forking is similar to cloning, except that it creates a remote copy of the repo on GitHub, rather than in your local machine.
- It is easier to start a GitHub repo from github.com than starting it from your local machine.
- Markdown files can include relative links to files.

## Notes on AWS
- My elastic IP address: 44.215.202.5
- Remember to "release" the elastic IP address when you're done using it so that you don't continue to get charged.
- You are free to stop your server when you're not using it because the elastic IP address will remain the same when you restart it.
- Use this to access your server: `ssh -i ~/.ssh/webserver-production.pem ubuntu@44.215.202.5`
- Use this to restart Caddy: `sudo service caddy restart`
- DNS A Record: points to the IP address

## Notes on Deployment
- Simon deployment: `./deployFiles.sh -k ~/.ssh/webserver-production.pem -h simon.nathanrice.info -s simon`
- Startup deployment: `./deployFiles.sh -k ~/.ssh/webserver-production.pem -h startup.nathanrice.info -s startup`
- Port 22: commonly used for Secure Shell (SSH)
- Port 80: commonly used for Hypertext Transfer Protocol (HTTP)
- Port 443: commonly used for HTTPS

## Notes on HTML
- `<link>` - Usually used to reference in external resources
- `<span>` - Like `<div>`, but inline, rather than block-level
- `<a>` - Uses its `href` element to "anchor" to hyperlink to other pages
- `<script>` - Allows inline JavaScript

## Notes on CSS
- Selectors:
    - Apply to combined elements: `h1 ~ p`
    - Apply to a class: `.summary`
    - Apply to element-class combo: `p.summary`
    - Apply to an ID: `#physics`
    - Apply to any given attribute: `p[class='summary']`
    - Apply based on positional-relationship: `section:hover`
- Padding insets, Border bevels, margin extrudes

## Notes on JavaScript
- Promises:
  ```JavaScript
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });

  myPromise
    .then(handleFulfilledA, handleRejectedA)
    .then(handleFulfilledB, handleRejectedB)
    .then(handleFulfilledC, handleRejectedC);
  ```
- Arrays:
  ```JavaScript
  const a = [1, 2, 3];

  console.log(a.map((i) => i + i));
  // OUTPUT: [2,4,6]
  console.log(a.reduce((v1, v2) => v1 + v2));
  // OUTPUT: 6
  console.log(a.sort((v1, v2) => v2 - v1));
  // OUTPUT: [3,2,1]

  a.push(4);
  console.log(a.length);
  // OUTPUT: 4
  ```
- Modules:
  - JavaScript modules = ES modules
  - Node.js modules = CommonJS modules
  - Using a module in HTML:
    ```HTML
    <script type="module">
      import { alertDisplay } from './alert.js';
      alertDisplay('module loaded');
    </script>
    ```

Link to [README](./README.md)
