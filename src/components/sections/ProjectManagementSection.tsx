"use client";

import { motion } from "framer-motion";
import { SectionHeading, ExpandableFeatureCard, MediaPlaceholder } from "@/components/ui";

export function ProjectManagementSection() {
  return (
    <section id="project-management" className="py-24 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Project management that actually fits how you work"
            subtitle="Associate tasks with clients and automate recurring workflows with time-based triggers."
          />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ExpandableFeatureCard
              title="Tasks with Client Association"
              description="Associate a task with a client or company without making it visible to them. Create a task, link it to a client, and it shows up on that client's profile — but only your team sees it."
              mediaLabel="Screenshot: Task-Client Association"
              expandedContent={
                <div className="space-y-6">
                  <MediaPlaceholder
                    label="Screenshot: Task-Client Association in action"
                    aspectRatio="16:9"
                  />
                  <div className="space-y-4">
                    <p className="text-zinc-400 leading-relaxed">
                      Associate a task with a client or company without making it visible to them. Create a task, link it to a client, and it shows up on that client&apos;s profile — but only your team sees it.
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                      When you&apos;re ready, optionally share it with the client by turning on client access. It&apos;s internal-first project management that adapts to when and how you want to loop clients in.
                    </p>
                    <h4 className="text-lg font-medium text-zinc-100 pt-2">Key benefits</h4>
                    <ul className="space-y-2 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCE7F4] mt-1">•</span>
                        Keep internal tasks organized by client without exposing them
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCE7F4] mt-1">•</span>
                        Tasks appear on client profiles for easy context
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCE7F4] mt-1">•</span>
                        Toggle client visibility when you&apos;re ready to share
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCE7F4] mt-1">•</span>
                        Internal-first approach that adapts to your workflow
                      </li>
                    </ul>
                  </div>
                </div>
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ExpandableFeatureCard
              title="Time-Based Automations"
              description="Set up tasks that reoccur monthly, quarterly, or on a custom schedule. Send recurring messages, trigger forms at regular intervals, or create quarterly check-in tasks."
              mediaLabel="Screenshot: Time-Based Automations"
              expandedContent={
                <div className="space-y-6">
                  <MediaPlaceholder
                    label="Screenshot: Time-Based Automations configuration"
                    aspectRatio="16:9"
                  />
                  <div className="space-y-4">
                    <p className="text-zinc-400 leading-relaxed">
                      Set up tasks that reoccur monthly, quarterly, or on a custom schedule. Send recurring messages, trigger forms at regular intervals, or create quarterly check-in tasks for every active client.
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                      Target internal users, all clients, or all companies. Perfect for recurring deliverables, regular client touchpoints, or any workflow that happens on a schedule.
                    </p>
                    <h4 className="text-lg font-medium text-zinc-100 pt-2">Use cases</h4>
                    <ul className="space-y-2 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCE7F4] mt-1">•</span>
                        Monthly reporting tasks that auto-create
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCE7F4] mt-1">•</span>
                        Quarterly client check-ins and reviews
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCE7F4] mt-1">•</span>
                        Recurring form requests (feedback, updates, etc.)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCE7F4] mt-1">•</span>
                        Scheduled messages to clients or team members
                      </li>
                    </ul>
                    <h4 className="text-lg font-medium text-zinc-100 pt-2">Targeting options</h4>
                    <ul className="space-y-2 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCE7F4] mt-1">•</span>
                        Internal users only
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCE7F4] mt-1">•</span>
                        All clients
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCE7F4] mt-1">•</span>
                        All companies
                      </li>
                    </ul>
                  </div>
                </div>
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
