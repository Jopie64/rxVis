import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import EZ from 'eases';
import { demoNodeTypes, inMapOut, filter } from './rxConfigs';
import { RxDrawerComponent } from './rx-drawer/rx-drawer.component';
import { EaseShowerComponent } from './ease-shower/ease-shower.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RxDrawerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eases = Object.keys(EZ).map(name => ({name, f: (EZ as unknown as Record<string, (n: number) => number>)[name]}));

  configs = [
    demoNodeTypes,
    inMapOut,
    filter
  ];
}
