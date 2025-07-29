'use client'

import Authentication from "@/components/authentication/authentication"
import { Box, Button, Typography } from "@mui/material"
import { useRouter } from "next/navigation"

const SignUp = () => {
    const router = useRouter()

    const handleLogInInstead = () => {
        router.push('/login')
    }
    return (
        <Box>
            <Authentication variant="sign-up" />
            <Typography> Already have an account? </Typography>
            <Button onClick={handleLogInInstead}> Log In</Button>
        </Box>
    )
}

export default SignUp