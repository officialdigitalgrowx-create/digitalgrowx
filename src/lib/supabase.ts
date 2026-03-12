import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Supabase client for server-side use (API routes).
 * Uses the anon key which respects RLS policies.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
