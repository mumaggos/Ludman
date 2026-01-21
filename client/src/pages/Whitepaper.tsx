import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Whitepaper() {
  const sections = [
    {
      title: "1. Introduction",
      content: "Lubdan (LBD) is a long-term blockchain project built on Polygon, designed to combine disciplined tokenomics, transparent on-chain presale mechanics, and real dividend distribution in MATIC generated from a gaming business ecosystem. The project focuses on sustainability, transparency, and alignment between the platform's growth and token holders, avoiding short-term speculation models."
    },
    {
      title: "2. Vision & Philosophy",
      content: "Lubdan is inspired by Irish folklore, where Lubdan represents intelligence, strategy, and fortune. The project philosophy is simple: Long-term value over hype, Transparent on-chain mechanisms, Controlled supply release, and Real yield, not artificial rewards. Lubdan is not a meme token. It is designed as a structured crypto investment project."
    },
    {
      title: "3. Technology Stack",
      content: "Blockchain: Polygon (Ethereum Layer 2). Token Standard: ERC-20 compatible. Smart Contracts include: Token contract, Presale contract, and Dividend distribution contract. Security features: Fully on-chain logic, Contracts verified on PolygonScan, and No centralized control over supply after deployment. Polygon was chosen for its low fees, fast transactions, and strong ecosystem support."
    },
    {
      title: "4. Token Overview",
      content: "Token Name: Lubdan. Symbol: LBD. Network: Polygon. Total Supply: 21,000,000 LBD. The total supply is fixed and cannot be inflated."
    },
    {
      title: "5. Tokenomics",
      content: "Distribution: Presale (9,450,000 LBD), Ecosystem, Liquidity & Operations (Reserved), Team & Development (Locked), Dividends & Casino Operations (Reserved). Presale Phases: Phase 1 - 6,300,000 LBD at $0.20 (Early participant access), Phase 2 - 3,150,000 LBD at $0.60 (Final presale stage). Presale purchases can be made using MATIC or USDT, with pricing enforced directly on-chain."
    },
    {
      title: "6. Token Lock & Unlock Mechanism",
      content: "To protect holders and prevent excessive sell pressure: All presale tokens are locked. Unlock begins after presale and platform launch. 10% unlock per month. Total unlock duration: 10 months. This mechanism ensures: Gradual market supply, Alignment between holders and long-term project growth, and Reduced risk of sudden dumps."
    },
    {
      title: "7. Dividend System (MATIC)",
      content: "Lubdan introduces a real dividend model, not emissions or inflation-based rewards. Dividends are paid in MATIC generated from casino platform profits and distributed via a dedicated on-chain dividend contract. Eligibility Rules: Holder must own LBD tokens for at least 30 days. Dividends are proportional to token holdings. Distribution is claim-based. If dividends are not claimed immediately, they remain available and can be claimed later."
    },
    {
      title: "8. Transparency & Security",
      content: "All smart contracts are deployed on Polygon. Contracts are verified on PolygonScan. Presale data, token balances, and dividend logic are fully on-chain. No hidden minting functions. No manual manipulation of presale phases via the website. The website only reads and interacts with smart contracts — it does not control them."
    },
    {
      title: "9. Website & User Experience",
      content: "The Lubdan website provides: Wallet connection via WalletConnect, Real-time presale statistics from on-chain data, Secure purchasing with MATIC or USDT, Investor dashboard showing token balance, holding duration, dividend eligibility, and claimable dividends. Mobile users are advised to use wallet in-app browsers for optimal experience."
    },
    {
      title: "10. Roadmap",
      content: "Phase 1 – Foundation: Smart contract development, Presale launch, Branding & website release. Phase 2 – Platform Development: Casino platform build, Licensing and legal preparation, Security reviews. Phase 3 – Launch: Casino launch, Liquidity expansion, Dividend activation. Phase 4 – Growth: Ecosystem expansion, Additional features, Marketing and partnerships, Potential professional audit."
    },
    {
      title: "11. Risk Disclosure",
      content: "Cryptocurrency investments involve risk. Dividends depend on platform performance and market conditions. There is no guarantee of profit. Participants should only invest what they can afford to lose and comply with their local regulations."
    },
    {
      title: "12. Legal Disclaimer",
      content: "Lubdan (LBD) is not financial advice. Nothing in this document constitutes investment, legal, or tax advice. By participating, users accept full responsibility for their actions and decisions."
    },
    {
      title: "13. Official Channels",
      content: "Website: lubdan.io. X (Twitter): @LubdanToken. Telegram: https://t.me/LubdanOfficial. Support: lubdan.info@gmail.com"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="relative py-20 border-b border-border/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link href="/">
              <a className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </a>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-primary/10">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground">
                  Lubdan Whitepaper
                </h1>
                <p className="text-muted-foreground mt-2">
                  Complete technical and business documentation
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This whitepaper provides a comprehensive overview of the Lubdan (LBD) project, including its vision, technology stack, tokenomics, and dividend system. Lubdan is a long-term blockchain project built on Polygon, designed for sustainability, transparency, and real yield.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                Share Document
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="prose prose-invert max-w-none"
              >
                <div className="p-8 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 border border-primary/20">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            variants={itemVariants}
            className="mt-20 p-8 rounded-2xl glass-card border border-primary/20"
          >
            <h3 className="text-2xl font-display font-bold text-primary mb-6">
              Table of Contents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#section-${index}`}
                  className="text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/30 hover:border-primary/50"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-20 p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center"
          >
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">
              Ready to Join Lubdan?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              After reviewing our whitepaper, join the presale and become part of the Lubdan community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/presale">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                  Join Presale
                </Button>
              </Link>
              <a href="https://t.me/LubdanOfficial" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                  Join Community
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
