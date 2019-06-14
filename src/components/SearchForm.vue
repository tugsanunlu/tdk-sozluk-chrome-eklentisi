<template>
  <div class="input-group my-3">
    <input v-model="searchText" @keypress.enter="search($event)" type="text" class="form-control" placeholder="Aranacak kelime veya kelime grubu" ref="searchText">
  </div>    
</template>

<script>
export default {
  data() {
    return {
      searchText: ""
    }
  },
  methods: {
    search(e) {
      if(e.target.value)
        this.$emit("emitSearchText", this.searchText);
    }
  },
  mounted() {
    this.$refs.searchText.focus();
  }
}
</script>