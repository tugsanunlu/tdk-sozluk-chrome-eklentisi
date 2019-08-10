new Vue({
	el : "#app",
	data : {
		results : [],
		searchText : ""
	},
	methods : {
		getResult : function() {
			this.$http.get("http://sozluk.gov.tr/gts?ara=" + this.searchText).then(function(response) {
				this.results = response.data;
			});
		}
	},
	mounted(){
		this.$refs.searchText.focus();
	}
});