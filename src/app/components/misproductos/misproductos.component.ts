import { ProductoService } from './../../services/producto.service';
import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-misproductos',
  templateUrl: './misproductos.component.html',
  styleUrls: ['./misproductos.component.css']
})
export class MisproductosComponent implements OnInit {

  constructor(public auth: AuthService,
              public Ps: ProductoService) { }

  ngOnInit(): void {
    this.Ps.verproducto()
  }

}