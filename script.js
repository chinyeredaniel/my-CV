// Download CV as PDF
function downloadPDF() {
    const element = document.body;
    html2pdf().from(element).save('Daniel_Chinyere_Happiness_CV.pdf');
}