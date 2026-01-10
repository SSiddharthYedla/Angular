import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Body } from './body/body';
import { Footer } from './footer/footer';
import { Carousel } from './carousel/carousel';
import { Categories } from './categories/categories';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Body,Carousel,Footer,Categories,Component],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project1');
}
