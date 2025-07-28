import { Box, Grid, Stack, Typography } from "@mui/material"
import styles from './landing.module.scss'
import Image from "next/image"
import UnoptimizedImage from "@/utils/unoptimized-image/unoptimized-image"
import { createClient } from "@/utils/supabase/supabase-server"
import Nav from "../nav/nav"

const Landing = async () => {
      const supabase = createClient()

  const {error, data : {user}} = await (await supabase).auth.getUser()
    return (
        <Grid container size={12} className={styles.container}>
                    <Nav user={user} error={error}/>

            <Box className={styles.lessons}>
                <Typography variant={"h1"} className={styles.instructors}> INSTRUCTORS </Typography>
                {/* <Image src={}/> */}
            </Box>
            <Box className={styles.logoContainer}>
                <UnoptimizedImage src={'/static/3.png'} width={100} height={100} alt={'tap in logo'} />
            </Box>
            <Box className={styles.band}>
                <Typography variant={"h1"} className={styles.bandMember}> BAND MEMBERS </Typography>

            </Box>
        </Grid>
    )
}

export default Landing