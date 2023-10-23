import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-sider-bar',
  templateUrl: './sider-bar.component.html',
  styleUrls: ['./sider-bar.component.scss']
})
export class SiderBarComponent implements OnInit {
  constructor(private router: Router ) { }


  ngOnInit(): void {

  }

}
