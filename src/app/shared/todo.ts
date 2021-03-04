import firestore from 'firebase/app';

export interface Todo {
    id: string;
    group: string;
    subject: string;
    category: string;
    description: string;
    dueDate: firestore.firestore.Timestamp;
    doneDate?: firestore.firestore.Timestamp;
  }
