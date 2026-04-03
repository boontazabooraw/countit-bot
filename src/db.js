// src/db.js
import Database from 'better-sqlite3';

export function setupDb() {
    const db = new Database('naegus.sqlite');

    // Create table
    db.prepare(`
        CREATE TABLE IF NOT EXISTS nword_counts (
        user_id TEXT PRIMARY KEY,
        count INTEGER DEFAULT 0
        )
    `).run();
    return db;
}