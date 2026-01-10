import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
import { Carousel } from './components/carousel/carousel';
import { Categories } from './components/categories/categories';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Body,Carousel,Footer,Categories,Component],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project1');
}
