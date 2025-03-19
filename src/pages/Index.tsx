import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Heart, 
  HeartPulse, 
  Activity, 
  ArrowRight, 
  Brain, 
  Timer, 
  LineChart,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const Index = () => {
  // Add scroll animation observation
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.fade-up').forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.85 && rect.bottom >= 0) {
          el.classList.add('appear');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-eecp-gray pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-eecp-blue/10 blur-3xl"></div>
          <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-eecp-blue/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex flex-col space-y-8">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-eecp-blue/10 rounded-full">
                  <span className="text-sm font-medium text-eecp-blue">Advanced Cardiac Care</span>
                </div>
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight mb-6">
                  Experience the Next Generation of <span className="text-eecp-blue">Heart Health</span>
                </h1>
                <p className="text-lg text-eecp-lightGray leading-relaxed mb-8">
                  Enhanced External Counterpulsation (EECP) therapy offers a non-invasive, effective treatment for heart conditions. Improve your cardiovascular health without surgery.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  className="h-12 px-6 text-base"
                  onClick={() => document.getElementById("booking")?.scrollIntoView()}
                >
                  Book Your EECP Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="h-12 px-6 text-base"
                  onClick={() => document.getElementById("about")?.scrollIntoView()}
                >
                  Learn More
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-eecp-blue">98%</div>
                  <div className="text-sm text-eecp-lightGray">Patient Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-eecp-blue">35hr</div>
                  <div className="text-sm text-eecp-lightGray">Treatment Protocol</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-eecp-blue">FDA</div>
                  <div className="text-sm text-eecp-lightGray">Approved</div>
                </div>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-xl h-auto max-h-[600px]">
              <div className="relative pb-[56.25%] h-0">
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
                  alt="Sunlight through mountains representing heart health" 
                  className="absolute h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-eecp-lightGray mb-8">Trusted by leading medical institutions</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            <div className="h-8">
              <svg viewBox="0 0 136 64" fill="none" className="h-full w-auto">
                <path d="M49.775 27.509c-6.974 0-12.635 5.253-12.635 11.745 0 6.491 5.661 11.744 12.635 11.744S62.41 45.745 62.41 39.254c0-6.492-5.66-11.745-12.635-11.745zm0 18.866c-4.045 0-7.337-3.192-7.337-7.121 0-3.93 3.292-7.122 7.337-7.122s7.337 3.193 7.337 7.122c0 3.93-3.292 7.12-7.337 7.12zm-28.936-18.866c-6.974 0-12.635 5.253-12.635 11.745 0 6.491 5.661 11.744 12.635 11.744s12.635-5.253 12.635-11.744c0-6.492-5.661-11.745-12.635-11.745zm0 18.866c-4.045 0-7.337-3.192-7.337-7.121 0-3.93 3.292-7.122 7.337-7.122s7.337 3.193 7.337 7.122c0 3.93-3.292 7.12-7.337 7.12zm-28.935-15.253v4.91h11.793c-.352 2.73-1.276 4.731-2.688 6.13-1.724 1.682-4.412 3.546-9.105 3.546-7.262 0-12.923-5.735-12.923-12.828S14.642 17.88 21.904 17.88c3.93 0 6.795 1.503 8.914 3.449l3.543-3.449c-2.954-2.762-6.884-4.88-12.457-4.88C9.817 13 1.933 20.642 1.933 33c0 12.359 7.884 20 19.97 20 5.85 0 10.262-1.864 13.731-5.38 3.548-3.482 4.653-8.38 4.653-12.33 0-1.225-.096-2.36-.288-3.304H8.096zm112.164 3.87c-.961-2.51-3.87-7.122-9.818-7.122-5.902 0-10.812 4.546-10.812 11.745 0 6.58 4.862 11.744 11.38 11.744 5.254 0 8.282-3.145 9.538-4.975l-3.894-2.55c-1.299 1.865-3.067 3.096-5.644 3.096-2.558 0-4.37-1.143-5.524-3.385l15.246-6.176-.472-2.377zm-15.523 3.723c-.133-4.557 3.59-6.874 6.267-6.874 2.09 0 3.867 1.023 4.462 2.491l-10.73 4.383zm-12.359 11.09h5.298V14.492h-5.298v34.313zm-8.667-20.06h-.192c-1.19-1.382-3.472-2.633-6.369-2.633-6.049 0-11.592 5.204-11.592 11.792 0 6.54 5.543 11.697 11.592 11.697 2.897 0 5.18-1.252 6.369-2.682h.192v1.697c0 4.534-2.475 6.968-6.464 6.968-3.256 0-5.275-2.29-6.11-4.22l-4.628 1.884c1.33 3.146 4.85 7.01 10.738 7.01 6.242 0 11.526-3.594 11.526-12.355V28.066h-5.061v2.019zm-6.082 16.194c-4.045 0-7.41-3.336-7.41-7.035 0-3.747 3.365-7.131 7.41-7.131 3.989 0 7.122 3.384 7.122 7.13 0 3.7-3.133 7.036-7.122 7.036zm77.104-30.446h-12.673v34.312h5.266v-13.01h7.407c5.865 0 11.625-4.146 11.625-10.651s-5.76-10.651-11.625-10.651zm.15 16.532h-7.556v-11.76h7.557c3.853 0 6.041 3.126 6.041 5.88 0 2.706-2.188 5.88-6.041 5.88zm31.974-4.925c-3.826 0-7.787 1.652-9.422 5.303l4.674 1.907c.998-1.907 2.857-2.532 4.807-2.532 2.714 0 5.482 1.593 5.511 4.438v.358c-.95-.533-2.977-1.329-5.452-1.329-5.006 0-10.1 2.69-10.1 7.702 0 4.587 4.053 7.544 8.612 7.544 3.474 0 5.392-1.532 6.598-3.32h.18v2.621h5.065v-13.22c0-6.146-4.674-9.472-10.473-9.472zm-.634 18.8c-1.722 0-4.114-.842-4.114-2.927 0-2.65 2.977-3.67 5.54-3.67 2.29 0 3.377.486 4.763 1.143a6.263 6.263 0 01-6.189 5.453zm29.321-18.06L120.35 48.805h5.482l2.737-6.758h12.161l2.737 6.758h5.482l-12.16-29.805h-5.6zm5.809 17.745l4.407-10.806h.15l4.407 10.806h-8.964z" fill="currentColor"/>
              </svg>
            </div>
            <div className="h-8">
              <svg viewBox="0 0 240 64" fill="none" className="h-full w-auto">
                <path d="M53.714 27.96v14.12h-4.465V13.081h11.807c2.137 0 3.988.397 5.551 1.192 1.563.794 2.767 1.909 3.611 3.344.844 1.435 1.266 3.057 1.266 4.867 0 2.768-1.001 4.986-3.003 6.656-2.003 1.669-4.759 2.503-8.269 2.503h-6.498v-3.683zm0-11.196v7.513h7.134c2.087 0 3.684-.483 4.794-1.45 1.109-.968 1.663-2.32 1.663-4.055 0-1.736-.562-3.138-1.688-4.205-1.125-1.068-2.661-1.602-4.608-1.602h-7.295v3.8zm39.831 8.892v16.424h-4.463V28.883c0-2.686-.654-4.752-1.962-6.196-1.308-1.444-3.146-2.166-5.513-2.166-2.852 0-5.118.85-6.8 2.552-1.681 1.702-2.522 4.095-2.522 7.18v11.827h-4.463V13.081h4.277v5.628c.929-1.918 2.237-3.4 3.924-4.44 1.688-1.041 3.685-1.561 5.992-1.561 3.147 0 5.588.973 7.322 2.921 1.735 1.947 2.604 4.7 2.604 8.259l.604 1.828zm5.998-12.575h4.462v36.363h-4.462V13.081zm36.641 30.999L126.12 32.027l9.324-11.751h-5.439l-6.989 8.83-6.88-8.83h-5.476l9.324 11.937-10.064 12.867h5.438l7.694-9.908 7.657 9.908h5.476zm25.196-12.538V13.08h4.464v28.999h-4.279v-5.478c-.928 1.819-2.253 3.243-3.974 4.271-1.722 1.028-3.735 1.542-6.042 1.542-3.782 0-6.849-1.355-9.198-4.064-2.35-2.71-3.525-6.224-3.525-10.543s1.175-7.833 3.525-10.543c2.349-2.71 5.416-4.064 9.198-4.064 2.307 0 4.32.514 6.042 1.542 1.721 1.028 3.046 2.451 3.974 4.271v-5.933zm-13.878 17.458c2.387 0 4.337-.827 5.849-2.479 1.513-1.651 2.27-3.781 2.27-6.388 0-2.608-.757-4.738-2.27-6.389-1.512-1.652-3.462-2.478-5.849-2.478-2.387 0-4.338.826-5.85 2.478-1.513 1.651-2.269 3.781-2.269 6.389 0 2.607.756 4.737 2.269 6.388 1.512 1.652 3.463 2.479 5.85 2.479zm35.885-17.458V13.08h4.463v28.999h-4.278v-5.478c-.928 1.819-2.253 3.243-3.974 4.271-1.722 1.028-3.736 1.542-6.042 1.542-3.782 0-6.849-1.355-9.199-4.064-2.349-2.71-3.524-6.224-3.524-10.543s1.175-7.833 3.524-10.543c2.35-2.71 5.417-4.064 9.199-4.064 2.306 0 4.32.514 6.042 1.542 1.721 1.028 3.046 2.451 3.974 4.271v-5.933zm-13.878 17.458c2.386 0 4.336-.827 5.849-2.479 1.512-1.651 2.269-3.781 2.269-6.388 0-2.608-.757-4.738-2.269-6.389-1.513-1.652-3.463-2.478-5.849-2.478-2.387 0-4.337.826-5.85 2.478-1.512 1.651-2.269 3.781-2.269 6.389 0 2.607.757 4.737 2.269 6.388 1.513 1.652 3.463 2.479 5.85 2.479zM51.2 50.999c-3.752 0-6.82-1.296-9.199-3.891-2.379-2.594-3.569-5.912-3.569-9.954 0-4.073 1.225-7.4 3.676-9.979 2.45-2.578 5.687-3.867 9.708-3.867 3.165 0 5.801.813 7.91 2.437 2.107 1.626 3.471 3.892 4.092 6.8l-5.178 1.379c-.425-1.918-1.284-3.414-2.578-4.486-1.293-1.07-2.894-1.605-4.8-1.605-2.467 0-4.47.859-6.011 2.576-1.54 1.717-2.311 4.063-2.311 7.038 0 2.86.775 5.14 2.327 6.84 1.552 1.7 3.599 2.551 6.142 2.551 2.021 0 3.68-.562 4.973-1.684 1.295-1.122 2.128-2.721 2.5-4.798l5.17 1.446c-.714 3.211-2.185 5.65-4.412 7.315-2.228 1.665-5.012 2.497-8.35 2.497l-.09.285z" fill="currentColor"/>
              </svg>
            </div>
            <div className="h-7">
              <svg viewBox="0 0 151 33" fill="none" className="h-full w-auto">
                <path d="M150.059 16.304V13.85h-5.075v-5.947l-.178.056-4.762 1.454-.09.027v4.41h-7.494v-2.36c0-1.115.245-1.957.73-2.504.477-.537 1.185-.809 2.1-.809.647 0 1.32.13 2 .387l.168.064V6.208l-.087-.033c-.629-.237-1.459-.358-2.466-.358-1.614 0-3.062.333-4.3.989-1.242.658-2.215 1.591-2.894 2.778-.674 1.183-1.015 2.557-1.015 4.088v3.178h-3.54v2.454h3.54v16.371h5.075V18.756h7.494v10.423h5.074V18.756h5.075zm-30.35 3.882c-.974-.937-2.91-1.789-5.76-2.538-2.125-.595-3.497-1.112-4.079-1.538-.565-.414-.85-.992-.85-1.719 0-.862.345-1.541 1.059-2.084.716-.546 1.707-.822 2.942-.822 1.467 0 2.64.3 3.484.891.836.585 1.393 1.399 1.661 2.425l.079.305h5.275l-.039-.352c-.22-1.97-1.037-3.638-2.432-4.956-1.415-1.338-3.564-2.017-6.381-2.017-2.686 0-4.858.709-6.456 2.107-1.619 1.415-2.44 3.16-2.44 5.188 0 2.045.713 3.659 2.118 4.797.964.785 2.76 1.551 5.34 2.276 2.26.627 3.694 1.181 4.26 1.647.55.452.828 1.05.828 1.775 0 .91-.37 1.629-1.13 2.196-.77.573-1.822.863-3.125.863-1.476 0-2.696-.316-3.629-.942-.909-.613-1.506-1.477-1.777-2.564l-.078-.315h-5.353l.035.352c.293 2.935 1.378 4.983 3.229 6.084 1.732 1.033 3.778 1.558 6.079 1.558 2.882 0 5.206-.693 6.907-2.062 1.716-1.38 2.586-3.198 2.586-5.407 0-1.95-.633-3.498-1.883-4.598zm-29.358 11.148c2.645 0 4.824-.642 6.477-1.91 1.673-1.287 2.795-3.08 3.337-5.332l.065-.268h-5.339l-.051.152c-.448 1.336-1.07 2.27-1.85 2.777-.766.5-1.698.753-2.77.753-1.759 0
