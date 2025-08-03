'use client'
import Authentication from "@/components/authentication/authentication"
import { Box, Button, Typography } from "@mui/material"
import styles from './login.module.scss'
import { useRouter } from "next/navigation"

const Login = () => {
    const router = useRouter()

    const handleSignUpInstead = () => {
        router.push('/sign-up')
    }
    return (
        <Box className={styles.container}>
            <Authentication variant="log-in" />
            <Typography> Don't have an account? </Typography>
            <Button onClick={handleSignUpInstead}> Sign Up</Button>
        </Box>
    )
}

export default Login