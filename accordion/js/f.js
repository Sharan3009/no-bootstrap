$(document).ready(()=>{
	$('.accordion').click(function(){
		$(this).toggleClass('active-accordion')

		let title = 'Click to expand';
		if( $(this).hasClass('active-accordion')){
       		title='Click to close'
    	}
		$(this).attr('title',title)
		
		$(this).next('p').slideToggle(200)
	})
})	
	
		





