<template>
  <div id="app">
    <div class="container-fluid mt-3">		
      <h6><strong>TDK Türkçe Sözlük</strong></h6>
      <searchForm @emitSearchText="getResults" />
      <Results :results="results" />
      <div v-if="error" class="alert alert-danger">sozluk.gov.tr adresinden veri alınamadı.</div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";

export default {
  components: {
    SearchForm,
    Results
  },
  data() {
    return {
      results: [],
      error: false   
    }
  },
  methods: {
    getResults(e){
      this.$http.get(`http://sozluk.gov.tr/gts?ara=${e}`).then(response => {
        this.results = response.data;
      }, response => {
        this.error = true;
      });
    }
  }
}
</script>

<style scoped>
  /* important css */
  .container-fluid{width: 350px !important;}
</style>
