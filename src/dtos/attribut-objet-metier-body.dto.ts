import { IsString, IsDefined, IsOptional } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger"
import { Expose, Type } from "class-transformer"
import {Genre} from "../donnee/enums/genre.enum";
import {GenreBodyDto} from "./genre-body.dto";

@Expose()
export class AttributObjetMetierBodyDto {

    @ApiProperty({
        type: String,
        example: 'nomClient'    ,
        description: "La donnée représentée par cet attribut",
    })
    @IsString()
    @IsDefined()
    donnee: string

    @ApiProperty({
        type: String,
        example: '@MaxLength(10)',
        description: "Contraintes spécifiques appliquées à l'attribut",
    })
    @IsString()
    @IsOptional()
    contrainte?: string

    @ApiProperty({
        type: String,
        example: 'String'    ,
        description: "Type de donnée de l'attribut",
    })
    @IsString()
    @IsDefined()
    type: string

    @ApiProperty({
        type: String,
        example: "Description de l'attribut" })
        @IsString()
            @IsOptional()
        description?: string

        @ApiProperty({
            type: String,
            example: '"Exemple de valeur"'    ,
            description: "Exemple de valeur pour l'attribut",
        })
            @IsString()
            @IsOptional()
        exemple?: string

        @ApiProperty({
            type: String,
            example: 'Attribut Initial' ,
            description: "Nom initial de l'attribut dans le modèle de données",
        })
            @IsString()
            @IsDefined()
        nomInitial: string

        @ApiProperty({
            type: GenreBodyDto,
            example: 'masculin'    ,
            description: "Genre de l'attribut (masculin, féminin, etc.)",
    })
    @IsDefined()
    genre: Genre

}