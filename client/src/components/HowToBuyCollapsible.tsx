import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function HowToBuyCollapsible() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full space-y-4">
      {/* Collapsed View */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full glass-card rounded-2xl p-6 border-primary/30 hover:border-primary/50 transition-all duration-300 flex items-center justify-between group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="text-left">
          <p className="text-lg font-display font-bold text-foreground">
            Need MATIC or USDT?
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="https://buy.onramper.com/?defaultCrypto=MATIC&network=polygon"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm text-primary hover:text-secondary transition-colors underline"
            >
              Buy with card
            </a>
            <span className="text-muted-foreground">•</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="text-sm text-primary hover:text-secondary transition-colors underline"
            >
              How it works
            </button>
          </div>
        </div>
        <ChevronDown
          className={`h-6 w-6 text-primary transition-transform duration-300 group-hover:text-secondary ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      {/* Expanded View */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="glass-card rounded-2xl p-8 border-primary/30 space-y-6">
              <div>
                <h3 className="text-xl font-display font-bold text-primary mb-4">
                  How to Buy LBD
                </h3>

                {/* If you already have crypto */}
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="font-semibold text-foreground mb-3">
                      If you already have MATIC or USDT
                    </p>
                    <div className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-primary font-bold">→</span>
                      <p>
                        Connect your wallet, choose the amount and click{" "}
                        <span className="text-primary font-semibold">
                          Buy Token Now
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                {/* If you don't have crypto */}
                <div className="space-y-4">
                  <p className="font-semibold text-foreground">
                    If you don't have crypto yet
                  </p>
                  <ol className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">1.</span>
                      <span>Buy MATIC or USDT with card (see buttons below)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">2.</span>
                      <span>Connect your wallet</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">3.</span>
                      <span>Choose the amount</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">4.</span>
                      <span>
                        Click{" "}
                        <span className="text-primary font-semibold">
                          Buy Token Now
                        </span>
                      </span>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">
                  Buy MATIC or USDT with Card:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://buy.onramper.com/?defaultCrypto=MATIC&network=polygon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                      size="lg"
                    >
                      Buy MATIC with Card
                    </Button>
                  </a>
                  <a
                    href="https://buy.onramper.com/?defaultCrypto=USDT&network=polygon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                      size="lg"
                    >
                      Buy USDT with Card
                    </Button>
                  </a>
                </div>
              </div>

              {/* Note */}
              <div className="bg-background/50 border border-border/30 rounded-lg p-4">
                <p className="text-xs text-muted-foreground text-center">
                  Card purchases are handled by third-party providers. You'll
                  receive MATIC/USDT in your wallet.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
