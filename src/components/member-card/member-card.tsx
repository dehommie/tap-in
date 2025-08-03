'use client'
import { Box, Icon, Paper, Typography } from "@mui/material"
import styles from './member-card.module.scss'
import PlaceIcon from '@mui/icons-material/Place';
import { MemberCardType, memberInfo } from "@/components/mockData/memberInfo";
import colors from '@/styles/_colors.module.scss'
import UnoptimizedImage from "@/utils/unoptimized-image/unoptimized-image";
interface MemberCardProps {
    member?: MemberCardType
}

const MemberCard = ({ member }: MemberCardProps) => {
    const colors = ['#252859', '#591d73', '#f2ac29', '#bf3f92']; // pick your 4 colors
    return (
        <Box className={styles.wrapper}>
            {memberInfo.map((member: MemberCardType, index) =>
                <Paper className={styles.paper} key={index} elevation={3} style={{
                    backgroundColor: colors[index], // 🎨 different color for each
                }}>
                    <Box key={index} className={styles.container}>

                        <Box className={styles.data}>
                            <Typography variant="h2"> {member.name} </Typography>
                            <Typography variant="h4"><PlaceIcon /> {member.distance} </Typography>
                            <Typography variant="h4">{member.title[0].value}</Typography>
                            <Typography variant="h4">Accepts up to {member.maximumBooking}</Typography>
                            <Typography variant="h4">${member.rate}/hr</Typography>

                        </Box>
                        <Box>
                            <UnoptimizedImage className={styles.tapinLogo} src={'/static/5-white.png'} alt={''} height={30} width={30} />
                            {member.flex &&
                                <Typography variant="h5"> View Instructor Profile</Typography>
                            }
                        </Box>
                        <UnoptimizedImage className={styles.memberImage} src={member.img} alt={`image of ${member.name}`} height={620} width={620} />
                    </Box>
                </Paper>

            )}

        </Box>
    )
}

export default MemberCard