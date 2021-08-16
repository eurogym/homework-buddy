(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\git\Eurogym\homework-buddy\src\main.ts */"zUnb");


/***/ }),

/***/ "3OGU":
/*!**************************************************!*\
  !*** ./src/app/shared/gruppe-fb-list.service.ts ***!
  \**************************************************/
/*! exports provided: GruppeFBListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruppeFBListService", function() { return GruppeFBListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "CcaC");







let GruppeFBListService = class GruppeFBListService {
    constructor(firestore, afAuth, usrService) {
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.usrService = usrService;
        this.gruppen$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])();
        this.userId = '';
        this.afAuth.authState.subscribe(state => {
            if (state === null || state === void 0 ? void 0 : state.uid) {
                this.userId = state.uid;
                this.gruppen$ = firestore.collection('gruppen', ref => ref.orderBy('Gruppenname'))
                    .valueChanges({ idField: 'id' });
            }
            else {
                this.userId = '';
                this.gruppen$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])();
            }
        });
    }
    getUsersGroups() {
        return this.firestore.collection('gruppen', ref => ref.orderBy('Gruppenname'))
            .valueChanges({ idField: 'id' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data.filter(grp => this.usrService.memberGroupsArr.indexOf(grp.id) !== -1)));
    }
    getGroupbyId(grpId) {
        // return this.firestore.doc<GruppeFB>('gruppen/' + grpId).valueChanges();
        return this.firestore.collection('gruppen', ref => ref.where('id', '==', grpId).orderBy('Gruppenname'))
            .valueChanges({ IdField: 'id' });
    }
    addGruppe(Gruppenname, Beschreibung) {
        this.firestore.collection('gruppen').add({ Gruppenname: Gruppenname, Beschreibung: Beschreibung, userUid: this.userId });
    }
    deleteGruppeById(id) {
        if (confirm('Wollen Sie wirklich Löschen?'))
            this.firestore.doc('gruppen/' + id).delete();
    }
    updateGruppeById(gruppen) {
        this.firestore.doc('gruppen/' + gruppen.id).update({ Gruppenname: gruppen.Gruppenname });
    }
};
GruppeFBListService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
GruppeFBListService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], GruppeFBListService);



/***/ }),

/***/ "6ad2":
/*!*******************************************************!*\
  !*** ./src/app/add-faecher/addFaecher.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin-right: 10px;\n}\n\n.date {\n  display: inline-block;\n  width: 100px;\n}\n\ntable {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZEZhZWNoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoiYWRkRmFlY2hlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxudGFibGV7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "7igb":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bar-chart > div {\n  height: 40px;\n  margin-bottom: 10px;\n  white-space: nowrap;\n}\n.bar-chart .todo-bar {\n  background-color: #03a9f4;\n  height: 40px;\n}\n.bar-chart .done-bar {\n  background-color: #4caf50;\n  height: 40px;\n}\ntable {\n  width: 100%;\n}\n.create {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQURSO0FBSUk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFGUjtBQUtBO0VBQU8sV0FBQTtBQURQO0FBR0E7RUFBUSxZQUFBO0FBQ1IiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhci1jaGFydCB7XHJcbiAgICA+ZGl2IHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIC50b2RvLWJhciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRvbmUtYmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxufVxyXG50YWJsZSB7d2lkdGg6IDEwMCU7XHJcbn1cclxuLmNyZWF0ZXttYXJnaW46IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "8UEh":
/*!*****************************************************!*\
  !*** ./src/app/add-faecher/addFaecher.component.ts ***!
  \*****************************************************/
/*! exports provided: FaecherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaecherComponent", function() { return FaecherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addFaecher_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addFaecher.component.html */ "h5xU");
/* harmony import */ var _addFaecher_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addFaecher.component.scss */ "6ad2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_addFaecher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/addFaecher.service */ "VxgE");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/user.service */ "CcaC");






let FaecherComponent = class FaecherComponent {
    constructor(FaecherService, usrService) {
        this.FaecherService = FaecherService;
        this.usrService = usrService;
        this.Fachname = '';
        this.Fachbeschreibung = '';
        this.displayedColumns = ['Fachname', 'Fachbeschreibung', 'Löschen'];
    }
    ngOnInit() {
    }
    addFach() {
        if (this.Fachname) {
            this.FaecherService.addFach(this.Fachname, this.Fachbeschreibung);
            this.Fachname = '';
            this.Fachbeschreibung = '';
        }
    }
};
FaecherComponent.ctorParameters = () => [
    { type: _shared_addFaecher_service__WEBPACK_IMPORTED_MODULE_4__["addFaecherListService"] },
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
FaecherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fach',
        template: _raw_loader_addFaecher_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addFaecher_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FaecherComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBrj4zqL8pALwADBTly446FirqqSQNBMNg",
        authDomain: "todolist-demo-e8008.firebaseapp.com",
        databaseURL: "https://todolist-demo-e8008.firebaseio.com",
        projectId: "todolist-demo-e8008",
        storageBucket: "todolist-demo-e8008.appspot.com",
        messagingSenderId: "120790186589",
        appId: "1:120790186589:web:d1f3ecdff4b808f6996bb4"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CcaC":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let UserService = class UserService {
    constructor(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
        this.memberGroupsArr = [];
        this.UserId = "";
        this.currentUser$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])();
        this.getUser();
    }
    getUser() {
        this.afAuth.authState.subscribe(state => {
            if (state === null || state === void 0 ? void 0 : state.uid) {
                let userUid = state.uid;
                let userDoc = this.db.collection('users').doc(userUid);
                this.currentUser$ = userDoc.valueChanges();
                this.currentUser$.subscribe(u => {
                    if (u === null || u === void 0 ? void 0 : u.memberingroups)
                        this.memberGroupsArr = u === null || u === void 0 ? void 0 : u.memberingroups;
                    this.UserId = (u ? u.uid : "");
                    return u;
                });
            }
            else {
                this.currentUser$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])();
            }
        });
    }
    addUser(uid, displayName, email) {
        let userDoc = this.db.collection('users').doc(uid);
        userDoc.get().subscribe(x => {
            if (!x.exists) {
                this.db.collection('users').doc(uid).set({ uid: uid, displayName: displayName, email: email, memberingroups: [] });
            }
        });
    }
    addUser2Group(groupId) {
        this.afAuth.authState.subscribe(state => {
            if (state === null || state === void 0 ? void 0 : state.uid) {
                if (this.memberGroupsArr.indexOf(groupId) === -1) {
                    let usrobj = this.db.collection('users').doc(state.uid);
                    this.memberGroupsArr.push(groupId);
                    usrobj.update({ memberingroups: this.memberGroupsArr });
                }
            }
        });
    }
    remUserGroup(groupId) {
        this.afAuth.authState.subscribe(state => {
            if (state === null || state === void 0 ? void 0 : state.uid) {
                let usrobj = this.db.collection('users').doc(state.uid);
                this.memberGroupsArr.splice(this.memberGroupsArr.indexOf(groupId), 1);
                usrobj.update({ memberingroups: this.memberGroupsArr });
            }
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "H/d9":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Dashboard</h2>\r\n\r\n<div class='create'>\r\n  <button mat-raised-button (click)=\"onCreate()\">\r\n    <mat-icon>add</mat-icon>create\r\n  </button>\r\n</div>\r\n<!--  Neue Tabelle -->\r\n<table mat-table  [dataSource]=\"(todoListService.todos$ | todoFilterPipe: (false))\" class=\"mat-elevation-z8\" matSort >\r\n\r\n    <!-- Toggle Done Column-->\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell  *matHeaderCellDef mat-sort-header> Status </th>\r\n      <td mat-cell *matCellDef=\"let element\" >\r\n        <button mat-button (click)=\"todoListService.toggleDoneStateById4User(element)\">Done</button>\r\n        <button mat-icon-button color=\"warn\"><mat-icon>launch</mat-icon></button>\r\n    </ng-container>\r\n\r\n     <!-- TodoDueDate Column -->\r\n     <ng-container matColumnDef=\"todoDueDate\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Fälligkeitsdatum</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.dueDate.seconds * 1000 | date:'EE, dd.MM.'}} </td>\r\n    </ng-container>\r\n\r\n    <!-- subject Column -->\r\n    <ng-container matColumnDef=\"subject\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Fach </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.subjectobj?.Fachname}}</td>\r\n    </ng-container>\r\n\r\n    <!-- group Column -->\r\n    <ng-container matColumnDef=\"group\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Gruppe</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.groupobj?.Gruppenname}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Description Column -->\r\n    <ng-container matColumnDef=\"category\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Kategorie </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"todoDescription\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Beschreibung </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Toggle Done Column-->\r\n    <ng-container matColumnDef=\"deleteTodoById\">\r\n      <th mat-header-cell  *matHeaderCellDef > Löschen </th>\r\n      <td mat-cell *matCellDef=\"let element\" >\r\n        <button mat-button color=\"red\" (click)=\"todoListService.deleteTodoById(element.id)\">X</button>\r\n    </ng-container>\r\n\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n        (click)=\"todoListService.toggleDoneStateById(row.id)\">\r\n    </tr>\r\n  </table>\r\n  <br>\r\n  <br>\r\n  <br>\r\n\r\n  <mat-checkbox [(ngModel)]=\"bShowDoneRecords\">Erledigte anzeigen</mat-checkbox>\r\n<!--  Neue Tabelle -->\r\n<table mat-table *ngIf=\"bShowDoneRecords\" [dataSource]=\"(todoListService.todos$ | todoFilterPipe: (true))\" class=\"mat-elevation-z8\">\r\n\r\n  <!-- Toggle Done Column-->\r\n  <ng-container matColumnDef=\"actions\">\r\n    <th mat-header-cell  *matHeaderCellDef > Status </th>\r\n    <td mat-cell *matCellDef=\"let element\" >\r\n      <button mat-button (click)=\"todoListService.toggleDoneStateById4User(element)\">Undo</button>\r\n  </ng-container>\r\n\r\n   <!-- TodoDueDate Column -->\r\n   <ng-container matColumnDef=\"todoDueDate\">\r\n    <th mat-header-cell *matHeaderCellDef> Fälligkeitsdatum</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.dueDate.seconds * 1000 | date:'EE, dd.MM.'}} </td>\r\n  </ng-container>\r\n\r\n  <!-- subject Column -->\r\n  <ng-container matColumnDef=\"subject\">\r\n    <th mat-header-cell *matHeaderCellDef> Fach </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.subjectobj?.Fachname}} </td>\r\n  </ng-container>\r\n\r\n  <!-- group Column -->\r\n  <ng-container matColumnDef=\"group\">\r\n    <th mat-header-cell *matHeaderCellDef> Gruppe </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.groupobj?.Gruppenname}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Description Column -->\r\n  <ng-container matColumnDef=\"category\">\r\n    <th mat-header-cell *matHeaderCellDef> Kategorie </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"todoDescription\">\r\n    <th mat-header-cell *matHeaderCellDef> Beschreibung </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Toggle Done Column-->\r\n  <ng-container matColumnDef=\"deleteTodoById\">\r\n    <th mat-header-cell  *matHeaderCellDef > Löschen </th>\r\n    <td mat-cell *matCellDef=\"let element\" >\r\n      <button mat-button color=\"red\" (click)=\"todoListService.deleteTodoById(element.id)\">X</button>\r\n  </ng-container>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n      (click)=\"todoListService.toggleDoneStateById(row.id)\">\r\n  </tr>\r\n</table>\r\n");

/***/ }),

/***/ "MUi6":
/*!**************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.ts ***!
  \**************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_todo_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./todo-list.component.html */ "odBy");
/* harmony import */ var _todo_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-list.component.scss */ "gRJ8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_todo_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/todo-list.service */ "kOhu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_gruppe_fb_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/gruppe-fb-list.service */ "3OGU");
/* harmony import */ var _shared_addFaecher_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/addFaecher.service */ "VxgE");








let TodoListComponent = class TodoListComponent {
    constructor(todoListService, GruppenFBListservice, addFaecherListService) {
        this.todoListService = todoListService;
        this.GruppenFBListservice = GruppenFBListservice;
        this.addFaecherListService = addFaecherListService;
        this.todoDescription = '';
        this.todoDueDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.showDone = false;
        this.subject = '';
        this.group = '';
        this.category = '';
        this.displayedColumns = ['actions', 'todoDueDate', 'subject', 'group', 'category', 'todoDescription', 'deleteTodoById'];
    }
    ngOnInit() {
    }
    addTodo() {
        if (this.todoDescription && this.todoDueDate && this.subject && this.group && this.category) {
            this.todoListService.addTodo(this.subject, this.group, this.todoDescription, this.category, new Date(this.todoDueDate));
            this.subject = '';
            this.group = '';
            this.todoDescription = '';
            this.category = '';
            this.todoDueDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        }
    }
};
TodoListComponent.ctorParameters = () => [
    { type: _shared_todo_list_service__WEBPACK_IMPORTED_MODULE_4__["TodoListService"] },
    { type: _shared_gruppe_fb_list_service__WEBPACK_IMPORTED_MODULE_6__["GruppeFBListService"] },
    { type: _shared_addFaecher_service__WEBPACK_IMPORTED_MODULE_7__["addFaecherListService"] }
];
TodoListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-todo-list',
        template: _raw_loader_todo_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_todo_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TodoListComponent);



/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "H/d9");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.scss */ "7igb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_todo_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/todo-list.service */ "kOhu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_gruppe_fb_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/gruppe-fb-list.service */ "3OGU");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../todo-list/todo-list.component */ "MUi6");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");









let DashboardComponent = class DashboardComponent {
    constructor(todoListService, grpService, dialog) {
        this.todoListService = todoListService;
        this.grpService = grpService;
        this.dialog = dialog;
        this.todoDescription = '';
        this.todoDueDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.showDone = false;
        this.subject = '';
        this.group = '';
        this.category = '';
        this.displayedColumns = ['actions', 'todoDueDate', 'subject', 'group', 'category', 'todoDescription',]; //,'deleteTodoById' ]
        this.bShowDoneRecords = false;
    }
    ngOnInit() {
    }
    //
    onCreate() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        let todoDialog = this.dialog.open(_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__["TodoListComponent"], dialogConfig);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _shared_todo_list_service__WEBPACK_IMPORTED_MODULE_4__["TodoListService"] },
    { type: _shared_gruppe_fb_list_service__WEBPACK_IMPORTED_MODULE_6__["GruppeFBListService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/user.service */ "CcaC");








let AppComponent = class AppComponent {
    constructor(afAuth, router, userService) {
        this.afAuth = afAuth;
        this.router = router;
        this.userService = userService;
    }
    login() {
        this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].auth.GoogleAuthProvider())
            .then((result) => {
            var credential = result.credential;
            // The signed-in user info.
            var user = result.user;
            this.userService.addUser(user === null || user === void 0 ? void 0 : user.uid, user === null || user === void 0 ? void 0 : user.displayName, user === null || user === void 0 ? void 0 : user.email);
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
        // .then(() => {
        //   this.router.navigate(['dashboard']);
        // });
    }
    logout() {
        this.afAuth.signOut().then(() => {
            this.router.navigate(['']);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "SztG":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gruppe/gruppe.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Gruppe</h2>\r\n\r\n\r\n<div class=\"addItem\">\r\n  <mat-form-field class=\"Gruppenname\">\r\n    <mat-label>Gruppenname</mat-label>\r\n    <input matInput type=\"text\" [(ngModel)]=\"Gruppenname\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"Beschreibung\">\r\n    <mat-label>Beschreibung</mat-label>\r\n    <input matInput type=\"text\" [(ngModel)]=\"Beschreibung\">\r\n  </mat-form-field>\r\n\r\n  <button mat-button (click)=\"addGruppe()\">Hinzufügen</button>\r\n</div>\r\n\r\n<table mat-table [dataSource]=\"(GruppenListService.gruppen$)\" class=\"mat-elevation-z8\">\r\n\r\n  <!--Löschen column-->\r\n  <ng-container matColumnDef=\"Löschen\">\r\n    <th mat-header-cell  *matHeaderCellDef >Löschen</th>\r\n    <td mat-cell *matCellDef=\"let element\" >\r\n      <div *ngIf=\"element.userUid === usrService.UserId\"><button mat-raised-button (click)=\"GruppenListService.deleteGruppeById(element.id)\">\r\n        <mat-icon>delete</mat-icon>Löschen\r\n      </button></div>\r\n      <div *ngIf=\"usrService.memberGroupsArr.indexOf(element.id) === -1\"><button mat-button (click)=\"usrService.addUser2Group(element.id)\">Beitreten</button></div>\r\n      <div *ngIf=\"usrService.memberGroupsArr.indexOf(element.id) !==-1\"><button mat-button (click)=\"usrService.remUserGroup(element.id)\">Verlassen</button></div>\r\n  </ng-container>\r\n\r\n    <!--groupName column-->\r\n    <ng-container matColumnDef=\"groupName\">\r\n        <th mat-header-cell *matHeaderCellDef> Gruppenname</th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.Gruppenname}} </td>\r\n      </ng-container>\r\n\r\n    <!--groupDescription column-->\r\n      <ng-container matColumnDef=\"groupDescription\">\r\n        <th mat-header-cell *matHeaderCellDef>Beschreibung</th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.Beschreibung}} </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n</table>\r\n");

/***/ }),

/***/ "VxgE":
/*!**********************************************!*\
  !*** ./src/app/shared/addFaecher.service.ts ***!
  \**********************************************/
/*! exports provided: addFaecherListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFaecherListService", function() { return addFaecherListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let addFaecherListService = class addFaecherListService {
    constructor(firestore, afAuth) {
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.fach$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])();
        this.userId = '';
        this.afAuth.authState.subscribe(state => {
            if (state === null || state === void 0 ? void 0 : state.uid) {
                this.userId = state.uid;
                this.fach$ = firestore.collection('fach', ref => ref.orderBy('Fachname'))
                    .valueChanges({ idField: 'id' });
            }
            else {
                this.userId = '';
                this.fach$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])();
            }
        });
    }
    getFachbyId(FachId) {
        // return this.firestore.doc<Fächer>('fach/' + grpId).valueChanges();
        return this.firestore.collection('fach', ref => ref.where('id', '==', FachId).orderBy('Fachname'))
            .valueChanges({ IdField: 'id' });
    }
    addFach(Fachname, Fachbeschreibung) {
        this.firestore.collection('fach').add({ Fachname: Fachname, Fachbeschreibung: Fachbeschreibung, userUid: this.userId });
    }
    deleteFachById(id) {
        this.firestore.doc('fach/' + id).delete();
    }
    updateFachById(fach) {
        this.firestore.doc('fach/' + fach.id).update({ Fachname: fach.Fachname });
    }
};
addFaecherListService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }
];
addFaecherListService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], addFaecherListService);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\r\n  <ul>\r\n    <li><a routerLink=\"/todo-list\">Hinzufügen</a></li>\r\n    <li><a routerLink=\"/dashboard\">Aufgaben</a></li>\r\n    <li><a routerLink=\"/Gruppe\">Gruppe</a></li>\r\n    <li><a routerLink=\"/fach\">Fächer</a></li>\r\n  </ul>\r\n\r\n  <div *ngIf=\"afAuth.user | async as user\" class=\"user-info\">\r\n    {{ user.displayName }}\r\n    <button (click)=\"logout()\">Logout</button>\r\n  </div>\r\n</nav>\r\n\r\n<main>\r\n  <div *ngIf=\"!(afAuth.user | async)\">\r\n    <h1>Login</h1>\r\n    <button (click)=\"login()\">Login</button>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n</main>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "MUi6");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _gruppe_gruppe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gruppe/gruppe.component */ "bu4B");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _pipes_todo_filter_pipe_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/todo-filter-pipe.pipe */ "qamx");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _add_faecher_addFaecher_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-faecher/addFaecher.component */ "8UEh");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _pipes_group_filter_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/group-filter.pipe */ "k1hN");
































let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            _pipes_todo_filter_pipe_pipe__WEBPACK_IMPORTED_MODULE_13__["TodoFilterPipePipe"],
            _gruppe_gruppe_component__WEBPACK_IMPORTED_MODULE_7__["GruppeComponent"],
            _add_faecher_addFaecher_component__WEBPACK_IMPORTED_MODULE_19__["FaecherComponent"],
            _pipes_group_filter_pipe__WEBPACK_IMPORTED_MODULE_30__["GroupFilterPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["NoopAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZDFu":
/*!**********************************************!*\
  !*** ./src/app/gruppe/gruppe.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin-right: 10px;\n}\n\n.date {\n  display: inline-block;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdydXBwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJncnVwcGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfSAiXX0= */");

/***/ }),

/***/ "bu4B":
/*!********************************************!*\
  !*** ./src/app/gruppe/gruppe.component.ts ***!
  \********************************************/
/*! exports provided: GruppeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruppeComponent", function() { return GruppeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_gruppe_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./gruppe.component.html */ "SztG");
/* harmony import */ var _gruppe_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gruppe.component.scss */ "ZDFu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_gruppe_fb_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/gruppe-fb-list.service */ "3OGU");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/user.service */ "CcaC");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
var GruppeComponent_1;







let GruppeComponent = GruppeComponent_1 = class GruppeComponent {
    constructor(GruppenListService, usrService, dialog) {
        this.GruppenListService = GruppenListService;
        this.usrService = usrService;
        this.dialog = dialog;
        this.Gruppenname = '';
        this.Beschreibung = '';
        this.displayedColumns = ['Löschen', 'groupName', 'groupDescription'];
    }
    ngOnInit() {
    }
    onCreate() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        let gruppeDialog = this.dialog.open(GruppeComponent_1, dialogConfig);
    }
    addGruppe() {
        if (this.Gruppenname) {
            this.GruppenListService.addGruppe(this.Gruppenname, this.Beschreibung);
            this.Gruppenname = '';
            this.Beschreibung = '';
        }
    }
};
GruppeComponent.ctorParameters = () => [
    { type: _shared_gruppe_fb_list_service__WEBPACK_IMPORTED_MODULE_4__["GruppeFBListService"] },
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
GruppeComponent = GruppeComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-gruppe',
        template: _raw_loader_gruppe_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gruppe_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GruppeComponent);



/***/ }),

/***/ "g55D":
/*!**************************************************!*\
  !*** ./src/app/shared/helpers/database-joins.ts ***!
  \**************************************************/
/*! exports provided: leftJoin, leftJoinDocument, docJoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftJoin", function() { return leftJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftJoinDocument", function() { return leftJoinDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docJoin", function() { return docJoin; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
//Source: https://github.com/AngularFirebase/133-firestore-joins-custom-rx-operators
// See documentation in README.md file there.


const leftJoin = (afs, field, collection, limit = 100) => {
    return (source) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => {
        // Operator state
        let collectionData;
        // Track total num of joined doc reads
        let totalJoins = 0;
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(data => {
            // Clear mapping on each emitted val ;
            // Save the parent data state
            collectionData = data;
            const reads$ = [];
            for (const doc of collectionData) {
                // Push doc read to Array
                if (doc[field]) {
                    // Perform query on join key, with optional limit
                    const q = (ref) => ref.where(field, '==', doc[field]).limit(limit);
                    reads$.push(afs.collection(collection, q).valueChanges());
                }
                else {
                    reads$.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]));
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(reads$);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((joins) => {
            return collectionData.map((v, i) => {
                totalJoins += joins[i].length;
                return Object.assign(Object.assign({}, v), { [collection]: joins[i] || null });
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(final => {
            console.log(`Queried ${final.length}, Joined ${totalJoins} docs`);
            totalJoins = 0;
        }));
    });
};
const leftJoinDocument = (afs, field, collection, fieldToFill) => {
    return (source) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => {
        // Operator state
        let collectionData;
        const cache = new Map();
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(data => {
            // Clear mapping on each emitted val ;
            cache.clear();
            // Save the parent data state
            collectionData = data;
            const reads$ = [];
            let i = 0;
            for (const doc of collectionData) {
                // Skip if doc field does not exist or is already in cache
                if (!doc[field] || cache.get(doc[field])) {
                    continue;
                }
                // Push doc read to Array
                reads$.push(afs
                    .collection(collection)
                    .doc(doc[field])
                    .valueChanges());
                cache.set(doc[field], i);
                i++;
            }
            return reads$.length ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(reads$) : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(joins => {
            return collectionData.map((v, i) => {
                const joinIdx = cache.get(v[field]);
                return Object.assign(Object.assign({}, v), { [fieldToFill]: joins[joinIdx] || null });
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(final => console.log(`Queried ${final.length}, Joined ${cache.size} docs`)));
    });
};
const docJoin = (afs, paths) => {
    return (source) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => {
        let parent;
        const keys = Object.keys(paths);
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(data => {
            // Save the parent data state
            parent = data;
            // Map each path to an Observable
            const docs$ = keys.map(k => {
                const fullPath = `${paths[k]}/${parent[k]}`;
                return afs.doc(fullPath).valueChanges();
            });
            // return combineLatest, it waits for all reads to finish
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(docs$);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(arr => {
            // We now have all the associated douments
            // Reduce them to a single object based on the parent's keys
            const joins = keys.reduce((acc, cur, idx) => {
                return Object.assign(Object.assign({}, acc), { [cur]: arr[idx] });
            }, {});
            // Return the parent doc with the joined objects
            return Object.assign(Object.assign({}, parent), joins);
        }));
    });
};


/***/ }),

/***/ "gRJ8":
/*!****************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin-right: 10px;\n}\n\n.date {\n  display: inline-block;\n  width: 100px;\n}\n\ntable {\n  width: 100%;\n}\n\n.controles-container {\n  width: 100%;\n  padding: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRvZG8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUFPLFdBQUE7QUFHUDs7QUFBRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBR0oiLCJmaWxlIjoidG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmRhdGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH0gXHJcbnRhYmxlIHt3aWR0aDogMTAwJTtcclxuXHJcbiAgfVxyXG4gIC5jb250cm9sZXMtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICB9Il19 */");

/***/ }),

/***/ "h5xU":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-faecher/addFaecher.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Fächer Hinzufügen</h2>\r\n\r\n<div class=\"addItem\">\r\n  <mat-form-field class=\"Fachname\">\r\n    <mat-label>Fach erstellen</mat-label>\r\n    <input matInput type=\"text\" [(ngModel)]=\"Fachname\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"Fachbeschreibung\">\r\n    <mat-label>Fachbeschreibung</mat-label>\r\n    <input matInput type=\"text\" [(ngModel)]=\"Fachbeschreibung\">\r\n  </mat-form-field>\r\n\r\n  <button mat-button (click)=\"addFach()\">Hinzufügen</button>\r\n</div>\r\n\r\n<table mat-table [dataSource]=\"(FaecherService.fach$)\" class=\"mat-elevation-z8\">\r\n\r\n\r\n  <ng-container matColumnDef=\"Löschen\">\r\n    <th mat-header-cell  *matHeaderCellDef >Löschen</th>\r\n    <td mat-cell *matCellDef=\"let element\" >\r\n    <div *ngIf=\"element.userUid === usrService.UserId\"><button mat-button (click)=\"FaecherService.deleteFachById(element.id)\">Löschen</button></div>\r\n  </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"Fachname\">\r\n        <th mat-header-cell *matHeaderCellDef> Fachname</th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.Fachname}} </td>\r\n      </ng-container>\r\n\r\n\r\n      <ng-container matColumnDef=\"Fachbeschreibung\">\r\n        <th mat-header-cell *matHeaderCellDef>Beschreibung</th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.Fachbeschreibung}} </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n</table>\r\n\r\n<!--<table>\r\n    <tr>\r\n        &nbsp; <th>Fachname</th>\r\n        <th>Fachbeschreibung</th>\r\n    </tr>\r\n    <tr *ngFor=\"let item of addFächerListService.fach | async\">\r\n        <button (click)=\"FächerListService.deleteFachById(item.id)\">Löschen</button>\r\n            <td class=\"Fachname\">{{ item.Fachname }}</td>\r\n            <td class=\"Fachbeschreibung\">{{ item.Fachbeschreibung }}</td>\r\n    </tr>\r\n</table>-->\r\n");

/***/ }),

/***/ "k1hN":
/*!********************************************!*\
  !*** ./src/app/pipes/group-filter.pipe.ts ***!
  \********************************************/
/*! exports provided: GroupFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFilterPipe", function() { return GroupFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "CcaC");




let GroupFilterPipe = class GroupFilterPipe {
    constructor(usrService) {
        this.usrService = usrService;
    }
    transform(groups) {
        return groups.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(g => {
            return g.filter(g => {
                return (this.usrService.memberGroupsArr.indexOf(g.id) !== -1);
            });
        }));
    }
};
GroupFilterPipe.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
GroupFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'groupFilter'
    })
], GroupFilterPipe);



/***/ }),

/***/ "kOhu":
/*!*********************************************!*\
  !*** ./src/app/shared/todo-list.service.ts ***!
  \*********************************************/
/*! exports provided: TodoListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListService", function() { return TodoListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _gruppe_fb_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gruppe-fb-list.service */ "3OGU");
/* harmony import */ var _helpers_database_joins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/database-joins */ "g55D");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.service */ "CcaC");









let TodoListService = class TodoListService {
    constructor(firestore, afAuth, gruppenService, usrService) {
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.gruppenService = gruppenService;
        this.usrService = usrService;
        this.todos$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])();
        this.userUid = '';
        this.afAuth.authState.subscribe(state => {
            if (state === null || state === void 0 ? void 0 : state.uid) {
                this.userUid = state.uid;
                this.todos$ = firestore.collection('todos', ref => ref.orderBy('dueDate')) //.where('group', 'in', this.usrService.memberGroupsArr))
                    .valueChanges({ idField: 'id' }).pipe(Object(_helpers_database_joins__WEBPACK_IMPORTED_MODULE_7__["leftJoinDocument"])(firestore, 'group', 'gruppen', 'groupobj'), Object(_helpers_database_joins__WEBPACK_IMPORTED_MODULE_7__["leftJoinDocument"])(firestore, 'subject', 'fach', 'subjectobj'));
            }
            else {
                this.userUid = '';
                this.todos$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])();
            }
        });
    }
    getTodosFilterd(done) {
        if (this.userUid != '') {
            return this.todos$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(t => {
                return t.filter((t) => { return (done === true && t.doneDate) || (done === false && !t.doneDate); });
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])();
        }
    }
    addTodo(subject, group, description, category, dueDate) {
        this.firestore.collection('todos').add({ dueDate: dueDate, subject: subject, group: group, description: description, category: category, userUid: this.userUid });
    }
    deleteTodoById(id) {
        this.firestore.doc('todos/' + id).delete();
    }
    updateTodoById(todo) {
        this.firestore.doc('todos/' + todo.id).update({ description: todo.description, dueDate: todo.dueDate });
    }
    toggleDoneStateById(todo) {
        if (todo.id)
            this.firestore.doc('todos/' + todo.id).update({ doneDate: todo.doneDate ? null : new Date() });
    }
    toggleDoneStateById4User(todo) {
        if (todo.id) {
            if (!todo.doneByUser) {
                todo.doneByUser = [];
            }
            if (todo.doneByUser.indexOf(this.usrService.UserId) === -1) {
                todo.doneByUser.push(this.usrService.UserId);
            }
            else {
                todo.doneByUser.splice(todo.doneByUser.indexOf(this.usrService.UserId), 1);
            }
            this.firestore.doc('todos/' + todo.id).update({ doneByUser: todo.doneByUser });
        }
    }
};
TodoListService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
    { type: _gruppe_fb_list_service__WEBPACK_IMPORTED_MODULE_6__["GruppeFBListService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }
];
TodoListService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], TodoListService);



/***/ }),

/***/ "odBy":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo-list/todo-list.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<mat-dialog-content>\r\n  <div class=\"addItem\">\r\n  <!-- Fach -->\r\n  <p>\r\n    <mat-form-field appearance=\"legacy\">\r\n      <mat-label>Wähle ein Fach aus:</mat-label>\r\n      <mat-select id=\"subject\" name=\"subject\" [(ngModel)]=\"subject\">\r\n        <mat-option *ngFor=\"let item of (addFaecherListService.fach$ | async)\" [value]=\"item.id\">{{item.Fachname}}</mat-option>\r\n      </mat-select>\r\n      <mat-hint align=\"end\">Wähle das Fach aus.</mat-hint>\r\n    </mat-form-field>\r\n  </p>\r\n  <!-- Gruppe -->\r\n  <p>\r\n    <mat-form-field appearance=\"legacy\">\r\n      <mat-label>Wähle eine Gruppe aus:</mat-label>\r\n      <mat-select id=\"group\" name=\"group\" [(ngModel)]=\"group\">\r\n        <mat-option *ngFor=\"let item of (GruppenFBListservice.gruppen$ | groupFilter | async)\" [value]=\"item.id\">{{item.Gruppenname}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </p>\r\n\r\n  <!-- Kategorie -->\r\n  <p>\r\n    <mat-form-field appearance=\"legacy\">\r\n      <mat-label>Wähle eine Kategorie aus:</mat-label>\r\n      <mat-select id=\"category\" name=\"category\" [(ngModel)]=\"category\">\r\n        <mat-option value=\"HÜ\">Hausübung</mat-option>\r\n        <mat-option value=\"WH\">Wiederholung</mat-option>\r\n        <mat-option value=\"Test\">Test</mat-option>\r\n        <mat-option value=\"SA\">Schularbeit</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </p>\r\n  <p>\r\n    <mat-form-field appearance=\"legacy\">\r\n      <mat-label>Datum fällig:</mat-label>\r\n      <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"todoDueDate\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n  </p>\r\n  <p>\r\n    <mat-form-field appearance=\"legacy\">\r\n      <mat-label>Beschreibung:</mat-label>\r\n      <textarea matInput cols = \"50\" rows = \"2\" [(ngModel)]=\"todoDescription\"></textarea>\r\n    </mat-form-field>\r\n  </p>\r\n\r\n  <button mat-button (click)=\"addTodo()\">Hinzufügen</button>\r\n</div>\r\n\r\n</mat-dialog-content>\r\n");

/***/ }),

/***/ "qamx":
/*!************************************************!*\
  !*** ./src/app/pipes/todo-filter-pipe.pipe.ts ***!
  \************************************************/
/*! exports provided: TodoFilterPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFilterPipePipe", function() { return TodoFilterPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "CcaC");




let TodoFilterPipePipe = class TodoFilterPipePipe {
    constructor(usrService) {
        this.usrService = usrService;
    }
    transform(todos, done) {
        return todos.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(t => {
            return t.filter(t => {
                var _a, _b;
                return ((done === true && t.doneByUser && (((_a = t.doneByUser) === null || _a === void 0 ? void 0 : _a.indexOf(this.usrService.UserId)) !== -1)) ||
                    (done === false && ((!t.doneByUser) || ((_b = t.doneByUser) === null || _b === void 0 ? void 0 : _b.indexOf(this.usrService.UserId)) === -1)))
                    && (this.usrService.memberGroupsArr.indexOf(t.group) !== -1);
            });
        }));
    }
};
TodoFilterPipePipe.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
TodoFilterPipePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'todoFilterPipe'
    })
], TodoFilterPipePipe);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "MUi6");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var _gruppe_gruppe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gruppe/gruppe.component */ "bu4B");
/* harmony import */ var _add_faecher_addFaecher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-faecher/addFaecher.component */ "8UEh");








const routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthGuard"]] },
    { path: 'todo-list', component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthGuard"]] },
    { path: 'Gruppe', component: _gruppe_gruppe_component__WEBPACK_IMPORTED_MODULE_6__["GruppeComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthGuard"]] },
    { path: 'fach', component: _add_faecher_addFaecher_component__WEBPACK_IMPORTED_MODULE_7__["FaecherComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthGuard"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0 40px;\n  width: 100%;\n  background-color: #ffeb3b;\n  height: 40px;\n  line-height: 40px;\n}\n\nli {\n  display: inline;\n  margin-right: 40px;\n}\n\nmain {\n  margin-top: 40px;\n  padding: 40px;\n}\n\n.user-info {\n  position: absolute;\n  right: 40px;\n  top: 0;\n  line-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsaUJBQUE7QUFFSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMCA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxufVxyXG4udXNlci1pbmZvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map