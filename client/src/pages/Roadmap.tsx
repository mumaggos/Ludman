import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

export default function Roadmap() {
  return (
    <Layout>
      <div className="min-h-screen pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold mb-6 text-gold-glow"
            >
              Strategic <span className="text-secondary text-neon">Roadmap</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our path to building a sustainable, revenue-generating ecosystem.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary/20 to-transparent -translate-x-1/2" />

            <div className="space-y-12 md:space-y-24">
              <RoadmapItem 
                phase="Phase 1"
                title="Foundation & Presale"
                status="current"
                items={[
                  "Smart Contract Development & Audit",
                  "Website & Branding Launch",
                  "Community Building (Twitter/Telegram)",
                  "Presale Launch (Phase 1 & 2)",
                  "Marketing Campaign Kickoff"
                ]}
                alignment="left"
              />
              
              <RoadmapItem 
                phase="Phase 2"
                title="Casino Development"
                status="upcoming"
                items={[
                  "Casino Platform Beta Development",
                  "Legal & Licensing Framework",
                  "Partnership Announcements",
                  "Presale Conclusion",
                  "Token Generation Event (TGE)"
                ]}
                alignment="right"
              />

              <RoadmapItem 
                phase="Phase 3"
                title="Launch & Revenue"
                status="upcoming"
                items={[
                  "Lubdan Casino Official Launch",
                  "DEX Listing (Uniswap/Quickswap)",
                  "Liquidity Locking",
                  "First Dividend Distribution",
                  "CoinGecko & CMC Listing"
                ]}
                alignment="left"
              />

              <RoadmapItem 
                phase="Phase 4"
                title="Expansion & Growth"
                status="upcoming"
                items={[
                  "CEX Listings",
                  "Casino Game Expansion (Live Dealer)",
                  "Mobile App Development",
                  "Strategic Buyback & Burn",
                  "Global Marketing Push"
                ]}
                alignment="right"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function RoadmapItem({ phase, title, status, items, alignment }: { 
  phase: string, 
  title: string, 
  status: "completed" | "current" | "upcoming", 
  items: string[],
  alignment: "left" | "right"
}) {
  const isLeft = alignment === "left";
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative flex flex-col md:flex-row gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Content */}
      <div className="flex-1 md:text-right">
        <div className={`glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 ${!isLeft ? 'md:text-left' : 'md:text-right'}`}>
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            {phase}
          </div>
          <h3 className="text-2xl font-display font-bold mb-6 text-foreground">{title}</h3>
          <ul className="space-y-3">
            {items.map((item, idx) => (
              <li key={idx} className={`flex items-center gap-3 text-muted-foreground ${!isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                {!isLeft && <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />}
                <span>{item}</span>
                {isLeft && <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Center Marker */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-10 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
        {status === "current" && <div className="w-2 h-2 bg-secondary rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,65,0.5)]" />}
      </div>

      {/* Spacer for other side */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}
