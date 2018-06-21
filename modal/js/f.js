$(document).ready(()=>{

	$('#open').click(()=>{  // opens the modal
		$('.modal').css('display','flex')
	})
	$('#close').click(()=>{ // closes the modal
		$('.modal').css('display','none')
	})
	$(document).click((e)=>{  // closes modal by clikcing anywhere on the screen
		if (e.target== document.getElementsByClassName('modal')[0]) {
			$('.modal').css('display','none')
		}
	})
})	
	
		





