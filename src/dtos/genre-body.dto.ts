// src/modules/objets-metiers/dtos/genre-body.dto.ts
import { IsString, IsDefined, IsEnum } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export enum Genre {
    MASCULIN = 'masculin',
    FEMININ = 'féminin',
    MIXTE = 'mixte',
}

@Expose()
export class GenreBodyDto {
    @ApiProperty({
        enum: Genre,
        example: Genre.MASCULIN,
        description: "Genre de l'objet métier",
    })
    @IsDefined()
    @IsEnum(Genre)
    genre: Genre;
}


@Expose()
export class GenreResponseDto {
    @ApiProperty({
        enum: Genre,
        example: Genre.MASCULIN,
        description: "Genre de l'objet métier",
    })
    @IsEnum(Genre)
    genre: Genre;
}
