---
layout: article.njk
tags: article
permalink: pieces/{{ title | slugify }}/index.html
date: 2022-03-02
title: manage vscode extensions
category: tools
description: manage your vscode extensions with another extension
---

**one thing** to make vscode more lighter and more zen is to reduce the amount
of installed extensions or themes. 

but for people like me who code in many languages, in each language, i usually 
install one or two extensions to improve syntax highlighting and ide completion. 
the result is: there are dozens of extensions installed, but only a few are 
usable and helpful at one moment.

instead of disabling them one by one, which is a cumbersome task, i
finally found an extension to rule them all.

introducing: [vscode profiles](https://marketplace.visualstudio.com/items?itemName=evald24.vscode-extension-profiles) 
by [@evald24](https://twitter.com/evald24)

<img class="w-full" src="{{ 'https://github.com/evald24/vscode-extension-profiles/raw/HEAD/assets/commands.png' | staticallyImg }}" />

with this extension, you can group multiple extensions by creating a `profile`,
then applying it so that only selected extensions are enabled, while rest 
that are not listed inside the profile got disabled.

...

hope this helps.
