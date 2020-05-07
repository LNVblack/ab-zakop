menu.onclick = function VisibleMenu(){
    var x = document.getElementById('mynav');
    if (x.className === "topnav"){
        x.className += " responsive";
    } else{
        x.className = "topnav";
    }
}
  
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку, скоро наш специалист свяжется с вами!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});