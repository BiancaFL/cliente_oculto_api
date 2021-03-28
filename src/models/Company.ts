import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('companies')
class Company {
  @PrimaryColumn()
  name: string;

  @Column()
  logo: string;

  @Column()
  address: string;

  @Column()
  culinary: string;
}

export default Company;
