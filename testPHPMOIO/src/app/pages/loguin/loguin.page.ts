import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
// import { error } from 'console';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.page.html',
  styleUrls: ['./loguin.page.scss'],
})
export class LoguinPage implements OnInit {
  // banco de dados
  email: any;
  senha: any;
  dados: any;

  //.
  public fGroup: FormGroup;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private fBuilder: FormBuilder,
    private http: HttpClient) {
    this.fGroup = this.fBuilder.group({
      'email': [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
          ),
          Validators.minLength(4),
          Validators.maxLength(100),
        ]),
      ],
      'senha': [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(40),
        ]),
      ]
    });
  }

  async showProfile() {
    //dando o submit no button
    const email = this.fGroup.value.email;
    const senha = this.fGroup.value.senha;
    const url = `http://localhost/classes/validationLoguin.php?email=${email}&senha=${senha}`;
    const myalert = await this.alertCtrl.create({
      header: "Loguin Efetuado com sucesso!",
      message: "Deseja continuar?",
      buttons: [{
        text:'Confirmar',
        handler: () => {
          this.navCtrl.navigateForward('register');
        }}, 'Cancelar']
    });
    const alertCancel = await this.alertCtrl.create({
      header: "Email ou Senha incorretos!",
      message: "Digite novamente os dados!",
      buttons: ['OK']
    });

    this.http.get(url).subscribe(data => {
      this.dados = data;
        if (this.dados.status == "sucess"){
        //aqui deu boa
        // console.log('ok')
        myalert.present();
      } else {
        //aqui deu ruim
        // console.log('recusado')
        alertCancel.present();
      }
    }, error => {
      // Lide com erros aqui
      console.error(error);
    });

  }

  ngOnInit() {
      setTimeout(()=> {
      this.fGroup.get('email')?.setValue('teste@gmail.com');
      this.fGroup.get('senha')?.setValue('vascoGanhou');
    }, 2000)
  }
}
