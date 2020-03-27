({
	doInit : function(cmp, event, helper) {
		var action = cmp.get('c.recordNames');
        action.setParams({ sobjName : cmp.get("v.ObjectName"), srchStr : cmp.get("v.SearchString")});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.sObject", response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                //DO SOMETHING
                alert('INCOMP');
            }
            else if (state === "ERROR") {
                alert("ERROR");
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                }   
                else {
                    alert('ERROR UNKNOWN');
                        console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
	}
})