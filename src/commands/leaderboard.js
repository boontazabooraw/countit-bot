import { getLeaderboard } from "../utils/db.js";

export default {
    name: 'leaderboard',
    description: 'Ah yes... the list of the most racist people in the server.',
    async execute(message) {
        const rows = await getLeaderboard();

        if (!rows || rows.length === 0) {
            return message.channel.send("Damn, wala pa nagN-word sainyo?!");
        }

        const leaderboard = rows
            .map((row, i) => `**${i + 1}.** <@${row.user_id}> - ${row.count} times (${row.count_er} with Hard-R)`)
            .join('\n');

        message.channel.send(`# 🏆 Top N-Word Users of All Time 🏆\n${leaderboard}`);
    }
}