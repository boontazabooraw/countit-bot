import { getLeaderboard, insertOrUpdate } from "../db.js";

export default async function messageCreateHandler(message) {
    if (message.author.bot) return;

    // Count the nis
    if (message.content.toUpperCase().includes('NIG')) {
        await insertOrUpdate(message.author.id);
    }

    // Leaderboard (Top 10)
    if (message.content === 'n!leaderboard') {
        const rows = await getLeaderboard();

        if (!rows || rows.length === 0) {
            message.channel.send('```BADING BA KAYO TANGINA?!```');
            return;
        }

        const leaderboard = rows
            .map((row, i) => `${i + 1}. <@${row.user_id}> - ${row.count}`)
            .join('\n');

        message.channel.send(`🏆 HALL OF NEGROS 🏆\n${leaderboard}`);
    }

    if (message.content === 'n!ping') {
        message.channel.send('Buhay pa ako nigga');
    }

    if (message.content === 'n!selftest') {
        message.channel.send('NIGGAAAAAAAAAAAAAAAA!!!');
    }

    // 0-100%
    if (message.content.startsWith('n!gger')) {
        const mentionedUser = message.mentions.users.first() || message.author;
        const percentage = Math.floor(Math.random() * 101);

        message.channel.send(
            `${mentionedUser} is ${percentage}% a knee gear! 💀💀💀💀💀💀`
        )

        if(percentage === 100) {
            message.channel.send(
                `AGHAGHHGAHAGHA TANGINA ANG ITIM-ITIM MO ${mentionedUser}!!! 😡😡😡😡`
            )
        }

    }
}