import { IsString, IsDefined, IsEnum, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger"
import { Expose, Type } from "class-transformer"
import {AttributObjetMetierBodyDto} from "../../../dtos/attribut-objet-metier-body.dto";
import {Genre} from "../../../donnee/enums/genre.enum";
import {MethodeObjetMetierBodyDto} from "../../../dtos/methode-objet-metier-body.dto";
import {GenreBodyDto} from "../../../dtos/genre-body.dto";

@Expose()
export class ObjetMetierBodyDto {

    @ApiProperty({
        type: String,
        example: 'Données Client'    ,
        description: 'Titre du modèle de données',
    })
    @IsString()
    @IsDefined()
    titre: string

    @ApiProperty({
        type: GenreBodyDto,
        example: 'masculin'    ,
        description: "Genre de l'objet métier",
    })
    @IsDefined()
    @IsEnum(Genre)
    genre: Genre

    @ApiProperty({
        type: String,
        example: 'Modèle Initial'    ,
        description: "Nom initial utilisé pour l'objet métier",
    })
    @IsString()
    @IsOptional()
    nomInitial?: string

    @ApiProperty({
        type: String,
        example: '@NotNull'    ,
        description: "Description des contraintes appliquées à l'objet métier",
    })
    @IsString()
    @IsOptional()
    contrainte?: string

    @ApiProperty({
        type: [AttributObjetMetierBodyDto]    ,
        description: "Liste des attributs de l'objet métier",
    })
    @IsDefined()
    @IsArray({
        each: true
    })
    @ValidateNested({ each: true })
    attributsObjetsMetiers: AttributObjetMetierBodyDto[

        ]

    @ApiProperty({
        type: [MethodeObjetMetierBodyDto]    ,
        description: "Liste des méthodes de l'objet métier",
    })
    @IsOptional()
    @IsArray({
        each: true
    })
    @ValidateNested({ each: true })
    methodesObjetsMetiers?: MethodeObjetMetierBodyDto[]

}