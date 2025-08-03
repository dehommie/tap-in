'use client'
import styles from "./layo.module.scss";
import { Box } from "@mui/material";
import Landing from "@/components/landing/landing";
import MemberCard from "@/components/member-card/member-card";
import { useEffect, useRef } from "react";

const Layout = () => {
  const horizontalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // const handleScroll = () => {
    //   const horizontalSection = horizontalRef.current;
    //   if (!horizontalSection) return

    //   const section = horizontalSection.parentElement
    //   if (!section) return

    //   const sectionTop = section.offsetTop;
    //   const sectionHeight = section.scrollHeight;
    //   const scrollY = window.scrollY;
    //   const viewportHeight = window.innerHeight;

    //   const bottomReached = scrollY >= sectionTop  + sectionHeight - viewportHeight

    //   if (bottomReached) {
    //     const scrollOffset = scrollY - (sectionTop + sectionHeight - viewportHeight);
    //     horizontalSection.style.transform = `translateX(-${scrollOffset}px)`
    //   }
    //   else {
    //       horizontalSection.style.transform = `translateX(0px)`
    //   }

    // }
    // console.log("scrolling")
    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll)
const handleScroll = () => {
      const horizontalWrapper = horizontalRef.current
      if (!horizontalWrapper) return

      const section = horizontalWrapper.parentElement
      if (!section) return

      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight

      const bottomReached = scrollY >= sectionTop + sectionHeight - viewportHeight

      if (bottomReached) {
        const scrollOffset = scrollY - (sectionTop + sectionHeight - viewportHeight)
        horizontalWrapper.style.transform = `translateX(-${scrollOffset}px)`
      } else {
        horizontalWrapper.style.transform = `translateX(0px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  },[])

  return (
    <Box className={styles.container}>
      <Box className={styles.landingContainer}>
        <Landing />
      </Box>
      <Box className={styles.memberContainer} >
        <Box className={styles.memberWrapper} ref={horizontalRef}>
          <MemberCard />
        </Box>
      </Box>
      {/* </Box> */}
    </Box>
  );
}

export default Layout