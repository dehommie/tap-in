'use client'
import Login from "@/app/login/page"
import { Box, Button, IconButton } from "@mui/material"
import { AuthError, User } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"
// import { redirect } from "next/navigation"
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

interface NavProps {
    user: User | null
    error: AuthError | null
}
const Nav = (
    { user, error }: NavProps
) => {
    const router = useRouter()
    if (error) {
        console.log(error)
    } else {
        console.log(user)
    }
    const handleLoginRoute = () => {
        !user && router.push('/login')
    }
    return (
        <Box>

            {user ?  <IconButton><SentimentSatisfiedAltIcon/> </IconButton> :  <Button onClick={handleLoginRoute}/>}
        </Box>
    )
}

export default Nav