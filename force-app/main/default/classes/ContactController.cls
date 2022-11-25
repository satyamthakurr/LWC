public with sharing class ContactController {
@AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        List<Contact> conList = [Select id, Name, Phone from Contact Limit 10];
        System.debug('conList'+conList);
        return conList;
    }


    @AuraEnabled(cacheable=true)
    public static Map<Integer,String> getContactMap(){
        Map<Integer, String> conMap = new Map<Integer, String>();
        conMap.put(1,'Satyam');
        conMap.put(2,'Vatsal');
        conMap.put(3,'Yash');
        conMap.put(4,'Manuj');
        return conMap;
    }
}