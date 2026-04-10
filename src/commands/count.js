import { insertOrUpdate } from "../db.js";

export default {
    name: 'count',
    description: 'Increment the count column per user/row',
    async execute(message) {
        await insertOrUpdate(message.author.id)
    }
}