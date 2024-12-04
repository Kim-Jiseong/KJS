// import * as React from "react";
// import { motion, PanInfo } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { useTranslation } from "react-i18next";
// import { Badge } from "../ui/badge";

// export function PortfolioCard({
//   project,
//   index,
//   total,
//   selectedIndex,
//   setSelectedIndex,
// }: {
//   project: any;
//   index: number;
//   total: number;
//   selectedIndex: number;
//   setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
// }) {
//   const { t } = useTranslation();
//   const [isExpanded, setIsExpanded] = React.useState(false);

//   const offset = index - selectedIndex;

//   // 무한 루프를 위해 인덱스 조정
//   const adjustedOffset =
//     offset < -Math.floor(total / 2)
//       ? offset + total
//       : offset > Math.floor(total / 2)
//       ? offset - total
//       : offset;

//   // 반응형 간격 조절
//   const getXOffset = () => {
//     if (window.innerWidth < 640) return adjustedOffset * 200;
//     if (window.innerWidth < 1024) return adjustedOffset * 250;
//     return adjustedOffset * 300;
//   };

//   const xOffset = getXOffset();
//   const scale = isExpanded ? 1.2 : index === selectedIndex ? 1 : 0.8;
//   const zIndex = isExpanded
//     ? total + 1
//     : index === selectedIndex
//     ? total
//     : total - Math.abs(adjustedOffset);

//   const opacity = Math.abs(adjustedOffset) > 2 ? 0 : 1;
//   const rotateY = adjustedOffset * 10;

//   // 드래그 핸들러
//   const handleDragEnd = (_: any, info: PanInfo) => {
//     if (info.offset.x < -50) {
//       // 왼쪽으로 드래그
//       setSelectedIndex((prev) => (prev + 1) % total);
//     } else if (info.offset.x > 50) {
//       // 오른쪽으로 드래그
//       setSelectedIndex((prev) => (prev - 1 + total) % total);
//     }
//   };

//   return (
//     <motion.div
//       animate={{
//         x: xOffset,
//         scale: scale,
//         opacity: opacity,
//         rotateY: rotateY,
//       }}
//       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//       style={{
//         position: "absolute",
//         zIndex: zIndex,
//         cursor: "grab",
//         transformStyle: "preserve-3d",
//       }}
//       drag={!isExpanded ? "x" : false}
//       dragConstraints={{ left: 0, right: 0 }}
//       onDragEnd={handleDragEnd}
//       onClick={() => {
//         if (index === selectedIndex) setIsExpanded(true);
//         else setSelectedIndex(index);
//       }}
//     >
//       <Card className="w-64 h-96 md:w-80 md:h-[500px] lg:w-96 lg:h-[600px]">
//         <CardHeader>
//           <CardTitle>{project.title}</CardTitle>
//           <CardDescription>{project.introduction}</CardDescription>
//         </CardHeader>
//         <CardContent>
//           {(index === selectedIndex || isExpanded) && (
//             <>
//               <CardDescription className="whitespace-pre-wrap mb-6">
//                 {project.description}
//               </CardDescription>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.technologies.map((tech: string) => (
//                   <Badge key={tech}>{tech}</Badge>
//                 ))}
//               </div>
//             </>
//           )}
//         </CardContent>
//         {(project.liveDemo || project.githubUrl) &&
//           (index === selectedIndex || isExpanded) && (
//             <CardFooter className="flex justify-end gap-2">
//               {project.liveDemo && (
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     window.open(project.liveUrl, "_blank");
//                   }}
//                 >
//                   {t("portfolio.liveDemo")}
//                 </Button>
//               )}
//               {project.githubUrl && (
//                 <Button
//                   size="sm"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     window.open(project.githubUrl, "_blank");
//                   }}
//                 >
//                   {t("portfolio.sourceCode")}
//                 </Button>
//               )}
//             </CardFooter>
//           )}
//         {isExpanded && (
//           <Button
//             className="absolute top-2 right-2"
//             size="sm"
//             onClick={(e) => {
//               e.stopPropagation();
//               setIsExpanded(false);
//             }}
//           >
//             Close
//           </Button>
//         )}
//       </Card>
//     </motion.div>
//   );
// }
