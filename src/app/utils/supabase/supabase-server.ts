import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAPIkey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string
//checks each user. are they logged in or do i need to give them a login cookie
export async function createClient() {
    //notes thats the site leaves
    const cookieStore = await cookies()

    return createServerClient(supabaseURL!, supabaseAPIkey!, {
        cookies: {
            //reads cookies
            getAll() {
                return cookieStore.getAll()
            },
            //write cookies
            setAll(cookiesToSet) {
                cookiesToSet.forEach(({ name, value, options }) =>
                    cookieStore.set(name, value, options))
            }
        }
    })
}