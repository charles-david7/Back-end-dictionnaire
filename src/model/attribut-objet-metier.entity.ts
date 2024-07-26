import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { ObjetMetier } from './objet-metier.entity';

enum Genre {
    MASCULIN = 'masculin',
    FEMININ = 'féminin',
    MIXTE = 'mixte',
}

@Entity('attributs_objet_metier')
export class AttributObjetMetier {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    donnee: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    contrainte: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    type: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'text', nullable: true })
    exemple: string;

    @Column({ name: 'nom_initial', type: 'varchar', length: 255, nullable: true })
    nomInitial: string;

    @Column({
        type: 'enum',
        enum: Genre,
        nullable: false,
    })
    genre: Genre;

    @ManyToOne(
        () => ObjetMetier,
        (objetMetier) => objetMetier.attributObjetMetierList,
    )
    @JoinColumn({ name: 'id_objet_metier', referencedColumnName: 'id' })
    objetMetier: ObjetMetier;
}
