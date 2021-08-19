import firestore from 'firebase/app';

import { GruppeFB } from './gruppe-fb';

export class Todo {
    public id: string = '';
    public group: string = '';
    public groupobj: any;
    public subject: string = '';
    public subjectobj: any;
    public category: string = '';
    public description: string = '';
    public dueDate: firestore.firestore.Timestamp = firestore.firestore.Timestamp.now();
    public doneDate?: firestore.firestore.Timestamp = firestore.firestore.Timestamp.now();
    public doneByUser: string[] = [];

    // public get dueDateDisp(): Date{
    //   return this.dueDate.toDate();
    // }
    // public set dueDateDisp(val: Date){

    // }

    constructor (){
      // this.dueDateDisp = this.dueDate.toDate();
    }
  }
