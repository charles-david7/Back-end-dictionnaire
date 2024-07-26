import { Module } from '@nestjs/common';
import {AppService} from "./app.service";
import {AppController} from "./app.controller";
import {
  EnregistrerObjetMetierController
} from "./controllers/enregistrer-objet-metier/enregistrer-objet-metier.controller";
import {
  ConsulterObjetsMetiersController
} from "./controllers/consulter-objet-metier/consulter-objets-metiers.controller";


@Module({
  imports: [],
  controllers: [EnregistrerObjetMetierController],
  providers: [

  ],
})
export class AppModule {}
