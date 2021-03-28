import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateUsers1616635307660 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'birthday',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'sex',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'address_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'work_address_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'favorite_restaurants_ids',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'race',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'favorite_restaurants_neighborhoods',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'sexual_orientation',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'pix_key_type',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'pix_key',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'UserAddress',
        columnNames: ['address_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'adresses',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'UserWorkAddress',
        columnNames: ['work_address_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'adresses',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'UserAddress');
    await queryRunner.dropForeignKey('users', 'UserWorkAddress');
    await queryRunner.dropTable('users');
  }
}
