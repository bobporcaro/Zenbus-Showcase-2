function moveToDir(langDir) {
	var root = "/";
	
	if(langDir != "fr"){
		root += langDir ;
	}
	
	window.location.href = root + "/";
	
}
function getLang() {
	
	var pathname = (window.location !== window.parent.location)
            ? window.parent.location.pathname
            : window.location.pathname;
	
	
	
	
	
	var langPath = pathname.split("/")[1];
	
	if( langPath != "en" && langPath != "es"){
		return langPath = "fr";;
	}
	
	return langPath;
	//return document.documentElement.lang;
}
