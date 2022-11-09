import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateUserExample1667963364046 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO public.users
      (name, email, password, created_at, updated_at)
      VALUES('admin', 'admin.admin@gmail.com', '$2b$10$CLOB1ThqEWfnsHYXKM.QeOynKWCCr9Ba.z/2qZekca1X1supXsGBO', 'now'::text::timestamp(6) with time zone, 'now'::text::timestamp(6) with time zone);
      `
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
