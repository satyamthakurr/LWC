import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
export default class TestDemo extends LightningElement {
    selectedContact;
    @wire(getContactList) contacts;
    handleSelect(event) {
        const contactId = event.detail;
        this.selectedContact = this.contacts.data.find(
            (contact) => contact.id === contactId
        );
    }
    
}