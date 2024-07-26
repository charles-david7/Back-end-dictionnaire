import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    Column,
} from 'typeorm';
import { Genre, ObjetMetier } from './objet-metier.entity';


export enum MethodeHTTP {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    HEAD = 'HEAD',
}
@Entity('methodes_objet_metier')
export class MethodeObjetMetier {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    nom: string;

    @Column({
        type: 'enum',
        enum: MethodeHTTP,
        nullable: false,
    })
    methodeHTTP: MethodeHTTP;

    @Column({ type: 'varchar', length: 255, nullable: false })
    requete: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    reponse: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    description: string;

    @ManyToOne(
        () => ObjetMetier,
        (objetMetier) => objetMetier.methodesObjetMetier,
    )
    @JoinColumn({ name: 'id_objet_metier', referencedColumnName: 'id' })
    objetMetier: ObjetMetier;
}
