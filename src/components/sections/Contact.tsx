import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import axios from 'axios';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const telegramMessage = `
      📩 Yangi xabar!
      👤 Ism: ${form.name}
      📧 Email: ${form.email}
      💬 Xabar: ${form.message}
    `;

    const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    try {
      await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
      });

      alert('Xabaringiz muvaffaqiyatli yuborildi!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Xabar yuborishda xato:', error);
      alert('Xatolik yuz berdi. Qayta urinib ko‘ring.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form ref={formRef} onSubmit={sendMessage} className="mt-12 flex flex-col gap-8">
          {Object.keys(config.contact.form).map(input => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === 'message' ? 'textarea' : 'input';

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  name={input}
                  type={input === 'email' ? 'email' : 'text'}
                  placeholder={placeholder}
                  value={form[input as keyof typeof form]}
                  onChange={handleChange}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === 'message' && { rows: 7 })}
                />
              </label>
            );
          })}

          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? 'Yuborilmoqda...' : 'Yuborish'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
