/**=========== View ============ **/

var catListView = {
	
	init: function(){
		//just do it once

		$(".cats").empty();
		this.render();
	},
	render : function() {
		$(".cats").empty();
		var cats = controller.getCats();
		for (var i=0;i<cats.length;i++) {
			var cat = cats[i];
			var elemString = "<li><button>"+cat.name+"</button></li>";
			var elem = $(elemString);
			$(".cats").append(elem);
			
			elem.on("click", (function(cat){
				return function() {
					
					controller.setCurrentCat(cat);
					catImageView.render();
					adminView.render();
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

var adminView = {
	init: function() {
		$(".catForm").hide();

		$(".admin").on("click", function(e){
			e.preventDefault();
			controller.setAdmin(true);
			
		});
		
	},
	toggleForm : function() {
		var status = model.adminMode;
		if (status) {
			$(".catForm").show();
			this.render();
		}
		else $(".catForm").hide();
	},
	render : function() {
		var cat = controller.getCurrentCat();
		
		$("#name").val(cat.name);
		$("#imgURL").val(cat.image);
		$("#clicks").val(cat.counter);

		$(".cancelButton").on("click", function(e){
			e.preventDefault();
			controller.setAdmin(false);
		});
		var savedCat = {};
		$(".saveButton").on("click", function(e){
			e.preventDefault();
			savedCat.name = $("#name").val();
			savedCat.image = $("#imgURL").val();
			savedCat.counter = $("#clicks").val();

			controller.catSaved(savedCat);
		});
	}
}
/**=========== MODEL ============ **/
	var model = {
	currentCat: null,
	adminMode : false,
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
		adminView.init();
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
	increaseCounter : function() {
		model.currentCat.counter++;
		catImageView.render();
	},
	setAdmin : function(status) {
		model.adminMode = status;
		adminView.toggleForm();
	},
	catSaved : function(cat) {
		console.log(cat)
		var catIndex = model.cats.indexOf(model.currentCat);
		
		model.currentCat = cat;
		model.cats[catIndex] = cat;
		console.log(model.cats)
		catImageView.render();
		catListView.render();
	}
}


controller.init();
