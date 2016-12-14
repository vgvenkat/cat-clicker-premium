/**=========== View ============ **/

var catListView = {
	
	init: function(){
		//just do it once

		
		this.render();
	},
	render : function() {
		
		var cats = controller.getCats();
		for (var i=0;i<cats.length;i++) {
			var cat = cats[i];
			var elemString = "<li><button>"+cat.name+"</button></li>";
			var elem = $(elemString);
			$(".cats").append(elem);
			
			elem.on("click", (function(cat){
				return function() {
					console.log("cat clicked");
					controller.setCurrentCat(cat);
					catImageView.render();
				};
			})(cat))
		}
	}
}
var catImageView = {
	init: function(){
		this.catImage = $(".catPicture");
		this.catImage.on("click", function(){
			controller.increaseCounter();
		});
		this.render();
	},
	render: function() {
		var cat = controller.getCurrentCat();
		$(".catName").text(cat.name);
		$(".catPicture").attr("src", cat.image);
		$(".clickCounter").text(cat.counter);
	}
}
/**=========== MODEL ============ **/
	var model = {
	currentCat: null,
	cats: [{
		name: "purr",
		image:"cat_picture1.jpeg",
		counter:0
	},{
		name: "meow",
		image:"cat_picture2.jpeg",
		counter:0
	},{
		name: "tigger",
		image:"cat_picture3.jpeg",
		counter:0
	},{
		name: "shadow",
		image:"cat_picture4.jpeg",
		counter:0
	},{
		name: "kitty",
		image:"cat_picture5.jpeg",
		counter:0
	}]
	}

/**=========== Controller ============ **/

var controller = {
	init : function() {
		model.currentCat = model.cats[0];

		catListView.init();
		catImageView.init();
	},
	getCurrentCat : function() {
		return model.currentCat
	},
	setCurrentCat : function(cat) {
		model.currentCat = cat;
	},
	getCats : function() {
		return model.cats;
	},
	addClickListener : function() {
		$(".cats").each(function(cat) {
			$(cat).click(function(){
				var clickedCat = findCat(cat);
				controller.increaseCounter(clickedCat);
				controller.showCat(clickedCat);
			});
		}) ;
	},
	increaseCounter : function() {
		model.currentCat.counter++;
		catImageView.render();
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


controller.init();
