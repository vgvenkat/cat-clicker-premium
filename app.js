/**=========== View ============ **/

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
			var elemString = "<li><button class='cats'>"+this.cats[i]+"</button></li>";
			var elem = $(elemString);
			catItems.push(elemString);

			elemString.on("click", (function(){})())
		}
		$(".cats").append(catItems.join(""));
	}
}
var catImageView = {
	init: {

	}
}
/**=========== MODEL ============ **/
	var model = {
	currentCat: null,
	cats: [{
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
	}

/**=========== Controller ============ **/

var controller = {
	addClickListener : function() {
		$(".cats").each(function(cat) {
			$(cat).click(function(){
				var clickedCat = findCat(cat);
				controller.increaseCounter(clickedCat);
				controller.showCat(clickedCat);
			});
		}) ;
	},
	increaseCounter : function(cat) {
		cat.counter ++;
	},
	showCat : function(cat) {
		console.log(cat);
	},
	findCat : function(cat) {
		var catName = $(cat).text();
		return catData.filter(function(cat) {
			return cat.name == catName;
		});

	}
}

catListView.render();
controller.addClickListener();
