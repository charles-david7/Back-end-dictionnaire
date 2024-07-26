
import { IsNumber, IsOptional, IsString, Min } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"
import { Expose, Transform } from "class-transformer"

@Expose()
export class ConsulterObjetsMetiersQueryDto {
    @IsNumber()
    @Min(1)
    @IsOptional()
    @Transform(({ value }) => {
        if (value && value > 100) {
            return 100
        }
        return value
    })
    @ApiProperty({ type: Number, minimum: 1, maximum: 100, required: false })
    limite?: number

    @IsNumber()
    @Min(1)
    @IsOptional()
    @ApiProperty({ type: Number, minimum: 1, required: false })
    page?: number

    @ApiProperty({ type: Number, required: false })
    @IsNumber()
    @IsOptional()
    curseur?: number

    @ApiProperty({ type: String, required: false })
    @IsOptional()
    @IsString()
    recherche?: string
}
