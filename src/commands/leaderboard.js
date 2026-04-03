export function insertOrUpdate(db, userId) {
    db.prepare(`
            INSERT INTO nword_counts (user_id, count)
            VALUES (?, 1)
            ON CONFLICT(user_id) DO UPDATE SET count = count + 1
        `).run(userId);
}

export function getLeaderboard(db) {
    return db.prepare(`
            SELECT user_id, count
            FROM nword_counts
            ORDER BY count DESC
            LIMIT 10
        `).all();
}