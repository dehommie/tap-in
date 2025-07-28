import { createBrowserClient } from "@supabase/ssr"

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAPIkey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string

export function createClient() {
    return createBrowserClient(
        supabaseURL!, supabaseAPIkey!
    )
}