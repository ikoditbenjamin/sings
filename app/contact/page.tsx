'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Github
} from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa"


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We would love to hear from you. Send us a message and we will respond as soon as possible.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10 text-accent">
                        <Mail size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:hello@company.com" className="text-muted-foreground hover:text-accent transition-colors">
                        techtroy28@gmail.com <br/>ikoditbenjamin9@gmail.com <span className='text-blue-400 text-xl'>(personal)</span>
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10 text-accent">
                        <Phone size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent transition-colors">
                        +256 (747) 447-447 | +256 (782) 391-512
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10 text-accent">
                        <MapPin size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Kireka Kamuli C<br />
                        Alongside Kamuli Road<br />
                        Kampala, Uganda
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-secondary text-primary hover:bg-blue-700 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-secondary text-primary transition-colors hover:bg-gray-700 hover:text-white"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                     <a 
                    href="#" 
                    className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-secondary text-primary hover:bg-accent hover:text-accent-foreground transition-colors hover:bg-purple-700 hover:text-pink-120"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                      
                   <a 
                    href="#" 
                    className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-secondary text-primary hover:bg-accent hover:text-accent-foreground hover:bg-pink-500 hover:text-pink-120 transition-colors"
                    aria-label="Github"
                  >
                    <Github size={20} />
                  </a>
                      
                       <a 
                    href="#" 
                    className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-secondary text-primary hover:bg-blue-700 hover:text-pink-120 transition-colors"
                    aria-label="Facebook"
                  > 

                    <Facebook size={20} />
                  </a>
                      
                       <a 
                    href="#" 
                    className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-secondary text-primary hover:bg-red-500 hover:text-pink-100 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={20} />
                  </a>

                     <a 
                    href="#" 
                    className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-secondary text-primary  hover:bg-green-500 hover:text-pink-100 transition-colors"
                    aria-label="whatsapp"
                  >
                    <FaWhatsapp size={20} />
                    <br />
                  </a>
                      
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full bg-background border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-background border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      rows={5}
                      className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-11 rounded-lg transition-colors"
                  >
                    {submitted ? 'Message Sent!' : 'Send Message'}
                  </Button>
                </form>

                {submitted && (
                  <div className="mt-4 p-3 bg-accent/10 border border-accent/20 rounded-lg">
                    <p className="text-sm text-accent font-medium">
                      Thanks! Well get back to you soon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <map />
      </section>
      <div className="w-fullgrid grid-col-1 justify-center mt-16">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.745313320775!2d32.64591957310303!3d0.3466123639828599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db948a3fc10ab%3A0xa61368735eb67913!2sKireka%20Shopping%20Centre!5e0!3m2!1sen!2sug!4v1773226618219!5m2!1sen!2sug" width="1400" height="450" ></iframe>
      </div>
    
    </div>
  )
}