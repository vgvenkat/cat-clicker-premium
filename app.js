var catListView = {
	
	init: function(){
		var self = this;
		this.cats = [];
		 catData.forEach(function(cat) {
			self.cats.push(cat.name);
		});
		console.log(this.cats)
	},
	render : function() {
		catListView.init();
		var catItems = []
		for (var i=0;i<this.cats.length;i++) {
			catItems.push("<li><button>"+this.cats[i]+"</button></li>");
		}
		$(".cats").append(catItems.join(""));
	}
}
	var catData = [{
		name: "purr",
		image:"cat_picture1.jpg",
		counter:0
	},{
		name: "meow",
		image:"cat_picture2.jpg",
		counter:0
	},{
		name: "tigger",
		image:"cat_picture3.jpg",
		counter:0
	},{
		name: "shadow",
		image:"cat_picture4.jpg",
		counter:0
	},{
		name: "kitty",
		image:"cat_picture5.jpg",
		counter:0
	}]
var catImageView = function() {

}
catListView.render();
