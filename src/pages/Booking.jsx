import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";
import { personal } from "../data/personal";
import { 
  Calendar, Clock, Building2, User, Mail, Phone, 
  MessageSquare, IndianRupee, Send, CheckCircle2, 
  AlertCircle, ChevronDown, Briefcase 
} from "lucide-react";
import scrollToTop from "../helpers/scrollToTop";

/**
 * CustomSelect Component — Styled to match the Slate & Copper theme
 */
const CustomSelect = ({ label, name, options, value, onChange, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="input-group" ref={dropdownRef}>
      <label className="input-label">{label}</label>
      <div className="custom-select">
        <div 
          className={`custom-select-trigger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-3">
            {Icon && <Icon className="w-4 h-4 text-copper" />}
            <span className={!value ? "text-ink-subtle" : "text-ink"}>
              {selectedOption ? selectedOption.label : "Select an option"}
            </span>
          </div>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        
        {isOpen && (
          <div className="custom-options">
            {options.map((opt) => (
              <div 
                key={opt.value}
                className={`custom-option ${value === opt.value ? 'selected' : ''}`}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              >
                {opt.label}
              </div>
            ))}
          </div>
        )}
        {/* Hidden input for form submission */}
        <input type="hidden" name={name} value={value} required />
      </div>
    </div>
  );
};

export default function Booking() {
  const form = useRef();
  const contentRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
  
  // Form State
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    contact_number: "",
    entity_type: "solopreneur",
    company_name: "",
    company_size: "1-5",
    service_needed: "Full Audit",
    budget: "50k-1L",
    preferred_date: "",
    preferred_time: "morning",
    notes: ""
  });

  useEffect(() => {
    // GSAP entrance animation
    const ctx = gsap.context(() => {
      gsap.from(".animate-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Subtle background glow animation
      gsap.to(".bg-glow", {
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, contentRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitStatus("success");
          setIsSubmitting(false);
          setFormData({
            user_name: "",
            user_email: "",
            contact_number: "",
            entity_type: "solopreneur",
            company_name: "",
            company_size: "1-5",
            service_needed: "Full Audit",
            budget: "50k-1L",
            preferred_date: "",
            preferred_time: "morning",
            notes: ""
          });
          scrollToTop();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setSubmitStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <main ref={contentRef} className="section-full relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="bg-glow absolute top-1/4 -left-20 w-96 h-96 bg-copper/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="bg-glow absolute bottom-1/4 -right-20 w-96 h-96 bg-copper/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="section-header-center animate-item">
          <span className="section-label">Consultation</span>
          <h1 className="text-display text-4xl md:text-6xl mb-4">
            Secure Your <em>Audit Call</em>
          </h1>
          <p className="text-lead max-w-2xl mx-auto">
            Ready to optimize? Tell me about your project and let's build something that actually moves the needle for your business.
          </p>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === "success" && (
          <div className="card-elevated animate-item mb-8 border-success/30 bg-success/5 backdrop-blur-md flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="text-success w-6 h-6" />
            </div>
            <div>
              <h3 className="card-title text-success">Booking Request Sent!</h3>
              <p className="card-body">Your message has been delivered. I'll reach out within 24 hours to confirm your slot.</p>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="card-elevated animate-item mb-8 border-error/30 bg-error/5 backdrop-blur-md flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-error/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="text-error w-6 h-6" />
            </div>
            <div>
              <h3 className="card-title text-error">Delivery Failed</h3>
              <p className="card-body">Something went wrong. Please check your connection or email me at {personal.contact.email}.</p>
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="glass-panel rounded-2xl p-6 md:p-10 animate-item">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* Name */}
              <div className="input-group">
                <label htmlFor="user_name" className="input-label">Full Name</label>
                <div className="input-with-icon">
                  <User className="input-icon-left w-4 h-4 text-copper" />
                  <input 
                    type="text" 
                    name="user_name" 
                    id="user_name" 
                    className="input" 
                    placeholder="Enter your name" 
                    value={formData.user_name}
                    onChange={(e) => handleChange("user_name", e.target.value)}
                    required 
                  />
                </div>
              </div>

              {/* Email */}
              <div className="input-group">
                <label htmlFor="user_email" className="input-label">Email Address</label>
                <div className="input-with-icon">
                  <Mail className="input-icon-left w-4 h-4 text-copper" />
                  <input 
                    type="email" 
                    name="user_email" 
                    id="user_email" 
                    className="input" 
                    placeholder="john@example.com" 
                    value={formData.user_email}
                    onChange={(e) => handleChange("user_email", e.target.value)}
                    required 
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div className="input-group">
                <label htmlFor="contact_number" className="input-label">Contact Number (WhatsApp)</label>
                <div className="input-with-icon">
                  <Phone className="input-icon-left w-4 h-4 text-copper" />
                  <input 
                    type="tel" 
                    name="contact_number" 
                    id="contact_number" 
                    className="input" 
                    placeholder="+91 00000 00000" 
                    value={formData.contact_number}
                    onChange={(e) => handleChange("contact_number", e.target.value)}
                    required 
                  />
                </div>
              </div>

              {/* Entity Type - Custom Select */}
              <CustomSelect 
                label="I am a..."
                name="entity_type"
                icon={Building2}
                value={formData.entity_type}
                onChange={(val) => handleChange("entity_type", val)}
                options={[
                  { label: "Solopreneur / Freelancer", value: "solopreneur" },
                  { label: "Company / Agency", value: "company" },
                  { label: "Startup Founder", value: "startup" }
                ]}
              />

              {/* Company Name & Size - Conditional */}
              {(formData.entity_type === "company" || formData.entity_type === "startup") && (
                <>
                  <div className="input-group animate-item">
                    <label htmlFor="company_name" className="input-label">Company Name</label>
                    <div className="input-with-icon">
                      <Building2 className="input-icon-left w-4 h-4 text-copper" />
                      <input 
                        type="text" 
                        name="company_name" 
                        id="company_name" 
                        className="input" 
                        placeholder="Enter your company name" 
                        value={formData.company_name}
                        onChange={(e) => handleChange("company_name", e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                  <div className="animate-item">
                    <CustomSelect 
                      label="Company Size"
                      name="company_size"
                      icon={User}
                      value={formData.company_size}
                      onChange={(val) => handleChange("company_size", val)}
                      options={[
                        { label: "1-5 Employees", value: "1-5" },
                        { label: "6-20 Employees", value: "6-20" },
                        { label: "21-50 Employees", value: "21-50" },
                        { label: "50+ Employees", value: "50+" }
                      ]}
                    />
                  </div>
                </>
              )}

              {/* Service Needed - Custom Select */}
              <CustomSelect 
                label="Service Interested In"
                name="service_needed"
                icon={Briefcase}
                value={formData.service_needed}
                onChange={(val) => handleChange("service_needed", val)}
                options={[
                  { label: "Full Infrastructure Audit", value: "Full Audit" },
                  { label: "Custom Website", value: "Web Development" },
                  { label: "Workflow Automation", value: "Automation" },
                  { label: "Custom Internal Tools", value: "Internal Tools" }
                ]}
              />

              {/* Budget - Custom Select */}
              <CustomSelect 
                label="Estimated Budget"
                name="budget"
                icon={IndianRupee}
                value={formData.budget}
                onChange={(val) => handleChange("budget", val)}
                options={[
                  { label: "Under ₹50,000", value: "under-50k" },
                  { label: "₹50,000 - ₹1,00,000", value: "50k-1L" },
                  { label: "₹1,00,000 - ₹5,00,000", value: "1L-5L" },
                  { label: "Above ₹5,00,000", value: "5L+" }
                ]}
              />

              {/* Date */}
              <div className="input-group">
                <label htmlFor="preferred_date" className="input-label">Preferred Date</label>
                <div className="input-with-icon">
                  <Calendar className="input-icon-left w-4 h-4 text-copper" />
                  <input 
                    type="date" 
                    name="preferred_date" 
                    id="preferred_date" 
                    className="input" 
                    value={formData.preferred_date}
                    onChange={(e) => handleChange("preferred_date", e.target.value)}
                    required 
                  />
                </div>
              </div>

              {/* Time - Custom Select */}
              <CustomSelect 
                label="Preferred Time Slot"
                name="preferred_time"
                icon={Clock}
                value={formData.preferred_time}
                onChange={(val) => handleChange("preferred_time", val)}
                options={[
                  { label: "Morning (8 AM - 12 PM)", value: "morning" },
                  { label: "Afternoon (1 PM - 5 PM)", value: "afternoon" },
                  { label: "Evening (5 PM - 9 PM)", value: "evening" }
                ]}
              />

            </div>

            {/* Notes */}
            <div className="input-group mt-8">
              <label htmlFor="notes" className="input-label">Brief about your project</label>
              <div className="input-with-icon">
                <MessageSquare className="input-icon-left w-4 h-4  text-copper" style={{ top: '1.25rem', transform: 'none' }} />
                <textarea 
                  name="notes" 
                  id="notes" 
                  className="textarea px-10" 
                  placeholder="Share any specific challenges or goals you have..."
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10">
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="btn btn-xl max-md:text-xs btn-primary w-full shadow-copper-glow"
              >
                {isSubmitting ? 'Processing Details...' : (
                  <>
                    Confirm Booking Request
                    <Send className="w-4 h-4 max-md:w-2 max-md:h-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center animate-item">
          <p className="text-caption">
            After submission, you'll receive a confirmation message via WhatsApp/Email.
            <br />
            Typically responds in <strong>less than 24 hours</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}
