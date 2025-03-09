// "use client";
// // import { navLinks } from "@/constant/constant";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { HiBars3BottomRight } from "react-icons/hi2";

// // define props type
// type Props = {
//   openNav: () => void;
// };

// const Nav = ({ openNav }: Props) => {
//   const [navBg, setNavBg] = useState(false);
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   // Add the voting URL here
//   const votingUrl = "https://forms.gle/yourVotingFormLink";

//   // Countdown timer logic
//   useEffect(() => {
//     // Set the target date: March 14th, 2025, 20:00 Hong Kong time
//     const targetDate = new Date("2025-03-14T20:00:00+08:00");

//     const updateTimer = () => {
//       const now = new Date();
//       const difference = targetDate.getTime() - now.getTime();

//       if (difference > 0) {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor(
//           (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         );
//         const minutes = Math.floor(
//           (difference % (1000 * 60 * 60)) / (1000 * 60)
//         );
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//         setTimeLeft({ days, hours, minutes, seconds });
//       } else {
//         // If we've reached the date
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     };

//     // Update immediately
//     updateTimer();

//     // Then update every second
//     const timer = setInterval(updateTimer, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   useEffect(() => {
//     const handler = () => {
//       if (window.scrollY >= 90) {
//         setNavBg(true);
//       }
//       if (window.scrollY < 90) {
//         setNavBg(false);
//       }
//     };

//     window.addEventListener("scroll", handler);

//     return () => {
//       window.removeEventListener("scroll", handler);
//     };
//   }, []);

//   return (
//     <div
//       className={`fixed ${
//         navBg ? "bg-[#848c8c]" : "fixed"
//       } h-[12vh] z-[10] w-full transition-all duration-200`}
//     >
//       <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
//         {/* Text Logo - Much Larger */}
//         <div className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
//           KSA 후보 1번
//         </div>

//         {/* Nav Links - now in the middle */}
//         <div className="hidden lg:flex items-center space-x-8 mx-4">
//           {navLinks.map((navlink) => {
//             return (
//               <Link key={navlink.id} href={navlink.url}>
//                 <p className="nav__link">{navlink.label}</p>
//               </Link>
//             );
//           })}
//         </div>

//         {/* Right side - countdown, vote button and burger menu */}
//         <div className="flex items-center space-x-4">
//           {/* Countdown timer */}
//           <div className="hidden md:flex flex-col items-end">
//             <span className="text-red-600 font-bold text-sm">
//               투표 마감까지
//             </span>
//             <span className="text-red-600 font-bold">
//               {timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분{" "}
//               {timeLeft.seconds}초
//             </span>
//           </div>

//           <a
//             href={votingUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="md:px-10 md:py-3 px-8 py-3 text-white font-semibold sm:text-base text-sm bg-[#172554] transition-all duration-200 rounded-lg hover:bg-[#0f172a]"
//           >
//             투표하러가기
//           </a>

//           {/* Burger menu for mobile */}
//           <HiBars3BottomRight
//             onClick={openNav}
//             className="w-8 h-8 cursor-pointer text-white lg:hidden"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;
