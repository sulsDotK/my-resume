import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:3000')
  await page.emulateMediaType('screen')

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  setTimeout(async () => {
    const pdfBuffer = await page.pdf({ format: 'A4' })

    res.send(pdfBuffer)

    await browser.close()
  }, 2000)
}
