
$('#skill1').click(function(event) {
	$('.skill2').addClass('display-none');
	$('.skill3').addClass('display-none');
	$('.skill4').addClass('display-none');
	$('.skill5').addClass('display-none');
	$('.skill6').addClass('display-none');
	$('.skill7').addClass('display-none');
	$('.skill1').removeClass('display-none');
});

$('#skill2').click(function(event) {
	$('.skill1').addClass('display-none');
	$('.skill3').addClass('display-none');
	$('.skill4').addClass('display-none');
	$('.skill5').addClass('display-none');
	$('.skill6').addClass('display-none');
	$('.skill7').addClass('display-none');
	$('.skill2').removeClass('display-none');
});

$('#skill3').click(function(event) {
	$('.skill2').addClass('display-none');
	$('.skill1').addClass('display-none');
	$('.skill4').addClass('display-none');
	$('.skill5').addClass('display-none');
	$('.skill6').addClass('display-none');
	$('.skill7').addClass('display-none');

	$('.skill3').removeClass('display-none');
});
$('#skill4').click(function(event) {
	$('.skill2').addClass('display-none');
	$('.skill3').addClass('display-none');
	$('.skill1').addClass('display-none');
	$('.skill5').addClass('display-none');
	$('.skill6').addClass('display-none');
	$('.skill7').addClass('display-none');

	$('.skill4').removeClass('display-none');
});
$('#skill5').click(function(event) {
	$('.skill2').addClass('display-none');
	$('.skill3').addClass('display-none');
	$('.skill4').addClass('display-none');
	$('.skill1').addClass('display-none');
	$('.skill6').addClass('display-none');
	$('.skill7').addClass('display-none');

	$('.skill5').removeClass('display-none');
});
$('#skill6').click(function(event) {
	$('.skill2').addClass('display-none');
	$('.skill3').addClass('display-none');
	$('.skill4').addClass('display-none');
	$('.skill5').addClass('display-none');
	$('.skill1').addClass('display-none');
	$('.skill7').addClass('display-none');

	$('.skill6').removeClass('display-none');
});
$('#skill7').click(function(event) {
	$('.skill2').addClass('display-none');
	$('.skill3').addClass('display-none');
	$('.skill4').addClass('display-none');
	$('.skill5').addClass('display-none');
	$('.skill6').addClass('display-none');
	$('.skill1').addClass('display-none');

	$('.skill7').removeClass('display-none');
});

