public class TypeaheadPractice2Controller {
    @AuraEnabled
    public Static List<sObject> recordNames(String sobjName, String srchStr){

			String qyeryStr = 'Select Id, Name from '+sobjName+' where name like \'%'+srchStr+'%\'';
            List<sObject> lstObjNames = DataBase.query(qyeryStr);
            return lstObjNames;            
        
    }
}