import { evaluate } from "mathjs";

export default {
    name: 'calc',
    description: 'Evaluate a mathematical expression',
    async execute(message) {
        const expr = message.content.replace('n!calc', '').trim().replace(/,/g, '');

        if (!expr) {
            return message.channel.send('## Give me something to calculate, man...');
        }

        try {
            const result = evaluate(expr);
            message.channel.send(`## ${expr} = ${result}`);
        } catch (err) {
            message.channel.send('# Invalid math expression, GO BACK TO SCHOOL.')
        }
    }
}