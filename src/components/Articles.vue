<template>
  <div class="article-wrap">
    <div v-for="(article, index) in articles" :key="index" class="article">
      <span>{{article.title}}</span>
      <span>{{article.body}}</span>
    </div>
  </div>
</template>

<script>
  import API from '../services/api';

export default {
  name: 'HelloWorld',
  data () {
    return {
      articles: []
    }
  },
  created(){
    API({
      method: 'get',
      url: '/api/article'
    }).then(response => {
      this.articles = response.data;
      console.log("articles - ",this.articles)
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.article-wrap{
  width: 1024px;
  margin: 0 auto;
}
</style>
