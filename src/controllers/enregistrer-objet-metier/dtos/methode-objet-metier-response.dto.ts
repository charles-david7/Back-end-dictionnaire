// src/modules/objets-metiers/dtos/methode-objet-metier-response.dto.ts
import { IsString, IsDefined, IsOptional } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

@Expose()
export class MethodeObjetMetierResponseDto {
    @ApiProperty({
        type: String,
        example: 'create',
        description: 'Nom de la méthode',
    })
    @IsString()
    @IsDefined()
    nom: string;

    @ApiProperty({
        type: String,
        example: 'void',
        description: 'Type de retour de la méthode',
    })
    @IsString()
    @IsDefined()
    retour: string;

    @ApiProperty({
        type: String,
        example: 'Créer un nouvel objet métier',
        description: 'Description de la méthode',
    })
    @IsString()
    @IsOptional()
    description?: string;
}
