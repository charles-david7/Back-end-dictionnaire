import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {Genre} from "./objet-metier.entity";

@Entity("attributs_objets_metiers")
export class AttributObjetMetierModel {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    donnee: string;

    @Column({ nullable: true })
    contrainte?: string;

    @Column()
    type: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ nullable: true })
    exemple?: string;

    @Column()
    nomInitial: string;

    @Column()
    genre: Genre;
    static objetMetier: string | ((object: AttributObjetMetierModel) => any);

}
