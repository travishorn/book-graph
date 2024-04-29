/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
	await knex('BookSubject').del();
	await knex('UserBook').del();
	await knex('Subject').del();
	await knex('Book').del();
	await knex('User').del();

	await knex('User').insert([{ id: 'eb509b67-b4c4-4347-a974-d0a54ade079d' }]);

	await knex('Book').insert([
		{ id: 'OL531767W', title: 'The Canterbury Tales' },
		{ id: 'OL3335245W', title: 'The Catcher in the Rye' }
	]);

	await knex('Subject').insert([
		{ id: '813.5 s 3-8, 1991' },
		{ id: '821/.1' },
		{ id: 'Adaptations' },
		{ id: 'Adolescence in literature' },
		{ id: 'Adolescence' },
		{ id: 'Aeration' },
		{ id: 'Alienation in teenagers' },
		{ id: 'American fiction (fictional works by one author)' },
		{ id: 'Appreciation and interpretation' },
		{ id: 'Biblioth\u00e8que nationale de France' },
		{ id: 'Bildungsromans' },
		{ id: 'Book: sga sal' },
		{ id: 'British and irish fiction (fictional works by one author)' },
		{ id: 'Brothers and sisters' },
		{ id: 'Canterbury tales (Chaucer, Geoffrey)' },
		{ id: 'Canterbury' },
		{ id: 'Caulfield, holden (fictitious character)--fiction' },
		{ id: 'Caulfield, holden (fictitious character), fiction' },
		{ id: 'Caulfield, holden (fictitious character)' },
		{ id: 'Chang pian xiao shuo' },
		{ id: 'Chaucer, geoffrey , -1400' },
		{ id: 'Chaucer, geoffrey, -1400, study and teaching' },
		{ id: 'Chaucer, geoffrey, -1400' },
		{ id: "Children's fiction" },
		{ id: "Children's stories, English" },
		{ id: "Children's stories" },
		{ id: 'Christian pilgrims and pilgrimages in fiction' },
		{ id: 'Christian pilgrims and pilgrimages in literature' },
		{ id: 'Christian pilgrims and pilgrimages--poetry' },
		{ id: 'Christian pilgrims and pilgrimages' },
		{ id: 'Christian poetry' },
		{ id: 'Classics' },
		{ id: 'Collections' },
		{ id: 'Conduct of life' },
		{ id: 'Criticism and interpretation' },
		{ id: 'Death' },
		{ id: 'Drama (dramatic works by one author)' },
		{ id: 'Early works to 1800' },
		{ id: 'Emotionally disturbed teenage boys' },
		{ id: 'England, fiction' },
		{ id: 'England' },
		{ id: 'English language' },
		{ id: 'English literature' },
		{ id: 'English Manuscripts' },
		{ id: 'English Narrative poetry' },
		{ id: 'English poetry, history and criticism, middle english, 1100-1500' },
		{ id: 'English poetry' },
		{ id: 'Facsimiles' },
		{ id: 'Fiction, coming of age' },
		{ id: 'Fiction' },
		{ id: 'Fictional works [publication type]' },
		{ id: 'Fictional Works Publication Type' },
		{ id: 'fictional works' },
		{ id: 'Grammar' },
		{ id: 'Great britain, history, norman period, 1066-1154, fiction' },
		{ id: 'Great britain, poetry' },
		{ id: 'great_books_of_the_western_world' },
		{ id: 'Heranwachsender' },
		{ id: 'Histoires pour enfants anglaises' },
		{ id: 'History and criticism' },
		{ id: 'Holden ACaulfield (Fictitious character)' },
		{ id: 'Holden Caulfield (Fictitious character)' },
		{ id: 'Interpersonal relations' },
		{ id: 'juvenile fiction' },
		{ id: 'Juvenile fiction' },
		{ id: 'Juvenile poetry' },
		{ id: 'juvenile works' },
		{ id: 'Large type books' },
		{ id: 'Manuscripts, English (Middle)' },
		{ id: 'Manuscripts' },
		{ id: 'Mathematical models' },
		{ id: 'Medieval Civilization' },
		{ id: 'Medieval Manuscripts' },
		{ id: 'Medieval Tales' },
		{ id: 'Middle ages, fiction' },
		{ id: 'Middle Ages' },
		{ id: 'Middle English' },
		{ id: 'Modernized versions' },
		{ id: 'Moyen \u00c2ge' },
		{ id: 'New york (n.y.), fiction' },
		{ id: 'New York Times reviewed' },
		{ id: 'Open Library Staff Picks' },
		{ id: 'open_syllabus_project' },
		{ id: 'Pilgrims and pilgrimages in literature' },
		{ id: 'Pilgrims and pilgrimages' },
		{ id: 'Poetry (poetic works by one author)' },
		{ id: 'Poetry' },
		{ id: 'Pollution' },
		{ id: 'Pr1867 .k65 2005' },
		{ id: 'Preparatory schools' },
		{ id: 'Prologues and epilogues' },
		{ id: 'Ps3537.a426 c315 1991' },
		{ id: 'Romans, nouvelles, etc. pour la jeunesse' },
		{ id: 'Runaway teenagers in literature' },
		{ id: 'Runaway teenagers--fiction' },
		{ id: 'Runaway teenagers' },
		{ id: 'Salinger, j. d. (jerome david), 1919-2010' },
		{ id: 'School textbooks' },
		{ id: 'Short stories' },
		{ id: 'Storytelling in fiction' },
		{ id: 'Storytelling in literature' },
		{ id: 'Storytelling--poetry' },
		{ id: 'Storytelling' },
		{ id: 'Tales, medieval' },
		{ id: 'teenage boys' },
		{ id: 'Teenage boys' },
		{ id: 'Textual Criticism' },
		{ id: 'Translations into Arabic' },
		{ id: 'Treasure troves' },
		{ id: 'Water' }
	]);

	await knex('UserBook').insert([
		{ userId: 'eb509b67-b4c4-4347-a974-d0a54ade079d', bookId: 'OL531767W' },
		{ userId: 'eb509b67-b4c4-4347-a974-d0a54ade079d', bookId: 'OL3335245W' }
	]);

	await knex('BookSubject').insert([
		{ bookId: 'OL531767W', subjectId: 'Death' },
		{ bookId: 'OL531767W', subjectId: 'English Narrative poetry' },
		{ bookId: 'OL531767W', subjectId: 'Juvenile poetry' },
		{ bookId: 'OL531767W', subjectId: 'Christian pilgrims and pilgrimages in literature' },
		{ bookId: 'OL531767W', subjectId: 'great_books_of_the_western_world' },
		{ bookId: 'OL531767W', subjectId: 'Fiction' },
		{ bookId: 'OL531767W', subjectId: 'Pilgrims and pilgrimages in literature' },
		{ bookId: 'OL531767W', subjectId: 'Storytelling in fiction' },
		{ bookId: 'OL531767W', subjectId: 'Textual Criticism' },
		{ bookId: 'OL531767W', subjectId: 'Storytelling in literature' },
		{ bookId: 'OL531767W', subjectId: 'English literature' },
		{ bookId: 'OL531767W', subjectId: 'Criticism and interpretation' },
		{ bookId: 'OL531767W', subjectId: 'Facsimiles' },
		{ bookId: 'OL531767W', subjectId: 'Water' },
		{ bookId: 'OL531767W', subjectId: 'Treasure troves' },
		{ bookId: 'OL531767W', subjectId: 'English Manuscripts' },
		{ bookId: 'OL531767W', subjectId: 'English poetry' },
		{ bookId: 'OL531767W', subjectId: 'Manuscripts' },
		{ bookId: 'OL531767W', subjectId: 'Middle Ages' },
		{ bookId: 'OL531767W', subjectId: 'Medieval Civilization' },
		{ bookId: 'OL531767W', subjectId: "Children's stories, English" },
		{ bookId: 'OL531767W', subjectId: 'Grammar' },
		{ bookId: 'OL531767W', subjectId: 'Mathematical models' },
		{ bookId: 'OL531767W', subjectId: 'Biblioth\u00e8que nationale de France' },
		{ bookId: 'OL531767W', subjectId: 'English language' },
		{ bookId: 'OL531767W', subjectId: 'Poetry' },
		{ bookId: 'OL531767W', subjectId: 'Canterbury' },
		{ bookId: 'OL531767W', subjectId: "Children's stories" },
		{ bookId: 'OL531767W', subjectId: 'Short stories' },
		{ bookId: 'OL531767W', subjectId: 'Pollution' },
		{ bookId: 'OL531767W', subjectId: 'England' },
		{ bookId: 'OL531767W', subjectId: 'Storytelling' },
		{ bookId: 'OL531767W', subjectId: 'Aeration' },
		{ bookId: 'OL531767W', subjectId: 'Christian pilgrims and pilgrimages in fiction' },
		{ bookId: 'OL531767W', subjectId: 'Medieval Manuscripts' },
		{ bookId: 'OL531767W', subjectId: 'History and criticism' },
		{ bookId: 'OL531767W', subjectId: 'Medieval Tales' },
		{ bookId: 'OL531767W', subjectId: 'Early works to 1800' },
		{ bookId: 'OL531767W', subjectId: 'Christian pilgrims and pilgrimages' },
		{ bookId: 'OL531767W', subjectId: 'Manuscripts, English (Middle)' },
		{ bookId: 'OL531767W', subjectId: 'Translations into Arabic' },
		{ bookId: 'OL531767W', subjectId: 'open_syllabus_project' },
		{ bookId: 'OL531767W', subjectId: 'Modernized versions' },
		{ bookId: 'OL531767W', subjectId: "Children's fiction" },
		{ bookId: 'OL531767W', subjectId: 'Great britain, history, norman period, 1066-1154, fiction' },
		{ bookId: 'OL531767W', subjectId: 'British and irish fiction (fictional works by one author)' },
		{ bookId: 'OL531767W', subjectId: 'Chaucer, geoffrey, -1400' },
		{
			bookId: 'OL531767W',
			subjectId: 'English poetry, history and criticism, middle english, 1100-1500'
		},
		{ bookId: 'OL531767W', subjectId: 'Poetry (poetic works by one author)' },
		{ bookId: 'OL531767W', subjectId: 'Prologues and epilogues' },
		{ bookId: 'OL531767W', subjectId: 'Pilgrims and pilgrimages' },
		{ bookId: 'OL531767W', subjectId: 'Chaucer, geoffrey, -1400, study and teaching' },
		{ bookId: 'OL531767W', subjectId: 'Christian poetry' },
		{ bookId: 'OL531767W', subjectId: 'Great britain, poetry' },
		{ bookId: 'OL531767W', subjectId: 'Tales, medieval' },
		{ bookId: 'OL531767W', subjectId: 'Middle English' },
		{ bookId: 'OL531767W', subjectId: 'Adaptations' },
		{ bookId: 'OL531767W', subjectId: 'Juvenile fiction' },
		{ bookId: 'OL531767W', subjectId: 'England, fiction' },
		{ bookId: 'OL531767W', subjectId: 'Middle ages, fiction' },
		{ bookId: 'OL531767W', subjectId: 'Drama (dramatic works by one author)' },
		{ bookId: 'OL531767W', subjectId: 'Large type books' },
		{ bookId: 'OL531767W', subjectId: 'Appreciation and interpretation' },
		{ bookId: 'OL531767W', subjectId: 'School textbooks' },
		{ bookId: 'OL531767W', subjectId: 'Collections' },
		{ bookId: 'OL531767W', subjectId: 'Canterbury tales (Chaucer, Geoffrey)' },
		{ bookId: 'OL531767W', subjectId: 'Moyen \u00c2ge' },
		{ bookId: 'OL531767W', subjectId: 'Romans, nouvelles, etc. pour la jeunesse' },
		{ bookId: 'OL531767W', subjectId: 'Histoires pour enfants anglaises' },
		{ bookId: 'OL531767W', subjectId: 'Chaucer, geoffrey , -1400' },
		{ bookId: 'OL531767W', subjectId: 'Christian pilgrims and pilgrimages--poetry' },
		{ bookId: 'OL531767W', subjectId: 'Storytelling--poetry' },
		{ bookId: 'OL531767W', subjectId: 'Pr1867 .k65 2005' },
		{ bookId: 'OL531767W', subjectId: '821/.1' },
		{ bookId: 'OL3335245W', subjectId: 'fictional works' },
		{ bookId: 'OL3335245W', subjectId: 'Runaway teenagers' },
		{ bookId: 'OL3335245W', subjectId: 'Fiction' },
		{ bookId: 'OL3335245W', subjectId: 'Adolescence' },
		{ bookId: 'OL3335245W', subjectId: 'teenage boys' },
		{ bookId: 'OL3335245W', subjectId: 'Runaway teenagers in literature' },
		{ bookId: 'OL3335245W', subjectId: 'Brothers and sisters' },
		{ bookId: 'OL3335245W', subjectId: 'Emotionally disturbed teenage boys' },
		{ bookId: 'OL3335245W', subjectId: 'Preparatory schools' },
		{ bookId: 'OL3335245W', subjectId: 'Open Library Staff Picks' },
		{ bookId: 'OL3335245W', subjectId: 'Bildungsromans' },
		{ bookId: 'OL3335245W', subjectId: 'Alienation in teenagers' },
		{ bookId: 'OL3335245W', subjectId: 'Interpersonal relations' },
		{ bookId: 'OL3335245W', subjectId: 'juvenile works' },
		{ bookId: 'OL3335245W', subjectId: 'juvenile fiction' },
		{ bookId: 'OL3335245W', subjectId: 'Fictional Works Publication Type' },
		{ bookId: 'OL3335245W', subjectId: 'Classics' },
		{ bookId: 'OL3335245W', subjectId: 'Caulfield, holden (fictitious character), fiction' },
		{ bookId: 'OL3335245W', subjectId: 'New york (n.y.), fiction' },
		{ bookId: 'OL3335245W', subjectId: 'American fiction (fictional works by one author)' },
		{ bookId: 'OL3335245W', subjectId: 'Fiction, coming of age' },
		{ bookId: 'OL3335245W', subjectId: 'Caulfield, holden (fictitious character)' },
		{ bookId: 'OL3335245W', subjectId: 'Salinger, j. d. (jerome david), 1919-2010' },
		{ bookId: 'OL3335245W', subjectId: 'Adolescence in literature' },
		{ bookId: 'OL3335245W', subjectId: 'Holden Caulfield (Fictitious character)' },
		{ bookId: 'OL3335245W', subjectId: 'Large type books' },
		{ bookId: 'OL3335245W', subjectId: 'New York Times reviewed' },
		{ bookId: 'OL3335245W', subjectId: 'Holden ACaulfield (Fictitious character)' },
		{ bookId: 'OL3335245W', subjectId: 'Conduct of life' },
		{ bookId: 'OL3335245W', subjectId: 'Chang pian xiao shuo' },
		{ bookId: 'OL3335245W', subjectId: 'Heranwachsender' },
		{ bookId: 'OL3335245W', subjectId: 'Teenage boys' },
		{ bookId: 'OL3335245W', subjectId: 'Fictional works [publication type]' },
		{ bookId: 'OL3335245W', subjectId: 'Caulfield, holden (fictitious character)--fiction' },
		{ bookId: 'OL3335245W', subjectId: 'Runaway teenagers--fiction' },
		{ bookId: 'OL3335245W', subjectId: 'Ps3537.a426 c315 1991' },
		{ bookId: 'OL3335245W', subjectId: 'Book: sga sal' },
		{ bookId: 'OL3335245W', subjectId: '813.5 s 3-8, 1991' }
	]);
}