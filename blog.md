---
layout: default
permalink: /blog/
---

<div class="d-flex mt-5">
  {% for post in site.posts %}
<div class="card m-2 float-left" style="width:30vw" >
  <div class="card-body">
    <h5 class="card-title">{{post.title}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{}}</h6>
    <p class="card-text">{{post.excerpt}}</p>
    <a href="{{post.url}}" class="card-link">Read More.</a>
    
  </div>
</div>

{% endfor %}

</div>
