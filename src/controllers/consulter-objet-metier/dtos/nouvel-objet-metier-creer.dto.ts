import { IsString, IsDefined, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class AttributObjetMetierDto {
    @IsString()
    @IsDefined()
    donnee: string;

    @IsString()
    contrainte: string;

    @IsString()
    @IsDefined()
    type: string;

    @IsString()
    @IsDefined()
    description: string;

    exemple: any;

    @IsString()
    @IsDefined()
    nomInitial: string;

    @IsString()
    @IsDefined()
    genre: string;
}

export class CreateObjetMetierDto {
    @IsString()
    @IsDefined()
    titre: string;

    @IsString()
    @IsDefined()
    genre: string;

    @IsString()
    @IsDefined()
    nomInitial: string;

    @IsString()
    contrainte: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AttributObjetMetierDto)
    attributObjetMetierList: AttributObjetMetierDto[];
}

