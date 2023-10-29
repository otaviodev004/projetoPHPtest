import { ModalPermissaoPage } from './../modal-permissao/modal-permissao.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-permicao',
  templateUrl: './permicao.page.html',
  styleUrls: ['./permicao.page.scss'],
})
export class PermicaoPage implements OnInit {

  linhas: any;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private http: HttpClient,
    private alertCtrl: AlertController
  ) {}

  permissaonova(){
    this.navCtrl.navigateForward('newpermissao')
  }

  async showmodalPermissao(){
    const modal = await this.modalCtrl.create({
      component: ModalPermissaoPage
    })

    modal.onDidDismiss().then((data) => {
      this.montaGrid();
    });

    return await modal.present();
  }

  againpage(){
    this.navCtrl.navigateForward('register')
  }

  montaGrid(){

    const url = `http://localhost/classes/montaGridPermissao.php`;

    this.http.get(url).subscribe(data => {
      // debugger;
      this.linhas = data;

    }, error => {
      // Lide com erros aqui
      console.error(error);
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.montaGrid()
  }

  async modificaStatus(codigo: any){
    const alertcadastrado = await this.alertCtrl.create({
      header: "Deseja atualizar o status da pessoa selecionada?",
      buttons: [
        {
        text:'Sim',
        handler: () => {
          this.atualizaStatus(codigo);
          this.modalCtrl.dismiss();
        }
        },
        {
        text:'Não',
        handler: () => {
          this.modalCtrl.dismiss();
        }
        }
      ]
    })

    await alertcadastrado.present();
  }


  atualizaStatus(codigo: any){
    const url = `http://localhost/classes/alteracaoStatus.php?codigo=${codigo}`;

    this.http.get(url).subscribe(data => {
      this.montaGrid()
    }, error => {
      console.error(error);
    });
  }



}
