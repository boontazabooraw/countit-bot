export default {
    name: 'howmuch',
    description: 'Calculates how much of a... *coughs* the user is',
    async execute (message) {
        const mentionedUser = message.mentions.users.first() || message.author;
        const percentage = Math.floor(Math.random() * 101);

        message.channel.send(
            `${mentionedUser} is ${percentage}% a **NIGGER**! 💀💀💀💀💀💀`
        )

        if(percentage === 100) {
            message.channel.send(
                `AGHAGHHGAHAGHA ${mentionedUser} YOU ABSOLUTE **NIGGER** !!! 😡😡😡😡`
            )
        }


    }
}