import { ApiProperty } from "@nestjs/swagger"
import { Expose } from "class-transformer"
import {IsDefined, IsEnum} from "class-validator";
import {AttributObjetMetierResponseDto} from "../../../dtos/attribut-objet-metier.response.dto";
import {Genre} from "../../../donnee/enums/genre.enum";
import {MethodeObjetMetierResponseDto} from "./methode-objet-metier-response.dto";
import {GenreResponseDto} from "../../../dtos/genre-body.dto";

@Expose()
export class ObjetMetierResponseDto {

    @ApiProperty({
        type: String,
        example: "Données Client"    ,
        description: "Titre du modèle de données",
    })
    @IsDefined()
    titre: string;

    @ApiProperty({
        type: GenreResponseDto,
        example: "masculin"    ,
        description: "Genre de l'objet métier",
    })
    @IsDefined()
    @IsEnum(Genre)
    genre: Genre;

    @ApiProperty({
        type: String,
        example: "Modèle Initial"    ,
        description: "Nom initial utilisé pour l'objet métier",
    })
    nomInitial?: string;

    @ApiProperty({
        type: String,
        example: "@NotNull"    ,
        description: "Description des contraintes appliquées à l'objet métier",
    })
    contrainte?: string;

    @ApiProperty({
        type: [AttributObjetMetierResponseDto]    ,
        description: "Liste des attributs de l'objet métier",
    })
    @IsDefined()
    attributsObjetsMetiers: AttributObjetMetierResponseDto[]

    @ApiProperty({
        type: [MethodeObjetMetierResponseDto]    ,
        description: "Liste des méthodes de l'objet métier",
    })
    methodesObjetsMetiers?: MethodeObjetMetierResponseDto[]

}
