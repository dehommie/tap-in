'use client'
import { createClient } from "@/utils/supabase/supabase-client"
import { Box, Button, FormControl, TextField, Typography } from "@mui/material"
import { useState } from "react"

interface AuthProps {
    variant?: 'sign-up' | 'log-in'
}

type FormData = {
    password: string
    email: string
}
const Authentication = ({ variant }: AuthProps) => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState('')
    const [formData, setFormData] = useState<FormData>({
        password: '',
        email: '',
    })
    const handleLogin = async () => {
        console.log('log in triggered')
        const { email, password } = formData

        const supabase = createClient()
        const { data, error } = await supabase.auth.signInWithPassword({ email: formData.email, password })
    }

    const handleSignUp = async () => {
        console.log('sign up triggered')
        const { email, password } = formData
        const supabase = createClient()
        const { data, error } = await supabase.auth.signUp({
            email, password, options: {
                data: {
                    email: formData.email
                }
            }
        })
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    return (
        <Box>
            {variant === 'log-in' ?
                <Typography> Log In </Typography>
                : <Typography> Sign Up </Typography>
            }
            <FormControl>
                <TextField placeholder="email" name='email' value={formData.email} onChange={handleChange} />
                <TextField placeholder="password" name='password' type="password" value={formData.password} onChange={handleChange} />
                <Button type="submit" onClick={variant === 'log-in' ? handleLogin : handleSignUp}>
                    {variant === 'log-in' ?
                        <Typography> Log In </Typography>
                        : <Typography> Sign Up </Typography>
                    }
                </Button>
            </FormControl>
        </Box>
    )
}

export default Authentication