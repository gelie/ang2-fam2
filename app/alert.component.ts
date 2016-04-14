import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'alert-demo',
  templateUrl: 'app/alert.component.html',
  directives: [Alert, CORE_DIRECTIVES]
})
export class AlertDemo {
  public alerts:Array<Object> = [
    {
      type: 'danger',
      msg: 'Oh snap! Change a few things up and try submitting again.'
    },
    {
      type: 'success',
      msg: 'Well done! You successfully read this important alert message.',
      closable: true
    }
  ];

  public closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }

  public addParent():void {
    this.alerts.push({msg: 'Another parent!', type: 'warning', closable: true});
  }
  
  public addChild():void {
    this.alerts.push({msg: 'Another child!', type: 'warning', closable: true});
  }
  
  public addSibling():void {
    this.alerts.push({msg: 'Another sibling!', type: 'warning', closable: true});
  }
  
  public addPartner():void {
    this.alerts.push({msg: 'Another partner!', type: 'warning', closable: true});
  }
}