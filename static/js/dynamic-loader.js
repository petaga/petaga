var templates = {
  "test1": "<ul>{{#data}}<li>{{title}}</li>{{/data}}</ul>"
};
// Sample, not a 2d array
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
  	}
]};
$(document).ready(function(){
  $('.view').each(function(i, obj){
    id = $(obj).attr("id");
    var compiled = Mustache.to_html(templates[id], data);
    $(obj).html(compiled);
  });
});
