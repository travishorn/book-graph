import db from '$lib/server/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	const { user } = await locals.auth();

	const nodes = await db.raw(
		`
    SELECT    b.id,
              b.title as label,
              'book' as 'group'
    FROM      Book b
    JOIN      UserBook ub
    ON        ub.bookId = b.id
    WHERE     ub.userId = :userId
    UNION
    SELECT    s.id,
              s.id as label,
              'subject' as 'group'
    FROM      Subject s
    JOIN      BookSubject bs
    ON        bs.subjectId = s.id
    JOIN      Book b
    ON        b.id = bs.bookId
    JOIN      UserBook ub
    ON        ub.bookId = b.id
    WHERE     ub.userId = :userId
    GROUP BY  s.id
    HAVING    COUNT(bs.subjectId) >= 2
  `,
		{
			userId: user.id
		}
	);

	const links = await db.raw(
		`
    SELECT DISTINCT s.id as source,
                    b.id as target,
                    1 as value
    FROM            (SELECT s.id, COUNT(bs.subjectId) as num_book_subjects
                    FROM Subject s
                    JOIN BookSubject bs ON bs.subjectId = s.id
                    GROUP BY s.id
                    HAVING COUNT(bs.subjectId) >= 2) s
    JOIN            BookSubject bs
    ON              bs.subjectId = s.id
    JOIN            Book b
    ON              b.id = bs.bookId
    JOIN            UserBook ub
    ON              ub.bookId = b.id
    WHERE           ub.userId = :userId;
  `,
		{
			userId: user.id
		}
	);

	return {
		nodes,
		links
	};
}
