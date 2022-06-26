import type { NextPage } from 'next'

const DownloadPdf: NextPage = () => {
  return (
    <>
      <a href="/api/pdf" download="generated_pdf.pdf" className="downloadBtn">
        Download PDF
      </a>
    </>
  )
}

export default DownloadPdf
