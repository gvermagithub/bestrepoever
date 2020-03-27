public class TypeAheadController {
    @AuraEnabled
    public static List<sobject> returnRecords(String ObjectName){
        String queryStr = 'Select id,name from '+ObjectName;
        System.debug('------->>>'+queryStr);
        return Database.query(queryStr);
    }
}