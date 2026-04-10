import leaderboard from "../commands/leaderboard.js";
import count from "../commands/count.js";
import count_er from "../commands/count_er.js";
import hm from "../commands/hm.js";
import selfdox from "../commands/selfdox.js";
import calc from "../commands/calc.js";

const commands = {
    'n!leaderboard': leaderboard,
    'n!gger': hm,
    'n!test': selfdox,
    'n!calc': calc,
}

export default async function messageCreateHandler(message) {
    if (message.author.bot) return;

    // WORD detector
    // if (message.content.toUpperCase().includes('NIG')) {
    //     return count.execute(message);
    // }

    if (/NIG+GA+$/i.test(message.content.toUpperCase())) {
        return count.execute(message);
    }

    if (/NIG+GE+R+$/i.test(message.content.toUpperCase())) {
        return count_er.execute(message);
    }



    // Prefix-based, from the commands constant
    const command = commands[message.content.split(' ')[0]];
    if (command) {
        await command.execute(message);
    }
}