(function (t) {
	'use strict';

	let button = document.getElementsByClassName('readme')[0];
	button.onclick = function(){
		
		// Making Ajax Request
		request();
		
		return false;
	};

	let request = function(){
		t.ajax('file.txt', {
			method: 'GET',
			data: {},
			complete: function(response){
				document.getElementsByClassName('box')[0].innerHTML = response;
			}
		});
	};

}(tushar));