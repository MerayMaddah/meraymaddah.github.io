---
layout: archive
title: "Invited Talks"
permalink: /posts/
author_profile: true
---

<p>A collection of invited talks, presentations, and media appearances covering topics in comparative politics, international governance, and Middle East studies.</p>

{% assign sorted_posts = site.posts | sort: 'date' %}
{% for post in sorted_posts %}
  <div class="list__item">
    <article class="archive__item">
      <h2 class="archive__item-title" itemprop="headline">
        <a href="{{ post.url | absolute_url }}" rel="permalink">{{ post.title }}</a>
      </h2>
      <p class="archive__item-excerpt">
        <strong>{{ post.venue }}</strong>{% if post.location %}, {{ post.location }}{% endif %}
      </p>
    </article>
  </div>
{% endfor %}
