permanentRating = false;
rating = 0;
$(document).ready(function(){
	$('[rel="tooltip"]').tooltip();
});
function highlight(n){
	for(var i=1; i<=5; i++){
		$('#star'+i+' .glyphicon-star-empty').show();
		$('#star'+i+' .glyphicon-star').hide();
	}
	for(var i=n; i>0; i--){
		$('#star'+i+' .glyphicon-star-empty').hide();
		$('#star'+i+' .glyphicon-star').show();
	}
	if(!permanentRating){
		if(n===0){
			for(var i=1; i<=5; i++){
				$('#star'+i+' .glyphicon-star-empty').show();
				$('#star'+i+' .glyphicon-star').hide();
			}
		}
	}
	else if(n===0){
		highlight(rating);
	}
}
function rate(n){
	rating = n;
	permanentRating = true;
	highlight(n);
	document.forms.review.review_rating.value = rating;
}
function showButtons(review){
	$("#helpful-buttons",review).show();
}
function hideButtons(review){
	$("#helpful-buttons",review).hide();
}
function vote(id, action, selector){
	//NOTE: URL not good for distribution
	$.ajax({ url: '/project/ratings/vote.php',
	         data: {id: id, action: action},
	         type: 'post',
	         success: function(output) {
	                    $("#"+id+" #helpful-text").html(output);
						$("#"+id+" #helpful-buttons").html('<small>Thanks for voting!</small>');
	         }
	});
}
$("#checkwarning").hide();
function validateReview(){
	var bad = false;
	$("[required]").each(function(){
		if( !$(this).val() ) {
			$(this).parents("div.form-group").addClass('has-error');
			bad = true;
		}
	});
	if(bad){
		$("#checkwarning").show();
		return false;
	} else {
		$("#checkwarning").hide();
		$('form[name="review"]').submit();
	}
}

// Javascript to enable link to tab
var url = document.location.toString();
if (url.match('#')) {
    $('.nav-tabs a[href=#'+url.split('#')[1]+']').tab('show') ;
} 

// Change hash for page-reload
$('.nav-tabs a').on('shown', function (e) {
    window.location.hash = e.target.hash;
})