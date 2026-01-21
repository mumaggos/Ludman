import html2pdf from 'html2pdf.js';

export const generateWhitepaperPDF = async () => {
  const element = document.getElementById('whitepaper-content');
  
  if (!element) {
    console.error('Whitepaper content not found');
    return;
  }

  const opt = {
    margin: 10,
    filename: 'Lubdan-Whitepaper.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };

  try {
    await html2pdf().set(opt).from(element).save();
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};

export const shareWhitepaperPDF = async () => {
  const element = document.getElementById('whitepaper-content');
  
  if (!element) {
    console.error('Whitepaper content not found');
    return;
  }

  try {
    // Generate PDF as blob
    const opt = {
      margin: 10,
      filename: 'Lubdan-Whitepaper.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    const pdf = await html2pdf().set(opt).from(element).outputPdf('blob');
    
    // Check if Web Share API is available
    if (navigator.share && navigator.canShare({ files: [new File([pdf], 'Lubdan-Whitepaper.pdf', { type: 'application/pdf' })] })) {
      await navigator.share({
        files: [new File([pdf], 'Lubdan-Whitepaper.pdf', { type: 'application/pdf' })],
        title: 'Lubdan Whitepaper',
        text: 'Check out the Lubdan Whitepaper - A premium investment platform on Polygon offering real MATIC dividends.'
      });
    } else {
      // Fallback: Copy to clipboard or show share options
      const url = URL.createObjectURL(pdf);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Lubdan-Whitepaper.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  } catch (error) {
    console.error('Error sharing PDF:', error);
    throw error;
  }
};
