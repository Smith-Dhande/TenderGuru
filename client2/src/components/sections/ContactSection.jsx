import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, MapPin, Building2, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection = () => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#F4F0E8] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#93622A] uppercase font-sans">
            {t('contact.tag')}
          </span>
          <h2 className={`text-3xl sm:text-4xl text-[#0B1628] font-bold mt-2 mb-3 leading-tight ${language === 'mr' ? 'font-mr font-semibold' : 'font-editorial font-normal'
            }`}>
            {t('contact.title')}
          </h2>
          <p className={`text-base text-slate-700 leading-relaxed ${language === 'mr' ? 'font-mr' : 'font-sans'
            }`}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column - Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#E2DDD5] p-6 sm:p-8 rounded-xs shadow-2xs">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-12 h-12 text-[#93622A] mx-auto mb-4" />
                <h3 className={`text-2xl font-bold text-[#0B1628] mb-2 ${language === 'mr' ? 'font-mr' : 'font-sans'}`}>
                  {language === 'mr' ? 'धन्यवाद! तुमची चौकशी स्वीकारली आहे.' : 'Thank you! Your enquiry has been received.'}
                </h3>
                <p className={`text-slate-600 text-sm ${language === 'mr' ? 'font-mr' : 'font-sans'}`}>
                  {language === 'mr' ? 'आमची टीम लवकरच तुमच्याशी संपर्क साधेल.' : 'Our team will get back to you shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-[10px] sm:text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'mr' ? 'तुमचे नाव प्रविष्ट करा' : 'How should we address you?'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-[#E2DDD5] focus:border-[#93622A] py-2.5 text-sm sm:text-base text-[#0B1628] placeholder-slate-400/80 focus:outline-none transition-colors font-sans"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-[10px] sm:text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder={language === 'mr' ? 'तुमचा ईमेल पत्ता' : 'Where should we reach you?'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-[#E2DDD5] focus:border-[#93622A] py-2.5 text-sm sm:text-base text-[#0B1628] placeholder-slate-400/80 focus:outline-none transition-colors font-sans"
                    />
                  </div>
                </div>

                {/* Row 2: Phone Number */}
                <div className="group">
                  <label className="block text-[10px] sm:text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-2">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={language === 'mr' ? 'तुमचा मोबाईल नंबर' : 'A number to connect over'}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-[#E2DDD5] focus:border-[#93622A] py-2.5 text-sm sm:text-base text-[#0B1628] placeholder-slate-400/80 focus:outline-none transition-colors font-sans"
                  />
                </div>

                {/* Row 3: Message */}
                <div className="group">
                  <label className="block text-[10px] sm:text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    rows={3}
                    placeholder={language === 'mr' ? 'तुमचा संदेश लिहा...' : "What's the vision? We're listening..."}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[#E2DDD5] focus:border-[#93622A] py-2.5 text-sm sm:text-base text-[#0B1628] placeholder-slate-400/80 focus:outline-none resize-none transition-colors font-sans"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className={`w-full inline-flex items-center justify-center bg-[#0B1628] hover:bg-[#16243B] text-white py-3.5 px-6 rounded-md text-sm font-bold shadow-xs transition-colors cursor-pointer ${
                      language === 'mr' ? 'font-mr text-base' : 'font-sans uppercase tracking-wider'
                    }`}
                  >
                    <span>{t('contact.form.submit')}</span>
                    <Send className="ml-2 w-4 h-4 text-amber-300" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column - Official Business Details (Matching Site Theme) */}
          <div className="lg:col-span-5 bg-[#FAF8F5] border-2 border-[#C89B53]/50 hover:border-[#C89B53] text-[#0B1628] p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">

              <div>
                <span className="text-xs font-mono font-bold text-[#93622A] uppercase tracking-widest block mb-1">
                  {t('contact.info.phoneTitle')}
                </span>
                <p className="text-xl sm:text-2xl font-bold text-[#0B1628] flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-[#93622A]" />
                  <span>+91 99759 17001</span>
                </p>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  {language === 'mr' ? 'सोमवार ते शनिवार (सकाळी १० ते संध्याकाळी ६)' : 'Monday to Saturday (10 AM to 6 PM)'}
                </p>
              </div>

              <div className="h-[1px] bg-[#E8E2D5]" />

              <div>
                <span className="text-xs font-mono font-bold text-[#93622A] uppercase tracking-widest block mb-2">
                  {t('contact.info.addressTitle')}
                </span>
                <div className="flex items-start space-x-3 text-slate-700 text-sm leading-relaxed">
                  <MapPin className="w-5 h-5 text-[#93622A] shrink-0 mt-0.5" />
                  <p className={language === 'mr' ? 'font-mr text-base' : 'font-sans font-medium'}>
                    {t('contact.info.address')}
                  </p>
                </div>
              </div>

              <div className="h-[1px] bg-[#E8E2D5]" />

              <div>
                <span className="text-xs font-mono font-bold text-[#93622A] uppercase tracking-widest block mb-2">
                  {language === 'mr' ? 'अधिकृत कंपनी व प्रमाणन' : 'Corporate Entity'}
                </span>
                <div className="flex items-start space-x-3 text-slate-700 text-sm">
                  <Building2 className="w-5 h-5 text-[#93622A] shrink-0 mt-0.5" />
                  <div>
                    <p className={`font-bold text-[#0B1628] ${language === 'mr' ? 'font-mr text-base' : 'font-sans'}`}>
                      {t('contact.info.company')}
                    </p>
                    <p className="text-xs text-[#93622A] font-bold mt-1">
                      {t('contact.info.iso')}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-[#E8E2D5] text-xs text-slate-500">
              <p className={language === 'mr' ? 'font-mr' : 'font-sans'}>
                {language === 'mr'
                  ? 'टीप: eTender Guru ही एक शैक्षणिक व सल्लागार संस्था आहे.'
                  : 'Note: eTender Guru is an independent education & consultancy institute.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
