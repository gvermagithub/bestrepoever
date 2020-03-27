<aura:application extends="force:slds" >
    <aura:handler name="cmpEvent" event="c:EventChildToParent" action="{!c.handleComponentEvent}"/>
    <aura:attribute name="SearchString" type="String" default=""/>
    <lightning:input name="Search Here" value="{!v.SearchString}" placeholder="type your search here..." access="public" onchange="{!c.handleStringChange}"/>
    <c:TypeAheadPractice2ChildComp aura:id="Child1" ObjectName="Account" SearchString="{!v.SearchString}" />
    <br/>
    <c:TypeAheadPractice2ChildComp aura:id="Child2" ObjectName="Contact" SearchString="{!v.SearchString}" />
</aura:application>