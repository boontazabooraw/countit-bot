import leaderboard from "../commands/leaderboard.js";
import count from "../commands/count.js";
import hm from "../commands/hm.js";
import selfdox from "../commands/selfdox.js";

const commands = {
    'n!leaderboard': leaderboard,
    'n!gger': hm,
    'n!test': selfdox,
}

export default async function messageCreateHandler(message) {
    if (message.author.bot) return;

    // WORD detector
    if (message.content.toUpperCase().includes('NIG')) {
        return count.execute(message);
    }

    // Prefix-based, from the commands constant
    const command = commands[message.content.split(' ')[0]];
    if (command) {
        await command.execute(message);
    }
}