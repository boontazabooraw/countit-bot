import { EmbedBuilder } from "discord.js";

export default {
    name: 'fetch',
    description: "I swear man, I'm no stalker.",
    async execute(message) {
        const mentionedUser = message.mentions.users.first() || message.author;

        const embed = new EmbedBuilder()
            .setColor(0x2f3136) // Dark gray for a sleek look
            .setAuthor({
                name: mentionedUser.tag,
                iconURL: mentionedUser.displayAvatarURL({ size: 64 })
            })
            .setThumbnail(mentionedUser.displayAvatarURL({ size: 256 }))
            .addFields(
                { name: "ID", value: mentionedUser.id, inline: true },
                { name: "Username", value: mentionedUser.username, inline: true },
                { name: "Discriminator", value: mentionedUser.discriminator, inline: true },
                { name: "Bot", value: mentionedUser.bot ? "Yes" : "No", inline: true },
                { name: "Created At", value: mentionedUser.createdAt.toISOString(), inline: false },
                { name: "Avatar Hash", value: mentionedUser.avatar || "None", inline: false }
            )
            .setFooter({ text: "Compact user info embed" });

        message.channel.send({ embeds: [embed] });
        message.channel.send(`# Raw JSON: `);
        message.channel.send(
            "```json\n" +
            JSON.stringify({
                id: mentionedUser.id,
                username: mentionedUser.username,
                tag: mentionedUser.tag,
                discriminator: mentionedUser.discriminator,
                bot: mentionedUser.bot,
                createdAt: mentionedUser.createdAt.toISOString(),
                avatar: mentionedUser.avatar,
                avatarURL: mentionedUser.avatarURL(),
                displayAvatarURL: mentionedUser.displayAvatarURL()
            }, null, 2) +
            "\n```"
        )
    }
}