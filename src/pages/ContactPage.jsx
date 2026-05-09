import React, { useEffect, useRef, useState } from 'react'; // useRef සහ useState අලුතින් ගත්තා
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
// EmailJS import කළා
import emailjs from '@emailjs/browser'; 

const ContactPage = () => {
  // Form එකේ තොරතුරු direct අල්ලගන්න useRef පාවිච්චි කරනවා
  const formRef = useRef();

  // ඇනිමේෂන් ස්මූත් වෙන්න දාපු easing එක
  const smoothEase = [0.22, 1, 0.36, 1];

  // Feedback message (Success/Error) සහ Loading පෙන්වන්න state දෙකක්
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ********** EMAILJS සම්බන්ධ කිරීමේ ප්‍රධාන කොටස **********
  const sendEmail = (e) => {
    e.preventDefault(); // පිටුව refresh වෙන එක නවත්වනවා
    setLoading(true); // Loading animation එක පටන් ගන්නවා
    setStatus({ type: '', message: '' }); // කලින් message එක මකනවා

    // **********************************************************
    // ********** අනිවාර්යයෙන් මේ ටික වෙනස් කරන්න! **********
    // ඔයාගේ EmailJS Dashboard එකෙන් මේ IDs තුන අරන් මෙතනට දාන්න:
    // උදාහරණයක් විදිහට මේ IDs 'service_xxxxxx' වගේ තියෙයි.
    // **********************************************************
    const serviceId = 'service_jr3el8c'; 
    const templateId = 'template_5gn714i'; 
    const publicKey = '5VWpeSG0Kk0fLqpND'; 

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setStatus({ type: 'success', message: 'Hooray! Your message was sent successfully. I will get back to you soon.' });
          formRef.current.reset(); // Form එකේ තොරතුරු මකලා දානවා (reset කරනවා)
      }, (error) => {
          console.log(error.text);
          setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again later or email me directly.' });
      })
      .finally(() => {
        setLoading(false); // Loading animation එක නවත්වනවා
      });
  };

  return (
    <div className="pt-32 pb-20 px-10 md:px-20 max-w-7xl mx-auto min-h-screen relative z-10 overflow-hidden">
      
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
         <div className="absolute bottom-[10%] left-[10%] w-72 h-72 bg-[#007bff] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#ccd6f6] mb-4 relative">
            Get In <span className="text-[#64ffda]">Touch</span>
            <span className="absolute -top-4 -right-10 text-3xl animate-pulse"></span>
          </h1>
          <p className="text-[#8892b0] text-lg max-w-xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
          </p>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#64ffda] to-transparent w-48 mx-auto mt-8 shadow-[0_0_10px_#64ffda]"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* වම් පැත්ත: Contact Info & Socials (x: -50) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
            className="lg:w-1/3 space-y-8"
          >
            <h3 className="text-2xl font-bold text-[#ccd6f6] mb-6 tracking-wide">Contact Info</h3>
            
            <div className="space-y-6">
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 group">
                <div className="p-4 bg-[#112240] rounded-lg text-[#64ffda] border border-[#233554] group-hover:border-[#64ffda]/50 transition-all shadow-lg">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="text-[#8892b0] text-xs font-mono uppercase tracking-widest">Email Me</p>
                  <a href="mailto:madhushankasupun7@gmail.com" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">madhushankasupun7@gmail.com</a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 group">
                <div className="p-4 bg-[#112240] rounded-lg text-[#007bff] border border-[#233554] group-hover:border-[#007bff]/50 transition-all shadow-lg">
                  <FiLinkedin size={24} />
                </div>
                <div>
                  <p className="text-[#8892b0] text-xs font-mono uppercase tracking-widest">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/supun-madhusanka-609ab22ba" target="_blank" rel="noreferrer" className="text-[#ccd6f6] hover:text-[#007bff] transition-colors">Supun Madhusanka</a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 group">
                <div className="p-4 bg-[#112240] rounded-lg text-[#ccd6f6] border border-[#233554] group-hover:border-white/50 transition-all shadow-lg">
                  <FiGithub size={24} />
                </div>
                <div>
                  <p className="text-[#8892b0] text-xs font-mono uppercase tracking-widest">GitHub</p>
                  <a href="https://github.com/madhushankaspn" target="_blank" rel="noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">madhushankaspn</a>
                </div>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-[#233554]">
              <p className="text-[#8892b0] text-sm leading-relaxed">
                I'm based in <span className="text-[#ccd6f6] font-medium">Colombo, Sri Lanka</span>, but open for remote work worldwide. Let's build something amazing together!
              </p>
            </div>
          </motion.div>

          {/* දකුණු පැත්ත: Contact Form (x: 50) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: smoothEase }}
            className="lg:w-2/3"
          >
            {/* ෆෝම් එක useRef එකට සම්බන්ධ කළා */}
            <form ref={formRef} onSubmit={sendEmail} className="bg-[#112240]/50 backdrop-blur-md p-8 rounded-2xl border border-[#233554] space-y-6 shadow-xl relative overflow-hidden">
              
              {/* Success/Error Message */}
              {status.message && (
                <div className={`p-4 rounded-lg text-sm ${status.type === 'success' ? 'bg-[#64ffda]/10 text-[#64ffda]' : 'bg-red-500/10 text-red-500'}`}>
                  {status.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[#64ffda] font-mono text-xs uppercase tracking-wider">Your Name</label>
                  {/* name="from_name" කියන එක template එකට සමාන වෙන්න ඕනේ */}
                  <input type="text" name="from_name" placeholder="Supun Madhusanka" required className="w-full bg-[#0a192f] border border-[#233554] rounded-lg px-4 py-3 text-[#ccd6f6] outline-none focus:border-[#64ffda] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[#64ffda] font-mono text-xs uppercase tracking-wider">Your Email</label>
                  <input type="email" name="reply_to" placeholder="example@mail.com" required className="w-full bg-[#0a192f] border border-[#233554] rounded-lg px-4 py-3 text-[#ccd6f6] outline-none focus:border-[#64ffda] transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[#64ffda] font-mono text-xs uppercase tracking-wider">Subject</label>
                <input type="text" name="subject" placeholder="Hiring for a Project" required className="w-full bg-[#0a192f] border border-[#233554] rounded-lg px-4 py-3 text-[#ccd6f6] outline-none focus:border-[#64ffda] transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[#64ffda] font-mono text-xs uppercase tracking-wider">Message</label>
                <textarea name="message" rows="5" placeholder="Hi Supun, I'd like to discuss a project..." required className="w-full bg-[#0a192f] border border-[#233554] rounded-lg px-4 py-3 text-[#ccd6f6] outline-none focus:border-[#64ffda] transition-all resize-none"></textarea>
              </div>

              {/* Submit Button (Loading state එකක් දැම්මා) */}
              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full ${loading ? 'bg-[#112240]' : 'bg-transparent'} border-2 border-[#64ffda] text-[#64ffda] py-4 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 shadow-[0_0_15px_rgba(100,255,218,0.2)] ${loading ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
                type="submit"
                disabled={loading} // Loading වෙද්දී බටන් එක ඔබන්න බෑ
              >
                {loading ? (
                  <>
                    {/* CSS Loading spinner */}
                    <span className="w-5 h-5 border-2 border-[#64ffda] border-t-transparent rounded-full animate-spin"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;