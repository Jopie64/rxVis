import { Component } from '@angular/core';
import EZ from 'eases';
import { demoNodeTypes } from './rxConfigs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eases = Object.keys(EZ).map(name => ({name, f: EZ[name]}));

  configs = [demoNodeTypes];
}
