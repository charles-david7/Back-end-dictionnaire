import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import {Genre} from "../donnee/enums/genre.enum";
import { MethodeObjetMetier } from './methode-objet-metier.entity';
import { AttributObjetMetier } from './attribut-objet-metier.entity';
@Entity("objets_metiers")
export class ObjetMetierModel {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    titre: string;

    @Column()
    genre: Genre;

    @Column({ nullable: true })
    nomInitial?: string;

    @Column({ nullable: true })
    contrainte?: string;

    @OneToMany(() => AttributObjetMetier,
        (attributObjetMetier) => attributObjetMetier.objetMetier, {
            cascade: true,
            onDelete: "CASCADE"
        })
    @Column()
    attributsObjetsMetiers: AttributObjetMetier[];

    @OneToMany(() => MethodeObjetMetier,
        (methodeObjetMetier) => methodeObjetMetier.objetMetier, {
            cascade: true,
            onDelete: "CASCADE"
        })
    @Column({ nullable: true })
    methodesObjetsMetiers?: MethodeObjetMetier[];

}
