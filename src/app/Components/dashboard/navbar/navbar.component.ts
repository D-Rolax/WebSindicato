import { Usuario } from './../../../models/usuario';
import { Login } from './../../../models/login';
import { ApiauthService } from './../../../services/apiauth.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  usuario!:Usuario
  
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  constructor(private observer: BreakpointObserver,private apiauthservice:ApiauthService,
              apiauthService:ApiauthService,private router:Router) { 
    this.apiauthservice.usuario.subscribe(res=>{
      this.usuario=res;
    })
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }else{
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    });
  }

  ngOnInit(): void {
  }
  logaut(){
    this.apiauthservice.logout();
    this.router.navigate(['/login'])
  }
}
