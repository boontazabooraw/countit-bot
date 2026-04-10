import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

// DB Calls

export async function insertOrUpdate(userId) {
    try {
        const { data: existing, error: selectError } = await supabase
            .from('nword_counts')
            .select('count')
            .eq('user_id', userId)
            .single();

        // PGRST116 means no rows were found
        if (selectError && selectError.code !== 'PGRST116') {
            console.error(`Supabase Select Error: ${error.message}`);
            return;
        }

        let newCount = 1;
        if (existing) {
            newCount = existing.count + 1;
        }

        const { error: upsertError } = await supabase
            .from('nword_counts')
            .upsert({ user_id: userId, count: newCount }, { onConflict: 'user_id' });

        if (upsertError) {
            console.error(`Supabase Upsert Error: ${upsertError.message}`)
        }
    } catch (err) {
        console.error(`Error: ${err}`)
    }
}

export async function insertOrUpdateER(userId) { // For the Hard R
    try {
        const { data: existing, error: selectError } = await supabase
            .from('nword_counts')
            .select('count_er')
            .eq('user_id', userId)
            .single();

        // PGRST116 means no rows were found
        if (selectError && selectError.code !== 'PGRST116') {
            console.error(`Supabase Select Error: ${error.message}`);
            return;
        }

        let newCount = 1;
        if (existing) {
            newCount = existing.count_er + 1;
        }

        const { error: upsertError } = await supabase
            .from('nword_counts')
            .upsert({ user_id: userId, count_er: newCount }, { onConflict: 'user_id' });

        if (upsertError) {
            console.error(`Supabase Upsert Error: ${upsertError.message}`)
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