new Vue({
	el: "#app",
	data: {
		results: [],
		searchText: "",
		loaderStatus: false
	},
	methods: {
		getResult: function () {
			this.loaderStatus = true;
			this.results = [];
			this.$http.get(`http://sozluk.gov.tr/gts?ara=${this.searchText}`).then(resp => {
				this.loaderStatus = false;
				this.results = resp.data;
			});
		}
	},
	mounted() {
		this.$refs.searchText.focus();
	}
});