import { Mail, Phone, MapPin } from "lucide-react";
import {Button} from "@/components/Button";
import { useState } from "react";

const contactInfo = [
    {
       icon: Mail,
       label: "Email",
       value: "habiba4@gmail.com"
    }, {
        icon: Phone,
        label: "Phone",
        value: "tel:+361486614586"
}, {
        icon: MapPin,
        label: "Location",
        value: "San Francisco,  CA"
   },
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault();                     //to prevent refreshing the page after submitting

    }

    return (
    <section id="contact" className="py-32 relative overflow-hidden">

        <div className="text-center font-bold text-primary/80 text-sm tracking-wider uppercase animate-fade-in">
            <h2> Get in Touch </h2>
            <h1 className="text-4xl md:text-5xl font-serif italic font-bold mt-2 mb-2 animate-fade-in animation-delay-100 text-secondary-foreground">
            Lets build <span className="italic md:text-5xl text-4xl font-serif text-white">
                something great.</span></h1>
          <p className="text-muted-foreground animate-fade-in animation-delay-200 mb-15 lowercase font-normal">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>
          {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
                <div className="glass p-8 rounded-3xl border border-primary/30">
                    <form className="space-y-6">

                        <div>
                            <label htmlFor="name" className="block text-sm  mb-2"> Name </label>
                            <input id="name" type="text" 
                            required  placeholder="your name" 
                            className="w-full px-4 py-3  bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus-ring-primary outline-none"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm  mb-2"> Email </label>
                            <input id="email" type="text"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({...formData, email: e.target.value})
                            }
                            required  placeholder="your@email.com" 
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({...formData, name: e.target.value})
                            }
                            className="w-full px-4 py-3  bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus-ring-primary outline-none" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm  mb-2"> Message </label>
                            <textarea id="message" type="text" 
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({...formData, message: e.target.value})
                            }
                            required  placeholder="Type a message" 
                            className="w-full px-4 py-3  bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus-ring-primary outline-none resize-none"/>
                        </div>

                            <Button className="w-full" type="submit" size="lg">
                                send Message <send />
                            </Button>
                    </form>
                </div>
            </div>
    </section>
    );
};


