"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading, ExpandableFeatureCard, ScreenshotDisplay, MediaPlaceholder } from "@/components/ui";

export function ClientExperienceSection() {
  return (
    <section id="client-experience" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Create remarkable experiences for clients"
            subtitle="Reimagined client portal with better organization and personalized homepages."
          />
        </motion.div>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ExpandableFeatureCard
              title="App Folders"
              description="Drag and drop apps and embeds into folders. Group reports into an 'Analytics' folder, or create a 'Helpful links' folder for external resources."
              mediaElement={
                <ScreenshotDisplay
                  src="/screenshots/app_folders.jpg"
                  alt="App Folders"
                />
              }
              expandedContent={
                <div className="space-y-6">
                  <ScreenshotDisplay
                    src="/screenshots/app_folders.jpg"
                    alt="App Folders in action"
                  />
                  <div className="space-y-4">
                    <p className="text-zinc-400 leading-relaxed">
                      Organizing your apps used to be confusing. Now you can drag and drop apps and embeds into folders. Instead of a cluttered sidebar with reports scattered everywhere, group them into an &quot;Analytics&quot; folder. Or create a &quot;Helpful links&quot; folder for all external resources.
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                      And on your end, you can unpin apps from your internal dashboard without affecting the client view — so your workspace stays focused on what you actually use day-to-day.
                    </p>
                    <h4 className="text-lg font-medium text-zinc-100 pt-2">Key features</h4>
                    <ul className="space-y-2 text-zinc-400">
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCE7F4] mt-1">•</span>
                        Drag and drop organization for apps and embeds
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCE7F4] mt-1">•</span>
                        Create custom folder names that make sense for your workflow
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCE7F4] mt-1">•</span>
                        Unpin apps from internal view without affecting client view
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCE7F4] mt-1">•</span>
                        Collapsible folders to reduce sidebar clutter
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
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ExpandableFeatureCard
              title="Homepage Variants"
              description="Create up to five different homepage variants and automatically show the right one to each client based on custom field tags."
              mediaElement={
                <ScreenshotDisplay
                  src="/screenshots/home.jpg"
                  alt="Homepage Variants"
                />
              }
              expandedContent={
                <div className="space-y-6">
                  <ScreenshotDisplay
                    src="/screenshots/home.jpg"
                    alt="Homepage Variants"
                  />
                  <div className="space-y-4">
                    <p className="text-zinc-400 leading-relaxed">
                      You can now create up to five different homepage variants and automatically show the right one to each client based on custom field tags.
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                      Running a tiered service model? Show premium clients their dedicated resources while basic clients see standard onboarding. Serving both businesses and individuals? Each sees a homepage tailored to how they work with you—automatically, without any manual switching.
                    </p>
                    {/* Two-column layout: Variant Config + Use Cases */}
                    <div className="grid gap-6 sm:grid-cols-2 pt-2">
                      {/* Left: Variant Configuration */}
                      <div>
                        <h4 className="text-lg font-medium text-zinc-100 mb-3">Variant Configuration</h4>
                        <div className="relative">
                          {/* Background glow effect */}
                          <div className="absolute inset-0 bg-[#BCE7F4]/5 blur-2xl rounded-full scale-125" />
                          {/* Image container with subtle styling */}
                          <div className="relative rounded-xl border border-zinc-700 bg-zinc-900/50 p-2 shadow-xl">
                            <Image
                              src="/screenshots/home_variants.png"
                              alt="Homepage Variants configuration closeup"
                              width={400}
                              height={200}
                              className="rounded-lg w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Right: Use Cases */}
                      <div>
                        <h4 className="text-lg font-medium text-zinc-100 mb-3">Use cases</h4>
                        <ul className="space-y-3 text-zinc-400">
                          <li className="flex items-start gap-2">
                            <span className="text-[#BCE7F4] mt-0.5">•</span>
                            Tiered service models (Premium vs. Basic clients)
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#BCE7F4] mt-0.5">•</span>
                            Different client types (B2B vs. B2C)
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#BCE7F4] mt-0.5">•</span>
                            Onboarding vs. active client experiences
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#BCE7F4] mt-0.5">•</span>
                            Industry-specific portal configurations
                          </li>
                        </ul>
                      </div>
                    </div>
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
