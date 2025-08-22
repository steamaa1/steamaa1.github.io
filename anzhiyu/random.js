var posts=["2025/08/09/hello-world/","2025/08/22/关于那些我创作的歌词/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };