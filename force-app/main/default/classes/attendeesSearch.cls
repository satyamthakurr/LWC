public class attendeesSearch {
public static void getEvents() { 
          List <eventRelation> Erelates =[select RelationId from eventRelation where eventID=: '00U5i00000PWTFvEAP']; 

    system.debug('ERELATES______________________________________'+ERELATES);


    Set<Id> erelateSet = (new Map<Id,SObject>(Erelates )).keySet();
    system.debug('erelateSet================================='+erelates);


    List <user> Users =[select name from User where id IN: erelateSet ];

    system.debug('userslist====================='+Users);
   // return Users;
    }
}