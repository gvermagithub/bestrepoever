({
	handleStringChange : function(component, event, helper) {
        var childObj = component.find('Child1');
        component.find('Child1').set('v.SearchString', component.get("v.SearchString"));
        var childObj2 = component.find('Child2');
        component.find('Child2').set('v.SearchString', component.get("v.SearchString"));
        childObj.callMethodFromParent();
        childObj2.callMethodFromParent();
	},
    handleComponentEvent : function(component, event, helper) {
        var name = event.getParam("Name");
        var Ids = event.getParam("Ids");
        alert(name+ '====' +Ids);
    }
})