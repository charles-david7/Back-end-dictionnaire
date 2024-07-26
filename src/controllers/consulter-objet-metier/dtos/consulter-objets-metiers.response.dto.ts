
import { Expose } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"
import {ObjetMetierResponseDto} from "../../../dtos/objet-metier.response.dto";


@Expose()
export class ConsulterObjetsMetiersResponseDto {
    @ApiProperty({
        description: "L'ensemble des Modèle de données ",
        type: [ObjetMetierResponseDto]
    })
    items: ObjetMetierResponseDto[]

    @ApiProperty({
        description: "La page actuelle"
    })
    page: number

    @ApiProperty({
        description: "S'il y a une page suivante"
    })
    hasNextPage: boolean

    @ApiProperty({
        description: "Le nombre total d'éléments"
    })
    totalItems: number
}
