import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import Landing from "@/components/landing/landing";
import MemberCard from "@/components/member-card/member-card";
import { MemberCardType, memberInfo } from "@/components/mockData/memberInfo";

export default function Home() {
  return (
    <Box>
      <Landing />
      {/* <Box > */}
      <MemberCard />
      {/* </Box> */}

    </Box>
  );
}
