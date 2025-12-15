import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabaseInstance = null

if (supabaseUrl && supabaseAnonKey) {
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
} else if (import.meta.env.DEV) {
  // Warn during development so missing envs do not crash the UI.
  console.warn(
    'Supabase credentials are missing. Contact form submissions will be disabled until VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are provided.',
  )
}

export const supabase = supabaseInstance
