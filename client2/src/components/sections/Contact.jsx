import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const { content } = useLanguage();
  const { contact } = content;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    topic: contact.form.topics[0],
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'कृपया पूर्ण नाव प्रविष्ट करा (Please enter full name)';
    if (!formData.phone.trim() || !/^[0-9]{10}$/.exec(formData.phone.replace(/\D/g, ''))) {
      errs.phone = 'कृपया १० अंकी वैध मोबाईल नंबर प्रविष्ट करा (Please enter 10-digit mobile number)';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#FAF8F5] py-16 sm:py-24 border-b border-[#D8CFBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-10 border-b border-[#D8CFBF] space-y-2 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold text-[#9E6B1D]">
              {contact.sectionNum}
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#64748B]">
              {contact.eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            {contact.title}
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Direct Contact Routes (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#D8CFBF] p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#0F172A] pb-4 border-b border-[#E7E1D7]">
                थेट संपर्क माहिती (Direct Contact Routes)
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-4 group p-3 -mx-3 hover:bg-[#FAF8F5] rounded transition-colors"
                >
                  <div className="bg-[#F9F1E2] text-[#9E6B1D] p-3 rounded-[2px]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-[#64748B] tracking-wider block">मोबाईल / दूरध्वनी</span>
                    <span className="text-lg font-bold text-[#0F172A] group-hover:text-[#9E6B1D] transition-colors">{contact.phone}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-4 group p-3 -mx-3 hover:bg-[#FAF8F5] rounded transition-colors"
                >
                  <div className="bg-[#F9F1E2] text-[#9E6B1D] p-3 rounded-[2px]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-[#64748B] tracking-wider block">ईमेल पत्ता</span>
                    <span className="text-base font-semibold text-[#0F172A] group-hover:text-[#9E6B1D] transition-colors">{contact.email}</span>
                  </div>
                </a>

                {/* WhatsApp Action */}
                <a
                  href={`https://wa.me/${contact.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group p-3 -mx-3 hover:bg-[#FAF8F5] rounded transition-colors"
                >
                  <div className="bg-[#E6F2EB] text-[#1E6B4A] p-3 rounded-[2px]">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-[#1E6B4A] tracking-wider block">WhatsApp संभाषणासाठी</span>
                    <span className="text-base font-semibold text-[#0F172A] group-hover:text-[#1E6B4A] transition-colors">WhatsApp संदेश पाठवा</span>
                  </div>
                </a>

                {/* Address & Hours */}
                <div className="pt-4 border-t border-[#E7E1D7] space-y-4">
                  <div className="flex items-start gap-3.5 text-sm text-[#334155]">
                    <MapPin size={18} className="text-[#9E6B1D] shrink-0 mt-0.5" />
                    <span>{contact.address}</span>
                  </div>
                  <div className="flex items-start gap-3.5 text-xs text-[#64748B]">
                    <Clock size={16} className="text-[#9E6B1D] shrink-0 mt-0.5" />
                    <span>{contact.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#D8CFBF] p-6 sm:p-10 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-6">
                चौकशी फॉर्म (Enquiry Form)
              </h3>

              {submitted ? (
                <div className="bg-[#E6F2EB] border border-[#9CC9B2] p-8 text-center space-y-4 rounded-[2px]">
                  <CheckCircle2 size={48} className="text-[#1E6B4A] mx-auto" />
                  <h4 className="font-serif text-2xl font-bold text-[#1E6B4A]">
                    धन्यवाद! संदेश प्राप्त झाला.
                  </h4>
                  <p className="text-base text-[#334155]">
                    तुमची चौकशी आमच्या सल्लागार टीमकडे नोंदवली गेली आहे. आम्ही पुढील २४ तासांत संपर्क करू.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-[#0B1727] text-white font-semibold text-sm px-6 py-2.5 rounded-[2px]"
                  >
                    नवीन चौकशी करा
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0F172A]">
                      {contact.form.name} <span className="text-[#A32A2A]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-[52px] px-4 text-base bg-white border border-[#D8CFBF] rounded-[2px] focus:border-[#0B1727] focus:ring-1 focus:ring-[#0B1727] text-[#0F172A]"
                      placeholder="उदा. प्रशांत देशपांडे"
                    />
                    {errors.name && <p className="text-xs font-medium text-[#A32A2A]">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#0F172A]">
                      {contact.form.phone} <span className="text-[#A32A2A]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-[52px] px-4 text-base bg-white border border-[#D8CFBF] rounded-[2px] focus:border-[#0B1727] focus:ring-1 focus:ring-[#0B1727] text-[#0F172A]"
                      placeholder="उदा. 98220XXXXX"
                    />
                    {errors.phone && <p className="text-xs font-medium text-[#A32A2A]">{errors.phone}</p>}
                  </div>

                  {/* Topic Select */}
                  <div className="space-y-2">
                    <label htmlFor="topic" className="block text-sm font-semibold text-[#0F172A]">
                      {contact.form.topic}
                    </label>
                    <select
                      id="topic"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full h-[52px] px-4 text-base bg-white border border-[#D8CFBF] rounded-[2px] focus:border-[#0B1727] focus:ring-1 focus:ring-[#0B1727] text-[#0F172A]"
                    >
                      {contact.form.topics.map((t, idx) => (
                        <option key={idx} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-[#0F172A]">
                      {contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 text-base bg-white border border-[#D8CFBF] rounded-[2px] focus:border-[#0B1727] focus:ring-1 focus:ring-[#0B1727] text-[#0F172A]"
                      placeholder="तुमचा प्रश्न किंवा व्यवसायाची माहिती लिहा..."
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full h-[52px] bg-[#0B1727] hover:bg-[#1B365D] text-white font-semibold text-base rounded-[2px] transition-colors flex items-center justify-center gap-2"
                    >
                      <Send size={18} className="text-[#C58B2B]" />
                      <span>{contact.form.submit}</span>
                    </button>
                    <p className="text-xs text-[#64748B] text-center mt-3">
                      {contact.form.note}
                    </p>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
