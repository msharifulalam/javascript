(function (t) {
	'use strict';

	let button = document.getElementsByClassName('readme')[0];
	button.onclick = function(){
		
		// Making Ajax Request
		request();
		
		return false;
	};

	let request = function(){
		t.ajax('file.xml', {
			method: 'GET',
			data: {},
			complete: function(response){
				console.log(response);
			}
		});
	};

}(tushar));