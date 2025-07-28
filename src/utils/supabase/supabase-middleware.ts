import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAPIkey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({ request })

    const supabase = createServerClient(supabaseURL!, supabaseAPIkey!, {
        cookies: {
            //reads cookies
            getAll() {
                return request.cookies.getAll()
            },
            //write cookies
            setAll(cookiesToSet) {

                cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                supabaseResponse = NextResponse.next({ request })
                cookiesToSet.forEach(({ name, value, options }) =>
                    supabaseResponse.cookies.set(name, value, options))
            }
        }
    })
    
    await supabase.auth.getUser()
    return supabaseResponse
}

