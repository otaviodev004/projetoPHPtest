import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AlertController, NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-modal-local',
  templateUrl: './modal-local.page.html',
  styleUrls: ['./modal-local.page.scss'],
})
export class ModalLocalPage implements OnInit {

  nomeL: any;
  cep: any;
  cidade: any;
  rua: any;
  numero: any;
  dados: any;

  public fGroupLocal: FormGroup;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private fBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.fGroupLocal = fBuilder.group({
      nomeL: [null],
      cep: [null],
      cidade: [null],
      rua: [null],
      numero: [null]
    });
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async showLocal(){
    // console.log(this.fGroupLocal.value)
    const nomeL = this.fGroupLocal.value.nomeL;
    const cep = this.fGroupLocal.value.cep;
    const cidade = this.fGroupLocal.value.cidade;
    const rua = this.fGroupLocal.value.rua;
    const numero = this.fGroupLocal.value.numero;
    const url = `http://localhost/classes/criarNovoLocal.php?nomeL=${nomeL}&cep=${cep}&cidade=${cidade}&rua=${rua}&numero=${numero}`;
    const alertCadastrado = await this.alertCtrl.create({
      header: "Cadastrado com Sucesso!",
      buttons: ['Continuar',{
        text:'Cancelar',
        handler: () => {
          this.navCtrl.navigateForward('modal-permissao');
        }}]
    });
    const alertCancel = await this.alertCtrl.create({
      header: "Usuário já cadastrado no Sistema!",
      message: "Digite novamente os dados!",
      buttons: ['OK']
    });

    this.http.get(url).subscribe(data => {
      this.dados = data;
        if (this.dados.status == "cadastrado"){
        //aqui deu boa
        // console.log('ok')
        alertCadastrado.present();
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
  }

}
