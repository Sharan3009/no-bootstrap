$(document).ready(()=>{

	$('.accordion').click(function(){
		$(this).toggleClass('active-accordion') // adds class name active-accordion

		//logic to show "click to expand" and "click to close" appropriately while hovering on accordions
		let title = 'Click to expand';
		if( $(this).hasClass('active-accordion')){
       		title='Click to close'
    	}
		$(this).attr('title',title)
		
		// toggles the paragraph
		$(this).next('p').slideToggle(200)
	})
})	
	
		





