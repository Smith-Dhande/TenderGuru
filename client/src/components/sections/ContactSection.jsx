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
          </h2>s
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block text-xs font-bold text-[#0B1628] uppercase tracking-wider mb-1.5 ${language === 'mr' ? 'font-mr text-sm' : 'font-sans'
                    }`}>
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F2EFE9] border border-[#E2DDD5] px-4 py-2.5 rounded-xs text-sm text-[#0B1628] focus:outline-none focus:border-[#0B1628] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-bold text-[#0B1628] uppercase tracking-wider mb-1.5 ${language === 'mr' ? 'font-mr text-sm' : 'font-sans'
                      }`}>
                      {t('contact.form.phone')} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F2EFE9] border border-[#E2DDD5] px-4 py-2.5 rounded-xs text-sm text-[#0B1628] focus:outline-none focus:border-[#0B1628] transition-colors"
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold text-[#0B1628] uppercase tracking-wider mb-1.5 ${language === 'mr' ? 'font-mr text-sm' : 'font-sans'
                      }`}>
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F2EFE9] border border-[#E2DDD5] px-4 py-2.5 rounded-xs text-sm text-[#0B1628] focus:outline-none focus:border-[#0B1628] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-bold text-[#0B1628] uppercase tracking-wider mb-1.5 ${language === 'mr' ? 'font-mr text-sm' : 'font-sans'
                    }`}>
                    {t('contact.form.category')}
                  </label>
                  <input
                    type="text"
                    placeholder={language === 'mr' ? 'उदा. कंत्राटदार, MSME, अभियंता' : 'e.g. MSME, Contractor, Engineer'}
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#F2EFE9] border border-[#E2DDD5] px-4 py-2.5 rounded-xs text-sm text-[#0B1628] focus:outline-none focus:border-[#0B1628] transition-colors"
                  />
                </div>

                <div>
                  <label className={`block text-xs font-bold text-[#0B1628] uppercase tracking-wider mb-1.5 ${language === 'mr' ? 'font-mr text-sm' : 'font-sans'
                    }`}>
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F2EFE9] border border-[#E2DDD5] px-4 py-2.5 rounded-xs text-sm text-[#0B1628] focus:outline-none focus:border-[#0B1628] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full inline-flex items-center justify-center bg-[#0B1628] hover:bg-[#16243B] text-white py-3.5 px-6 rounded-xs text-sm font-bold shadow-xs transition-colors ${language === 'mr' ? 'font-mr text-base' : 'font-sans uppercase tracking-wider'
                    }`}
                >
                  <span>{t('contact.form.submit')}</span>
                  <Send className="ml-2 w-4 h-4 text-amber-300" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column - Official Business Details */}
          <div className="lg:col-span-5 bg-[#0B1628] text-white p-6 sm:p-8 rounded-xs border border-[#16243B] flex flex-col justify-between">
            <div className="space-y-6">

              <div>
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-widest block mb-1">
                  {t('contact.info.phoneTitle')}
                </span>
                <p className="text-xl font-bold text-white flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-amber-300" />
                  <span>+91 99759 17001</span>
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {language === 'mr' ? 'सोमवार ते शनिवार (सकाळी १० ते संध्याकाळी ६)' : 'Monday to Saturday (10 AM to 6 PM)'}
                </p>
              </div>

              <div className="h-[1px] bg-slate-800" />

              <div>
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-widest block mb-2">
                  {t('contact.info.addressTitle')}
                </span>
                <div className="flex items-start space-x-3 text-slate-200 text-sm leading-relaxed">
                  <MapPin className="w-5 h-5 text-amber-300 shrink-0 mt-1" />
                  <p className={language === 'mr' ? 'font-mr text-base' : 'font-sans'}>
                    {t('contact.info.address')}
                  </p>
                </div>
              </div>

              <div className="h-[1px] bg-slate-800" />

              <div>
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-widest block mb-2">
                  {language === 'mr' ? 'अधिकृत कंपनी व प्रमाणन' : 'Corporate Entity'}
                </span>
                <div className="flex items-start space-x-3 text-slate-200 text-sm">
                  <Building2 className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <p className={`font-semibold text-white ${language === 'mr' ? 'font-mr' : 'font-sans'}`}>
                      {t('contact.info.company')}
                    </p>
                    <p className="text-xs text-amber-300/90 font-medium mt-1">
                      {t('contact.info.iso')}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400">
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
