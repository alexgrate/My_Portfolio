import { useState } from "react";
import profileImg from "../../assets/ProfileImg.jpeg"
import AnimatedItem from "../AnimatedItem";

const ContactSection = () => {
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
        budget: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");

        try {
        const response = await fetch("p01--alexdominion--fmvjx7pzd27y.code.run/api/contact/", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus("success");
            setFormData({ name: "", email: "", website: "", budget: "", message: "" });
            
            setTimeout(() => setStatus("idle"), 5000);
        } else {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
        } catch (error) {
        console.error("Error submitting form:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="flex flex-col items-center bg-white px-6 py-20 md:px-12 md:py-32">
            <div className="w-full max-w-160 flex flex-col">
                <AnimatedItem delay={0} className="mb-10 md:mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                        <span className="text-xs font-medium text-gray-600 tracking-wider uppercase">
                            Contact
                        </span>
                    </div>
                    <h2 className="hero-serif text-[#111111] text-[2.5rem] leading-[1.05] tracking-tight md:text-[3.25rem]">
                        Ready to build your next web application? let's talk
                    </h2>
                </AnimatedItem>

                <AnimatedItem
                    delay={0.15}
                    className="rounded-3xl bg-[#f7f7f7] p-6 sm:p-10 border border-gray-200/60 shadow-sm"
                >
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-medium text-gray-700 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Alex Dominion"
                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 shadow-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-medium text-gray-700 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="alex@support.com"
                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[13px] font-medium text-gray-700 ml-1">Website (optional)</label>
                            <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                placeholder="https://yourwebsite.com"
                                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 shadow-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[13px] font-medium text-gray-700 ml-1">Select Budget</label>
                            <div className="relative">
                                <select 
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] text-gray-500 outline-none transition-all focus:border-gray-400 focus:ring-1 focus:ring-gray-400 shadow-sm"
                                >
                                    <option value="" disabled selected>Select...</option>
                                    <option value="1k-5k">$1,000 - $5,000</option>
                                    <option value="5k-10k">$5,000 - $10,000</option>
                                    <option value="10k+">$10,000+</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[13px] font-medium text-gray-700 ml-1">How may we assist you?</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                placeholder="Tell me about your project, key features, timeline, or any specific requirements (Django backend, React frontend, API integrations, etc.)"
                                className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 shadow-sm"
                            >
                            </textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting" || status === "success"}
                            className={`mt-2 w-full rounded-xl py-4 text-[15px] font-semibold text-white transition-all 
                                ${status === 'success' ? 'bg-emerald-500 hover:scale-100' : 'bg-[#111111] hover:scale-[1.02]'}
                                ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}
                            `}
                            style={{ boxShadow: status === 'success' ? "0 12px 30px -10px rgba(16, 185, 129, 0.6)" : "0 12px 30px -10px rgba(0,0,0,0.8)" }}
                        >
                            {status === "idle" && "Send Your Message"}
                            {status === "submitting" && "Sending..."}
                            {status === "success" && "✓ Message Sent Successfully"}
                            {status === "error" && "Error Sending. Try Again."}
                        </button>
                    </form>

                    <div className="my-8 h-px w-full bg-gray-200/80"></div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full grayscale border border-gray-300 shadow-sm">
                                <img src={profileImg} alt="Emile" className="h-full w-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[15px] font-medium text-gray-900">alexgrate606@gmail.com</span>
                                <span className="text-[14px] text-gray-500">replies within 24 hrs</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm border border-gray-100">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34d399] opacity-70"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34d399]"></span>
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-800">
                                Available
                            </span>
                        </div>
                        
                    </div>
                </AnimatedItem>

                <AnimatedItem
                    delay={0.3}
                    className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 px-2"
                >
                    <h3 className="logo-font text-3xl text-gray-400 opacity-90">
                        Prefer to Book a call ?
                    </h3>
                    
                    <a
                        href="https://calendly.com/alexgrate606/30min"
                        target="_blank"
                        className="text-[15px] font-medium text-gray-800 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-black hover:decoration-black"
                    >
                        Book a call anytime
                    </a>
                </AnimatedItem>

            </div>
        </section>
    );
}

export default ContactSection