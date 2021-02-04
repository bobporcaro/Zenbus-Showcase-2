var 
burgerButton;

/**
 * Toggle class showPanel on menu
 * @param {[[Type]]} evt [[Description]]
 */
function managePanel(evt){
	if(this.classList.contains("show-panel")){
		this.classList.remove("show-panel")
	}else{
		this.classList.add("show-panel")
	}
}

(function(){
	burgerButton = document.getElementById("burgerButton");
	burgerButton.addEventListener("click", managePanel.bind(burgerButton));
})();

/** Scroll & menu behaviour */
document.body.onscroll = function(){ if (document.scrollingElement.scrollTop === 0) { document.body.classList.remove("menu-color"); } else { document.body.classList.add("menu-color"); } };