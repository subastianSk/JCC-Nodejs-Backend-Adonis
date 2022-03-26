import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Casts extends BaseSchema {
  protected tableName = 'casts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('genres_id').unsigned().references('genres.id').notNullable()
      table.integer('actors_id').unsigned().references('actors.id').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true, true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
