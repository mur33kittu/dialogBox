import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { DialogModal } from './modal';

@Component({
    selector: "dialog-comp",
    templateUrl: 'modal.component.html'
})

export class DialogComponent {
    @Input() dialogModal: DialogModal;
    constructor() {

    }
    closeModal() {
        this.dialogModal.showDialog = "none";
    }
}