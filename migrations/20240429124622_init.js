/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
	return knex.schema
		.createTable('User', function (table) {
			table.uuid('id').primary();
		})
		.createTable('Book', function (table) {
			table.string('id').primary();
			table.string('title').notNullable();
		})
		.createTable('Subject', function (table) {
			table.string('id').primary();
		})
		.createTable('UserBook', function (table) {
			table.uuid('userId').references('id').inTable('User');
			table.uuid('bookId').references('id').inTable('Book');
			table.primary(['userId', 'bookId']);
		})
		.createTable('BookSubject', function (table) {
			table.uuid('bookId').references('id').inTable('Book');
			table.uuid('subjectId').references('id').inTable('Subject');
			table.primary(['bookId', 'subjectId']);
		});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
	return knex.schema
		.dropTable('BookSubject')
		.dropTable('UserBook')
		.dropTable('Subject')
		.dropTable('Book')
		.dropTable('User');
}
