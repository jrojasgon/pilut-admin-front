import {Component, OnInit, ElementRef, Inject, Renderer2, AfterViewInit, ViewChild} from '@angular/core';
import {ConfigService} from '../../shared/services/config.service';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})

export class FullLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('sidebarBgImage') sidebarBgImage: ElementRef;
  @ViewChild('appSidebar') appSidebar: ElementRef;
  @ViewChild('wrapper') wrapper: ElementRef;

  options = {
    direction: 'ltr',
    bgColor: 'black',
    bgImage: 'assets/img/sidebar-bg/01.jpg'
  };
  hideSidebar: boolean;
  isCollapsed = false;
  isSidebarSm = false;
  isSidebarLg = false;
  bgColor = 'black';
  bgImage = 'assets/img/sidebar-bg/01.jpg';

  public config: any = {};


  constructor(private elementRef: ElementRef, private configService: ConfigService,
              @Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2) {


  }

  ngOnInit() {
    this.config = this.configService.templateConf;
    this.bgColor = this.config.layout.sidebar.backgroundColor;

    if (!this.config.layout.sidebar.backgroundImage) {
      this.bgImage = '';
    } else {
      this.bgImage = this.config.layout.sidebar.backgroundImageURL;
    }

    if (this.config.layout.variant === 'Transparent') {
      if (this.config.layout.sidebar.backgroundColor.toString().trim() === '') {
        this.bgColor = 'bg-glass-1';
      }
    } else {
      if (this.config.layout.sidebar.backgroundColor.toString().trim() === '') {
        this.bgColor = 'black';
      }
    }

    setTimeout(() => {
      if (this.config.layout.sidebar.size === 'sidebar-lg') {
        this.isSidebarSm = false;
        this.isSidebarLg = true;
      } else if (this.config.layout.sidebar.size === 'sidebar-sm') {
        this.isSidebarSm = true;
        this.isSidebarLg = false;
      } else {
        this.isSidebarSm = false;
        this.isSidebarLg = false;
      }
      this.isCollapsed = this.config.layout.sidebar.collapsed;
    }, 0);


  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.config.layout.dir) {
        this.options.direction = this.config.layout.dir;
      }


      if (this.config.layout.variant === 'Dark') {
        this.renderer.addClass(this.document.body, 'layout-dark');
      } else if (this.config.layout.variant === 'Transparent') {
        this.renderer.addClass(this.document.body, 'layout-dark');
        this.renderer.addClass(this.document.body, 'layout-transparent');
        if (this.config.layout.sidebar.backgroundColor) {
          this.renderer.addClass(this.document.body, this.config.layout.sidebar.backgroundColor);
        } else {
          this.renderer.addClass(this.document.body, 'bg-glass-1');
        }
        this.bgColor = 'black';
        this.options.bgColor = 'black';
        this.bgImage = '';
        this.options.bgImage = '';
        this.bgImage = '';
        this.renderer.setAttribute(this.sidebarBgImage.nativeElement, 'style', 'display: none');

      }
    }, 0);

  }

  toggleHideSidebar($event: boolean): void {
    setTimeout(() => {
      this.hideSidebar = $event;
    }, 0);
  }

  getOptions($event): void {
    this.options = $event;
  }

}
