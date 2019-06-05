# Docker Container Hub
#### Built with [Eleventy](https://www.11ty.io/)

![docker hub preview](https://github.com/TDMW/dockercontainerhub/blob/master/img/preview.jpg)

Probably the most overly complicated list I'll ever build but who cares. I've got some Docker containers running on Pi's/my NAS at home and once in a while I need to restart them or adjust stuff. Most of the times I do this from my mobile phone, but I tend to forget the ports I mapped the containers to. I could just save them as bookmarks, keep a list somewhere in my notes, look them up in my history or do tons of stuff to remember the links to the ports. But I decided to play around with Eleventy and build a page that shows a list of all my containers, based on markdown files, which automatically deploys & rebuilds whenever I commit a new markdown file. Because why not.

### Installation/Setup

1. Clone this repo
2. run `npm install`
2. Add a `.md` file in the 'containers' folder or edit the default one
3. Use this markdown template: 
``` 
---
containerTitle: Container Title
containerDescription: Small description
containerLink: https://linktocontainer.com
containerLogo: https://linktologo.com/logo.png
---
```
4. Run `eleventy --serve` in the root of the project
5. Kaboom

