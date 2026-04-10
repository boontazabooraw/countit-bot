import leaderboard from "../commands/leaderboard.js";
import count from "../commands/count.js";
import count_er from "../commands/count_er.js";
import hm from "../commands/hm.js";
import selfdox from "../commands/selfdox.js";
import calc from "../commands/calc.js";
import fetchUser from "../commands/fetchUser.js";

const commands = {
    'n!leaderboard': leaderboard,
    'n!gger': hm,
    'n!test': selfdox,
    'n!calc': calc,
    'n!fetch': fetchUser,
}

export default async function messageCreateHandler(message) {
    if (message.author.bot) return;

    // WORD detector
    // if (message.content.toUpperCase().includes('NIG')) {
    //     return count.execute(message);
    // }

    if (/N+I+G+A+$/i.test(message.content.toUpperCase())) {
        return count.execute(message);
    }

    if (/N+I+G+E+R+$/i.test(message.content.toUpperCase())) {
        count.execute(message);
        return count_er.execute(message);
    }



    // Prefix-based, from the commands constant
    const command = commands[message.content.split(' ')[0]];
    if (command) {
        await command.execute(message);
        let forLog = {
            user: `${message.author.username} | ${message.author.globalName}`,
            query: message.content,
        }
        console.log(JSON.stringify(forLog));
    }
}