---
layout: article.njk
tags: article
permalink: pieces/{{ title | slugify }}/index.html
date: 2022-05-11
title: remove all git tag except...
category: tips-tricks
description: how to remove all git tag except some selected tag
---

this will delete all other git tags except the `4.1` tag.

```sh
git tag | grep -v "4.1" | xargs -n 1 -i% git tag -d %
```

if you want to also delete the remote tag:

```sh
git tag | xargs -n 1 -i% git push origin :refs/tags/%
```

attribution:
- [https://gist.github.com/shsteimer/7257245](https://gist.github.com/shsteimer/7257245)

...

hope this helps.
