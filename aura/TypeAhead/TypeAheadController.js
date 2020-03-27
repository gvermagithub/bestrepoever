({
	callQuery : function(component, event, helper) {
		var action = component.get('c.returnRecords');
        action.setParams({ ObjectName : component.get("v.sObjectName") });
        action.setCallback(this, function(a){
            var state = a.getState(); // get the response state
            if(state == 'SUCCESS') {
                var obj1 = a.getReturnValue();
                component.set("v.sObjectList",obj1);
            }
            else{
                alert(a.getError()[0].message);
            }
        });
        $A.enqueueAction(action);
	},
    searchValues : function(component, event, helper) {
        var searchResults=[];
        var inputval = component.get("v.SelTypeAheadName");
        var allValues = component.get("v.sObjectList");
        for(var i in allValues){
            if(allValues[i].Name.indexOf(inputval) == 0){
            	searchResults.push(allValues[i]);
            }
        }
        component.set("v.lstSearchValue",searchResults);
        $A.util.addClass(component.find("idTypeAheadBox"), "slds-theme_shade");
        $A.util.addClass(component.find("idTypeAheadBox"), "slds-box");
    },
    selectValue : function(component, event, helper) {
        component.set("v.SelTypeAheadName",event.currentTarget.dataset.name);
        component.set("v.SelTypeAheadId",event.target.id);
        $A.util.removeClass(component.find("idTypeAheadBox"), "slds-theme_shade");
        $A.util.removeClass(component.find("idTypeAheadBox"), "slds-box");
        component.set("v.lstSearchValue",[]);
        alert("INNER COMP"+component.get("v.SelTypeAheadId"));
        var cmpEvent = component.getEvent("cmpEvent");
        cmpEvent.setParams({"Name" : component.get("v.SelTypeAheadName")});
        cmpEvent.setParams({"Ids" : component.get("v.SelTypeAheadId")});
        cmpEvent.fire();
    }
    
})