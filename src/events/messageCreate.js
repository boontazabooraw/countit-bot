import { getLeaderboard, insertOrUpdate } from "../commands/leaderboard.js";

export default function messageCreateHandler(message, db) {
    if (message.author.bot) return;

    // Count the nis
    if (message.content.toUpperCase().includes('NIG')) {
        insertOrUpdate(db, message.author.id);
    }

    if (message.content === '!leaderboard') {
        const rows = getLeaderboard(db);

        if (rows.length === 0) {
            message.channel.send('```WALA PANG NAGNWORD GAGO!```');
            return;
        }

        const leaderboard = rows
            .map((row, i) => `${i + 1}. <@${row.user_id}> - ${row.count}`)
            .join('\n');

        message.channel.send(`🏆 HALL OF NEGROS 🏆\n${leaderboard}`);
    }

    if (message.content === '!ping') {
        message.channel.send('Yes yes yes');
    }


}