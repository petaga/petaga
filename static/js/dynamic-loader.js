var data = {data: [
  	{ "firstname": "Ray",
  		"lastname": "Villalobos",
  		"category": "Front End",
  		"title": "Bootstrap & CSS Preprocessors",
  		"image": "http://barcampdeland.org/images/speaker_rayvillalobos.jpg",
  		"link": "http://iviewsource.com",
  	},
  	{ "firstname": "Sam",
  		"lastname": "Winslow",
  		"category": "Front End",
  		"title": "Swag & Good Grades",
  		"image": "http://placehold.it/400",
  		"link": "http://samwinslow.me/",
  	},
  	{ "firstname": "Andy",
  		"lastname": "Plaisted",
  		"category": "Front End",
  		"title": "Awesome things @ Morgan Stanley",
  		"image": "http://placehold.it/400",
  		"link": "http://samwinslow.me/",
  	}
]};
$(document).ready(function(){
  $('.view').each(function(i, obj){
    dataTemplate = $(obj).attr("data-template");
    parseIn = $(obj).html().replace(/\[\[/g,"{{").replace(/\]\]/g,"}}");
    var compiled = Mustache.to_html(parseIn, data);
    $(obj).html(compiled);
  });
});
