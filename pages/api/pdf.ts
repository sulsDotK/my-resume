import { NextApiHandler } from 'next'
import puppeteer from 'puppeteer'

export default async function handler(req, res) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:3000')
  await page.emulateMediaType('screen')

  setTimeout(async () => {
    const pdfBuffer = await page.pdf({ format: 'A4' })

    res.send(pdfBuffer)

    await browser.close()
  }, 2000)
}
