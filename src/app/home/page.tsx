import styles from "./page.module.scss";
import { Box } from "@mui/material";

import Layout from "@/components/layout/layo";
import { createClient } from "../utils/supabase/supabase-server";


export default async function Home() {
      const supabase =  await createClient()
  
    const { error, data: { user } } = await supabase.auth.getUser()

  return (
    <Box className={styles.container}>
      <Layout />
    </Box>
  );
}
