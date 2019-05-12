let tushar = {};

// create XHR object
tushar.createXHR = function(url, options){

	// xhr is not created yet
	let xhr = false;

	// create an xhr object
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else if(window.ActiveXObject){
		try {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		} catch(e) {
			xhr = false;
		}
	}

	if (xhr) {
		
		// default checking
		options = options || {};
		options.method = options.method || 'GET';
		options.date = options.data || {};

		// onreadystatechange response
		xhr.onreadystatechange = function(response){
			if ((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {
				var contentType = xhr.getResponseHeader('Content-Type');
				if (options.complete) {
					console.log(contentType);
					options.complete(xhr.responseText);
				}

			}
		}

		// create open request
		xhr.open(options.method, url, true);
		return xhr;

	}else{
		return false;
	}


};

// make ajax functionlity
tushar.ajax = function(url, options){
	//open a xhr request
	let xhr = tushar.createXHR(url, options);

	// send data to server
	if (xhr) {
		xhr.send(null);
	}

};