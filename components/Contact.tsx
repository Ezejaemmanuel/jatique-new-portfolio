import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaWhatsapp, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message sent!",
        description: "Thanks for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-rose-400 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/5">
            <div className="bg-gray-800/30 border border-rose-500/20 rounded-xl p-6 h-full">
              <h3 className="text-xl font-bold mb-6 text-rose-400">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-500/20 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                    <p className="font-medium">ezejaemmanuel36@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-rose-500/20 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                    <p className="font-medium">+234 913 885 3790</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-rose-500/20 p-3 rounded-lg">
                    <FaWhatsapp className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">WhatsApp</h4>
                    <p className="font-medium">+234 913 885 3790</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-rose-500/20 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                    <p className="font-medium">Remote, Available Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Ezejaemmanuel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-500/20 p-3 rounded-lg hover:bg-rose-500/40 transition-colors"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/emmanuel-chibuike-37508b251/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-500/20 p-3 rounded-lg hover:bg-rose-500/40 transition-colors"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/ezejaemmanuel36"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-500/20 p-3 rounded-lg hover:bg-rose-500/40 transition-colors"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://wa.me/2349138853790"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-500/20 p-3 rounded-lg hover:bg-rose-500/40 transition-colors"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <form onSubmit={handleSubmit} className="bg-gray-800/30 border border-rose-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 text-rose-400">Send Me a Message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-gray-700/50 border-rose-500/30 focus:border-rose-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Your Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-gray-700/50 border-rose-500/30 focus:border-rose-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-1">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="bg-gray-700/50 border-rose-500/30 focus:border-rose-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="I'd like to discuss a project..."
                  required
                  className="bg-gray-700/50 border-rose-500/30 focus:border-rose-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 text-white"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
