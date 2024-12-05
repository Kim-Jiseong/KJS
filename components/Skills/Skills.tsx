"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Charts from "./Charts";

export default function Skills({ content }: { content: any }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.45,
  });

  const skills = content.list;
  const stacks = content.stacks;
  const tools = content.tools;

  const chartConfig = skills.reduce((acc: any, skill: any) => {
    acc[skill.name] = {
      label: skill.name,
      color: `hsl(var(--chart-${skills.indexOf(skill) + 1}))`,
    };
    return acc;
  }, {});
  // console.log(chartConfig);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-left">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Charts
          content={content}
          animation={inView}
          config={chartConfig}
          data={skills}
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Stacks</h3>
            <div className="flex flex-wrap gap-2">
              {stacks.map((stack: string, index: number) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                >
                  {stack}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool: string, index: number) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
