# GitHub Trending Topics Scraper

# Demo Image

![gitScrapperCropped](https://github.com/AnirudhaPatil-1/Github-Scrapper/assets/73242321/c746bd2e-38e9-4a03-95bc-288133bf6a6f)

## Project Description

The GitHub Trending Topics Scraper is a Python-based web scraping tool that allows you to explore trending topics on GitHub, identify top repositories within those topics, scrape their issues, and organize the collected issues into PDF files named after the repository, all within a dedicated folder named after the topic. This project provides an efficient way to stay updated with the latest and most relevant discussions happening within the GitHub community.

## Features

- Scrapes GitHub for trending topics.
- Identifies top repositories within the trending topics.
- Scrapes issues from the identified repositories.
- Organizes issues into PDF files.

## Example Usage

eg.
```bash
python scraper.py --topics 3 --repos 5 --issues 10
```

This command will scrape the top 3 trending topics on GitHub, pick the top 5 repositories within each topic, and scrape 10 issues from each repository. The issues will be compiled into PDF files, and the PDFs will be stored in a folder named after the repository, within the corresponding topic folder.

## Sample Output

```
output/
├── Topic1/
│   ├── Repo1/
│   │   ├── issue1.pdf
│   │   ├── issue2.pdf
│   │   └── ...
│   ├── Repo2/
│   │   ├── issue1.pdf
│   │   ├── issue2.pdf
│   │   └── ...
│   └── ...
├── Topic2/
│   ├── Repo1/
│   │   ├── issue1.pdf
│   │   ├── issue2.pdf
│   │   └── ...
│   ├── Repo2/
│   │   ├── issue1.pdf
│   │   ├── issue2.pdf
│   │   └── ...
│   └── ...
└── ...
```

