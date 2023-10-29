import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  permicao(){
    this.navCtrl.navigateForward('permicao')
  }

  local(){
    this.navCtrl.navigateForward('local')
  }

  againpage(){
    this.navCtrl.navigateForward('loguin')
  }

  ngOnInit() {
  }

}
