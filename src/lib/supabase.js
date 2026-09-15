import { createClient } from "@supabase/supabase-js";

const supabaseUrl=import.meta.env.VITE_SUPABASE_URL
const supabasePublishedKey =import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY


const supabase=createClient(supabaseUrl,supabasePublishedKey)

export default supabase;