# EMNLP website

* Credits: This website is heavily based on the template of EMNLP 2020 by Andy MacKinlay, see [original source code](https://github.com/emnlp2020/emnlp2020-website). 

* To test the website locally, run:
```
$ gatsby build
$ gatsby serve
```

* To modify the website, just modify the files directly, `git push` on the master branch will trigger a new deploy directly on [2021.emnlp.org](https://2021.emnlp.org/). Please make sure that you test the website locally before doing such a push :) Push to a branch for anything that should be saved but breaks the website.

* The main individual pages can be modified in src/pages/\*/index.md

* To write a new blog post, create a new markdown file in src/pages/blog named year-month-day-title.md like for example 2020-11-17-announcing-emnlp.md. The header needs to look like this:

```
---
templateKey: blog-post-page
title: "title"
date: year-month-day
seo:
  title: "Title"
  description: >- 
    description
---
```

* The information about organizers, sponsors, tutorials and workshops pages are read from their respective files in src/data/. The organizers pictures are in src/img/org-committee. To add someone's picture, add the figure named as lowercased first name underscore lowercased last name dot png or jpg or other. Same goes for the sponsors logos in src/img/sponsors.

* To modify the max number of news or blog posts that appear on the home page, modify MAX_BLOG_POSTS and MAX_NEWS_ITEMS in src/pages/index.js
