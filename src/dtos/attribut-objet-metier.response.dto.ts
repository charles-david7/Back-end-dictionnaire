import { ApiProperty } from "@nestjs/swagger"
import { Expose } from "class-transformer"
import {IsDefined} from "class-validator";
import {Genre, GenreResponseDto} from "./genre-body.dto";

@Expose()
export class AttributObjetMetierResponseDto {

    @ApiProperty({
        type: String,
        example: "nomClient"    ,
        description: "La donnée représentée par cet attribut",
    })
    @IsDefined()
    donnee: string;

    @ApiProperty({
        type: String,
        example: "@MaxLength(10)"    ,
        description: "Contraintes spécifiques appliquées à l'attribut",
    })
    contrainte?: string;

    @ApiProperty({
        type: String,
        example: "String"    ,
        description: "Type de donnée de l'attribut",
    })
    @IsDefined()
    type: string;

    @ApiProperty({
        type: String,
        example: "Description de l'attribut"  })
    description?: string;

    @ApiProperty({
        type: String,
        example: "Exemple de valeur",
        description: "Exemple de valeur pour l'attribut",
    })
    exemple?: string;

    @ApiProperty({
        type: String,
        example: "Attribut Initial"    ,
        description: "Nom initial de l'attribut dans le modèle de données",
    })
    @IsDefined()
    nomInitial: string;

    @ApiProperty({
        type: GenreResponseDto,
        example: "masculin"    ,
        description: "Genre de l'attribut (masculin, féminin, etc.)",
    })
    @IsDefined()
    genre: Genre;

}