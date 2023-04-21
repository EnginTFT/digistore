import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'digistore-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'digistore';
}
