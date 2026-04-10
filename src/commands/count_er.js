import { insertOrUpdateER } from "../utils/db.js";

export default {
    name: 'count_er',
    description: 'Increment the count column per user/row',
    async execute(message) {
        await insertOrUpdateER(message.author.id)
    }
}