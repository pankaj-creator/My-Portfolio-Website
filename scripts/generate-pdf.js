const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  try {
    console.log('Starting PDF generation...');
    
    // Launch browser
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Read the HTML file
    const htmlPath = path.join(__dirname, '../public/resume-ats.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Set content and wait for fonts to load
    await page.setContent(htmlContent, { 
      waitUntil: 'networkidle0' 
    });
    
    // Generate PDF with ATS-friendly settings
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: false, // ATS systems prefer no background colors
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      },
      preferCSSPageSize: false,
      displayHeaderFooter: false,
      scale: 0.95 // Slightly smaller scale for better fit
    });
    
    // Save PDF
    const outputPath = path.join(__dirname, '../public/Pankaj_Kumar_Gond_Resume.pdf');
    fs.writeFileSync(outputPath, pdfBuffer);
    
    console.log('PDF generated successfully:', outputPath);
    
    await browser.close();
    
    // Verify file was created and has content
    const stats = fs.statSync(outputPath);
    console.log(`PDF file size: ${(stats.size / 1024).toFixed(2)} KB`);
    
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
}

// Run the function
if (require.main === module) {
  generatePDF().then(success => {
    process.exit(success ? 0 : 1);
  });
}

module.exports = generatePDF;
