$( document ).ready(function() {
			 
	// Initialize strings
	$('#resumeText').html(ST_resumeText);

	$(document).foundation();
			 
	$(function() {
		$('.brandico-github').click(function(){ //link that is clicked on
			window.location = 'http://github.com/mbrowngo'; //load new page
			return false;
		});
		
		$('.brandico-linkedin').click(function(){ //link that is clicked on
			window.location = 'http://www.linkedin.com/profile/view?id=23853214'; //load new page
			return false;
		});
		
		$('.brandico-wordpress').click(function(){ //link that is clicked on
			window.location = 'http://mossbeachdevelopment.wordpress.com/'; //load new page
			return false;
		});
		
		$('.brandico-twitter').click(function(){ //link that is clicked on
			window.location = 'http://twitter.com/MattBrownMBD'; //load new page
			return false;
		});
		
		$('.homeLink').click(function(){ //link that is clicked on
			$('.resumeSectionClass,.portfolioSectionClass').css('display','none');
			$('.resumeLink,.portfolioLink').removeClass('active');
			$('.aboutSectionClass').css('display','block');
			$('.homeLink').addClass('active');
			return false;
		});
		
		$('.resumeLink').click(function(){ //link that is clicked on
			$('.aboutSectionClass,.portfolioSectionClass').css('display','none');
			$('.homeLink,.portfolioLink').removeClass('active');
			$('.resumeSectionClass').css('display','block');
			$('.resumeLink').addClass('active');
			return false;
		});
		
		$('.portfolioLink').click(function(){ //link that is clicked on
			$('.aboutSectionClass,.resumeSectionClass').css('display','none');
			$('.homeLink,.resumeLink').removeClass('active');
			$('.portfolioSectionClass').css('display','block');
			$('.portfolioLink').addClass('active');
			return false;
		}); 
	});	
});