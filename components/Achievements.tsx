"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Achievements({ content }: { content: any }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const achievements = content.list;

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-left">{content.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((achievement: any, index: number) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.2 }}
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 shadow-lg"
          >
            {achievement.media && (
              <div className="w-full mb-4 relative overflow-hidden after:content-[''] after:block after:pb-[56%] rounded-xl">
                <img
                  src={achievement.media}
                  className="w-full h-full object-cover absolute inset-0 rounded-xl"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
            <p className="text-gray-500">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
