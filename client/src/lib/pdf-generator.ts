// Whitepaper PDF content - Static content to avoid rendering issues
const WHITEPAPER_CONTENT = `
Lubdan Platform - Whitepaper

1. Executive Summary
Lubdan is a premium investment platform on Polygon offering real MATIC dividends from casino profits. 
Our transparent, on-chain mechanics ensure every investor benefits from actual revenue generated.

2. Introduction
Lubdan represents a new era of cryptocurrency investment, combining the thrill of gaming with 
the security of blockchain technology. Our platform distributes real dividends to token holders.

3. Platform Overview
Built on Polygon (MATIC), Lubdan provides:
- Real dividend distribution from casino profits
- Transparent on-chain mechanics
- Secure smart contracts
- Community-driven governance

4. Revenue Model
Our casino generates revenue through:
- Player participation fees
- House edge on games
- Premium features
- Sponsorship partnerships

5. Dividend Distribution
Token holders receive:
- Weekly dividend distributions
- Real MATIC payments
- Transparent tracking
- No staking requirements

6. Smart Contract Architecture
Our contracts ensure:
- Automatic dividend distribution
- Secure fund management
- Transparent accounting
- Anti-manipulation measures

7. Tokenomics
- Total Supply: 1,000,000 LBD
- Presale Allocation: 30%
- Community Rewards: 40%
- Team & Development: 20%
- Treasury: 10%

8. Roadmap
Phase 1: Platform Launch & Presale
Phase 2: Casino Beta Testing
Phase 3: Full Casino Launch
Phase 4: Governance Implementation

9. Security & Audits
- Smart contracts audited by leading firms
- Regular security assessments
- Community transparency reports
- Bug bounty program

10. Team & Advisors
Our experienced team brings expertise in:
- Blockchain development
- Gaming industry
- Finance & economics
- Community management

11. Legal & Compliance
- Registered entity in compliance jurisdiction
- Legal review of all contracts
- Regulatory monitoring
- Community governance

12. Risk Disclosure
Investors should be aware of:
- Cryptocurrency market volatility
- Smart contract risks
- Regulatory changes
- Market adoption risks

13. Conclusion
Lubdan represents the future of investment platforms, combining innovation with transparency.
Join our community and be part of the revolution.
`;

export const downloadWhitepaperPDF = async () => {
  try {
    // Create a simple text-based PDF
    const element = document.createElement('div');
    element.style.padding = '20px';
    element.style.fontFamily = 'Arial, sans-serif';
    element.style.lineHeight = '1.6';
    element.innerHTML = WHITEPAPER_CONTENT.replace(/\n/g, '<br />');
    
    // Use html2pdf if available, otherwise create a simple download
    const { default: html2pdf } = await import('html2pdf.js');
    
    const opt = {
      margin: 10,
      filename: 'Lubdan-Whitepaper.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, allowTaint: true },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    await html2pdf().set(opt).from(element).save();
  } catch (error) {
    console.error('Error generating PDF:', error);
    // Fallback: Download as text file
    const element = document.createElement('a');
    const file = new Blob([WHITEPAPER_CONTENT], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Lubdan-Whitepaper.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
};

export const shareWhitepaperPDF = async () => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: 'Lubdan Whitepaper',
        text: 'Check out the Lubdan Whitepaper - A premium investment platform on Polygon offering real MATIC dividends.',
        url: window.location.href
      });
    } else {
      // Fallback: Copy to clipboard
      const text = 'Check out the Lubdan Whitepaper: ' + window.location.href;
      await navigator.clipboard.writeText(text);
      alert('Link copied to clipboard!');
    }
  } catch (error) {
    console.error('Error sharing:', error);
  }
};
