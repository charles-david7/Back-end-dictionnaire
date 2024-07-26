import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Post, Put, Param } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { ApiRoute } from "../../ shared/infrastructure/decorators/nest/api-route.decorator";
import { ObjetMetierBodyDto } from "./dtos/objet-metier-body.dto";
import { ObjetMetierResponseDto } from "./dtos/objet-metier.response.dto";



export const objectMetierDatabase : ObjetMetierBodyDto[] = []


@ApiTags("ObjetMetier")
@ApiBearerAuth()
@Controller("objets-metiers")
export class EnregistrerObjetMetierController {
    // constructor(private readonly service: EnregistrerObjetMetierService) {}

    @Post()
    @ApiRoute({
        summary: "Enregistrer un nouveau objet métier",
        description: "Enregistrer un nouveau objet métier",
        created: {
            type: ObjetMetierResponseDto,
            description: "L'objet métier a bien été enregistré"
        }
    })
    async handle(
        @Body() body: ObjetMetierBodyDto,
    ): Promise<ObjetMetierResponseDto> {
        objectMetierDatabase.push(body)
        const response: ObjetMetierResponseDto = plainToInstance(ObjetMetierResponseDto, body);
       console.log("Database", objectMetierDatabase)
        return response;
    }

    @Put('/:id')
    @ApiRoute({
        summary: "Mettre à jour un objet métier existant",
        description: "Mettre à jour un objet métier existant",
        created: {  // Utilisez "created" ici, car "updated" n'est pas reconnu
            type: ObjetMetierResponseDto,
            description: "L'objet métier a bien été mis à jour"
        }
    })
    async update(
        @Param('id') id: string,
        @Body() body: ObjetMetierBodyDto,
    ): Promise<ObjetMetierResponseDto> {
        const response: ObjetMetierResponseDto = plainToInstance(ObjetMetierResponseDto, body);
        console.log('Objet Métier mis à jour :', response); // Log pour vérifier la réception de la requête
        return response;
    }
}
