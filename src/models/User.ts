import {
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import Address from './Address';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  birthday: string;

  @Column()
  sex: string;

  @Column()
  address_id: string;

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @Column()
  work_address_id: string;

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'work_address_id' })
  work_address: Address;

  @Column()
  favorite_restaurants_ids: string;

  @Column()
  race: string;

  @Column()
  favorite_restaurants_neighborhoods: string;

  @Column()
  sexual_orientation: string;

  @Column()
  pix_key_type: string;

  @Column()
  pix_key: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
