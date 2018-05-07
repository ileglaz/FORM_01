var $p = $('p');
$p.on('click', function(event) {
  var date = new Date(event.timeStamp);
	$p.text("Vous avez cliqué sur : " + date)
});