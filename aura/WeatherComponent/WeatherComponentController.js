({
	callAPI : function(component, event, helper) {
        var zip =component.find("inputzip").get("v.value");
        var country =component.find("inputcountry").get("v.value");
		var action = component.get('c.getResults1');
        action.setParams({  zipcode : zip, country : country  });
        action.setCallback(this, function(a){
            var state = a.getState(); // get the response state
            if(state == 'SUCCESS') {
                var obj1 = a.getReturnValue();
                component.set("v.apiresponse",JSON.parse(JSON.stringify(obj1)));
            }
        });
        $A.enqueueAction(action);
	}
})