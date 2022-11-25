import { LightningElement, track, wire } from 'lwc';
import getContactMap from '@salesforce/apex/ContactController.getContactMap';
import getContactList from '@salesforce/apex/ContactController.getContactList';
export default class MapDemoLWC extends LightningElement {
    @track error;
    @track values;
    @track maps;
    


   @wire(getContactList)
        wireData({ error, data }){
            if (data) {
                this.values = data;
                console.log('data::'+data);
            }
            if (error) {
                this.error = error;
                console.log(error);
            }
        }

    handleClick() {
     getContactMap().then(result=>{
         console.log('results::'+result);
         const options = [];
         for (let key in result) {
             if (key) {
                 options.push({
                     key: key,
                     value: result
                 })
             }
             
         }
         console.log('options::' + options);
         this.maps = options;
         console.log('maps::' + maps);
     })
         .catch(error => {
             this.error = error;
        })
    }
}