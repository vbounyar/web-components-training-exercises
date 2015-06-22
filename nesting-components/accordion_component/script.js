var accordions = Array.prototype.slice.call(document.querySelectorAll('.accordion-component'));



accordions.forEach(function(accordion) {

  // Made into arrays from the notes
  var allContent = Array.prototype.slice.call(accordion.querySelectorAll('.content'));
  
  var sections = Array.prototype.slice.call(accordion.querySelectorAll('.section'));
  
  
  sections.forEach(function(section) {
    var contents = Array.prototype.slice.call(section.querySelectorAll('.content'));
	/*section.querySelector('.content');*/
	

	  section.querySelector('h2').addEventListener('click', function() {
	  

	  var closed = content.classList.contains('closed');
	  
	  allContent.forEach(function(con) {
			con.classList.add('closed');
		
	  });
	  
	  closed ? content.classList.remove('closed') : null;

	 
	});
	
  });
  
});

