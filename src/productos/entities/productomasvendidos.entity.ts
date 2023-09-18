import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductosMasVendidos {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  imagen: string;
  @Column()
  precio: number;
}
