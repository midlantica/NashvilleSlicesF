---
title: A cool title
excerpt: Lorem Ipsum is simply dummy text.
---

<!-- // Import any Vue Component. Even other .md files! -->
import colorBar from '~/components/colorBar.vue'
<!-- import AboutUs from '~/sections/AboutUs.md' -->

<!-- // Import any JSON if you need data. -->
<!-- import data from '~/data/youtube.json' -->

### A cool title!

// Use front-matter fields anywhere.
# {{ $frontmatter.title }}
> {{ $frontmatter.excerpt }}

// Use your imported Vue Components.
<colorBar/>
<!-- <AboutUs /> -->