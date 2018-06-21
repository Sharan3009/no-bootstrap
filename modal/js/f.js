$(document).ready(()=>{
	$('#open').click(()=>{
		$('.modal').css('display','flex')
	})
	$('#close').click(()=>{
		$('.modal').css('display','none')
	})
	$(document).click((e)=>{
		if (e.target== document.getElementsByClassName('modal')[0]) {
			$('.modal').css('display','none')
		}
	})
})	
	
		





