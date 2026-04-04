import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

export async function insertOrUpdate(userId) {
    try {
        const { error } = await supabase
            .from('nword_counts')
            .upsert(
                { user_id: userId, count: 1 },
                { onConflict: 'user_id' }
            )
            .select();

        if (error) {
            console.error(`Supabase Insert Error: ${error.message}`);
        }
    } catch (err) {
        console.error(`Error: ${err}`)
    }
}

export async function getLeaderboard() {
    try {
        const { data, error } = await supabase
            .from('nword_counts')
            .select('*')
            .order('count', { ascending: false })
            .limit(10)

        if (error) {
            console.error(`Supabase Select Error: ${error.message}`);
            return [];
        }

        return data || [];
    } catch (err) {
        console.error(`Error: ${err}`)
        return [];
    }
}