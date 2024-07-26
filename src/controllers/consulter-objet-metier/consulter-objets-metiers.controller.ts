import {Controller, Get, Post, Body, Query} from "@nestjs/common";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {ConsulterObjetsMetiersQueryDto} from "./dtos/consulter-objets-metiers.query.dto";
import {ConsulterObjetsMetiersResponseDto} from "./dtos/consulter-objets-metiers.response.dto";
import {plainToClass, plainToInstance} from "class-transformer";
import {ApiRoute} from "../../ shared/infrastructure/decorators/nest/api-route.decorator";
import {CreateObjetMetierDto} from "./dtos/nouvel-objet-metier-creer.dto";
import {objetsMetiers} from "../enregistrer-objet-metier/enregistrer-objet-metier.controller"; // DTO pour la création d'un nouvel objet métier





@ApiBearerAuth()
@ApiTags("ObjetMetier")
@Controller("consulter-objets-metiers")
export class ConsulterObjetsMetiersController {

    @ApiRoute({
        summary: "Consulter l'ensemble des objet métiers",
        description: "Consulter l'ensemble des objet métiers paginés. Peut-être filtré par recherche",
        created: {
            type: ConsulterObjetsMetiersResponseDto,
            description: "Une liste de objet métiers qui correspond aux paramètres"
        }
    })
    @Get()
    async handle(
        @Query() query: ConsulterObjetsMetiersQueryDto
    ): Promise<ConsulterObjetsMetiersResponseDto> {
        const {page, recherche, limite} = query;
        return plainToInstance(
            ConsulterObjetsMetiersResponseDto,
            {items: objetsMetiers}
        );
    }

    @ApiRoute({
        summary: "Ajouter un nouvel objet métier",
        description: "Ajouter un nouvel objet métier à la liste",
        created: {
            type: CreateObjetMetierDto,
            description: "Le nouvel objet métier ajouté"
        }
    })
    @Post()
    async create(
        @Body() createObjetMetierDto: CreateObjetMetierDto
    ): Promise<CreateObjetMetierDto> {
        const newObjetMetier = {
            id: this.generateId(),
            ...createObjetMetierDto
        };

        return newObjetMetier;
    }

    private generateId() {
        return Math.random().toString(36).substring(2, 15);
    }
}
