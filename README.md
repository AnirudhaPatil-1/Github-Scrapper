# GitHub Trending Topics Scraper

## Project Demo

![github scrapper output image](https://github.com/AnirudhaPatil-1/Github-Scrapper/assets/73242321/0be2b8a2-2ef9-4e8b-a6ef-46051c4ba069)

## Technology Used

*_HTML, CSS, JavaScript, Cheerio/Puppeteer_*

## Project Description

The GitHub Trending Topics Scraper is a web scraping tool that allows you to explore trending topics on GitHub, identify top repositories within those topics, scrape their issues using Cheerio, and organize the collected issues into PDF files named after the repository, all within a dedicated folder named after the topic. This project provides an efficient way to stay updated with the latest and most relevant discussions happening within the GitHub community.

## Features

- Scrapes GitHub for trending topics.
- Identifies top repositories within the trending topics.
- Scrapes issues from the identified repositories using Cheerio.
- Organizes issues into PDF files.

## Steps to Set Up and Run

1. Initialize your project:
   ```bash
   npm init -y
   ```

2. Install required dependencies:
   ```bash
   npm install request cheerio fs path pdfkit
   ```

3. Create a `.gitignore` file and add the `node_modules` folder to it.

4. Initialize a Git repository and push it to GitHub:
   ```bash
   git init
   git status
   git add .
   git commit -m "Initial commit"
   git remote add origin <GitHub repository URL>
   git push -u origin master
   ```

5. Replace `<GitHub repository URL>` with the URL of your GitHub repository.

6. Modify your code to include the necessary imports:
   ```javascript
   const request = require('request');
   const cheerio = require('cheerio');
   const fs = require('fs');
   const path = require('path');
   const PDFDocument = require('pdfkit');
   ```

7. Replace 'node scraper.js' in the example usage with the appropriate command for running your scraper:
   ```bash
   node scraper.js --topics 3 --repos 5 --issues 10
   ```

## Sample Output

```
output/
├── Topic1/
│   ├── Repo1.pdf (Consists of issues)
│   ├── Repo2.pdf (Consists of issues)
│   ├── Repo3.pdf (Consists of issues)
│   ├── Repo4.pdf (Consists of issues)
│   ├── Repo5.pdf (Consists of issues)
├── Topic2/
│   ├── Repo1.pdf (Consists of issues)
│   ├── Repo2.pdf (Consists of issues)
│   ├── Repo3.pdf (Consists of issues)
│   ├── Repo4.pdf (Consists of issues)
│   ├── Repo5.pdf (Consists of issues)
├── Topic3/
│   ├── Repo1.pdf (Consists of issues)
│   ├── Repo2.pdf (Consists of issues)
│   ├── Repo3.pdf (Consists of issues)
│   ├── Repo4.pdf (Consists of issues)
│   ├── Repo5.pdf (Consists of issues)
```

In this combined output, each topic folder contains 5 sample PDFs, named "Repo1.pdf" to "Repo5.pdf," and each PDF consists of the respective repository's issues.

## Actual Ouput
```

```

Remember to replace placeholders such as `<GitHub repository URL>` with your actual information.

This project was created by [Anirudha Patil](https://github.com/AnirudhaPatil-1). 

