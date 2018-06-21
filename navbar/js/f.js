$(document).ready(()=>{

	$('.bar').click(()=>{  
		$('.bar').toggleClass('click-blue')  // changes color to blue
		$('#dropdown').slideToggle(200).css('display','flex');
	})
	$(document).click((e)=>{ // slides up the dropdown by clicking anywhere on the screen
		if (e.target== document.getElementsByTagName('body')[0]) {
			$('#dropdown').slideUp(200)
			$('.bar').removeClass('click-blue')
		}
	})
})	
	
		





