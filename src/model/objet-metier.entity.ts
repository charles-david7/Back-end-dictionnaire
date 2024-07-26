import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { AttributObjetMetier } from './attribut-objet-metier.entity';
import { MethodeObjetMetier } from './methode-objet-metier.entity';

export enum Genre {
    MASCULIN = 'masculin',
    FEMININ = 'féminin',
    MIXTE = 'mixte',
}

@Entity('objets_metier')
export class ObjetMetier {
@PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    titre: string;

    @Column({
        type: 'enum',
        enum: Genre,
        nullable: false,
    })
    genre: Genre;

    @Column({ type: 'varchar', length: 100 })
    nomInitial: string;

    @Column({ type: 'varchar', length: 255 })
    description: string;

    @Column({ type: 'varchar', length: 100 })
    categorie: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    contrainte: string;

    @OneToMany(
        () => AttributObjetMetier,
        (attributObjetMetier) => attributObjetMetier.objetMetier,
    )
    @JoinColumn({ name: 'id_attribut_objet_metier', referencedColumnName: 'id' })
    attributObjetMetierList?: AttributObjetMetier[];

    @OneToMany(
        () => MethodeObjetMetier,
        (methodeObjetMetier) => methodeObjetMetier.objetMetier,
    )
    @JoinColumn({ name: 'id_methode_objet_metier', referencedColumnName: 'id' })
    methodesObjetMetier?: MethodeObjetMetier[];
}
