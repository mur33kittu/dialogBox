import { DialogComponent } from './dialogBox/modal.component';
import { ViewChild, Component, ViewContainerRef, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private data: any;
  @ViewChild('containerClass', { read: ViewContainerRef }) container;

  constructor(private resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {

  }

  OpenDialog() {
    let resolvefactory = this.resolver.resolveComponentFactory(DialogComponent);
    let createdComponent = this.container.createComponent(resolvefactory);
    createdComponent.instance.dialogModal = {
      title: "Hello Component",
      body: "Body of created Component",
      showDialog: "block"
    };
  }
}
