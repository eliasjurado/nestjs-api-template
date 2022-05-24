import {MigrationInterface, QueryRunner} from "typeorm";

export class aws1653022784817 implements MigrationInterface {
    name = 'aws1653022784817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tag" ("id_tag" SERIAL NOT NULL, "tx_name" text NOT NULL, CONSTRAINT "PK_960e54d73b154750b5201765d72" PRIMARY KEY ("id_tag"))`);
        await queryRunner.query(`CREATE TABLE "user_entity" ("id_user" SERIAL NOT NULL, "tx_name" character varying NOT NULL DEFAULT '', "tx_name_alter" character varying NOT NULL DEFAULT '', "tx_email" character varying NOT NULL, "tx_bio" character varying NOT NULL DEFAULT '', "tx_img" character varying NOT NULL DEFAULT '', "tx_user" character varying NOT NULL, "tx_pass" character varying NOT NULL, CONSTRAINT "PK_3f49815c86ca2613c06305d0a07" PRIMARY KEY ("id_user"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_entity"`);
        await queryRunner.query(`DROP TABLE "tag"`);
    }

}
