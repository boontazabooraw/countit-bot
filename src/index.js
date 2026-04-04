import { Client, GatewayIntentBits } from "discord.js";
import dotenv from 'dotenv';
import messageCreateHandler from "./events/messageCreate.js";

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => messageCreateHandler(message));

// TESTING WITH LOCAL VARIABLE
//
// const Nicounts = {};
//
// client.on('messageCreate', (message) => {
//     if (message.author.bot) return;

//     // Count the nis
//     if (message.content.toUpperCase().includes('NIG')) {
//         const userId = message.author.id;
//         Nicounts[userId] = (Nicounts[userId] || 0) + 1;
//     }

//     if (message.content === '!leaderboard') {
//         const sorted = Object.entries(Nicounts)
//             .sort((a, b) => b[1] - a[1])
//             .slice(0, 9);
//         if (sorted.length === 0) {
//             message.channel.send('WALA PANG NWORD GAGO!');
//             return;
//         }

//         const leaderboard = sorted
//             .map(([userId, count], i) => `${i + 1}. <@${userId}> - ${count}`)
//             .join('\n');
//         message.channel.send(`🏆 HALL OF NEGROS 🏆\n${leaderboard}`);
//     }

//     if (message.content === '!ping') {
//         message.channel.send('Yes yes yes');
//     }
// });

client.login(process.env.TOKENING_SHET);