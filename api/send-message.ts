import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;


export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { name, email, message } = req.body;

  const text = `
📩 Yangi xabar!
👤 Ism: ${name}
📧 Email: ${email}
💬 Xabar: ${message}
  `;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Telegramga yuborishda xatolik:', error);
    return res.status(500).json({ ok: false, message: 'Telegramga yuborishda xatolik' });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};