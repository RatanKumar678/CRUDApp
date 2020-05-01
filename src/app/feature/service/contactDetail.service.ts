import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable()

export class ContactDetailService {
    /**
     * @var contactDetail
     * Will Hold contact Detail
     */
    private contactDetail: Contact[] = [
        {
            fname: 'Ratan',
            lname: 'Kumar',
            email: 'ratan.kumar67890@gmail.com',
            phone: 9422655138,
            status: false
        },
        {
            fname: 'Walter',
            lname: 'White',
            email: 'ratan.kumar67890@gmail.com',
            phone: 9422655138,
            status: false
        },
        {
            fname: 'Jesse',
            lname: 'Pinkman',
            email: 'ratan.kumar67890@gmail.com',
            phone: 9422655138,
            status: false
        },
        {
            fname: 'Test',
            lname: 'Project',
            email: 'ratan.kumar67890@gmail.com',
            phone: 9422655138,
            status: false
        },
    ];

    constructor() { }

    /**
     * @method getContactList
     * To get Contact List
     */
    getContactList() {
        return this.contactDetail;
    }

    /**
     * @method getContactDetail
     * @param index
     * To get Contact Detail depends on Index
     */
    getContactDetail(index) {
        return this.contactDetail[index];
    }

    /**
     * @method addContact
     * @param data
     * Method to add user Detail to contact Detail list
     */
    addContact(data) {
        this.contactDetail.unshift(data);
    }
    /**
     * @method updateContactList
     * @param index
     * @param data
     * Method to update user Detail to contact Detail list using index and user Data
     */
    updateContactList(index, data) {
        this.contactDetail[index] = data;
    }
    /**
     * @method removeContact
     * @param index
     * Method to remove user Detail from contact Detail list using index
     */
    removeContact(index) {
        this.contactDetail.splice(index, 1);
    }
    /**
     * @method checkEmailAndPassword
     * @param index
     * Method to check Email And Password
     */
    checkEmailAndPassword(email: any, password: any) {
        if (email === 'ratan@test.com' && password === '12345') {
            sessionStorage.setItem('email', email);
            return true;
        } else {
            return false;
        }
    }
}
