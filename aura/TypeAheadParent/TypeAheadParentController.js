({
	handleComponentEvent : function(component, event, helper) {
		var acname = event.getParam("Name");
        var acid = event.getParam("Ids");
    	component.set("v.AccName" , acname);
        component.set("v.AccId" , acid);
        alert(acname);
        alert(acid);
	}
})