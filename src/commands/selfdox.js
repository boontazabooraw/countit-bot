export default {
    name: 'selfdox',
    description: 'Just a test command, Nothing special...',
    async execute(message) {
        message.channel.send("I live in Render City inside Supabase street.")
    }
}