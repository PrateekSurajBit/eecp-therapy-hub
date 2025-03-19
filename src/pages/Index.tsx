
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
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="EECP Therapy Session" 
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
                <path d="M150.059 16.304V13.85h-5.075v-5.947l-.178.056-4.762 1.454-.09.027v4.41h-7.494v-2.36c0-1.115.245-1.957.73-2.504.477-.537 1.185-.809 2.1-.809.647 0 1.32.13 2 .387l.168.064V6.208l-.087-.033c-.629-.237-1.459-.358-2.466-.358-1.614 0-3.062.333-4.3.989-1.242.658-2.215 1.591-2.894 2.778-.674 1.183-1.015 2.557-1.015 4.088v3.178h-3.54v2.454h3.54v16.371h5.075V18.756h7.494v10.423h5.074V18.756h5.075zm-30.35 3.882c-.974-.937-2.91-1.789-5.76-2.538-2.125-.595-3.497-1.112-4.079-1.538-.565-.414-.85-.992-.85-1.719 0-.862.345-1.541 1.059-2.084.716-.546 1.707-.822 2.942-.822 1.467 0 2.64.3 3.484.891.836.585 1.393 1.399 1.661 2.425l.079.305h5.275l-.039-.352c-.22-1.97-1.037-3.638-2.432-4.956-1.415-1.338-3.564-2.017-6.381-2.017-2.686 0-4.858.709-6.456 2.107-1.619 1.415-2.44 3.16-2.44 5.188 0 2.045.713 3.659 2.118 4.797.964.785 2.76 1.551 5.34 2.276 2.26.627 3.694 1.181 4.26 1.647.55.452.828 1.05.828 1.775 0 .91-.37 1.629-1.13 2.196-.77.573-1.822.863-3.125.863-1.476 0-2.696-.316-3.629-.942-.909-.613-1.506-1.477-1.777-2.564l-.078-.315h-5.353l.035.352c.293 2.935 1.378 4.983 3.229 6.084 1.732 1.033 3.778 1.558 6.079 1.558 2.882 0 5.206-.693 6.907-2.062 1.716-1.38 2.586-3.198 2.586-5.407 0-1.95-.633-3.498-1.883-4.598zm-29.358 11.148c2.645 0 4.824-.642 6.477-1.91 1.673-1.287 2.795-3.08 3.337-5.332l.065-.268h-5.339l-.051.152c-.448 1.336-1.07 2.27-1.85 2.777-.766.5-1.698.753-2.77.753-1.759 0-3.152-.599-4.135-1.78-.986-1.187-1.486-2.864-1.486-4.985 0-2.157.489-3.84 1.452-5.003.96-1.158 2.333-1.745 4.083-1.745 1.098 0 2.042.253 2.806.751.776.507 1.391 1.43 1.827 2.74l.053.156h5.335l-.062-.267c-.507-2.163-1.614-3.956-3.291-5.326-1.722-1.408-3.939-2.122-6.587-2.122-1.996 0-3.797.462-5.355 1.373-1.56.913-2.788 2.206-3.649 3.841-.857 1.626-1.292 3.514-1.292 5.608 0 2.098.435 3.985 1.292 5.606.858 1.626 2.085 2.91 3.647 3.815 1.555.9 3.352 1.357 5.343 1.357v-.191zm-18.67-23.207h-5.27v28.825h5.27V8.127zm-13.736 21.39c-.937 1.004-2.03 1.514-3.252 1.514-1.671 0-2.518-.686-2.518-2.045V18.757h5.929v-2.453h-5.929V9.854h-5.074v6.45H45.46v2.453h1.641v10.228c0 1.908.482 3.332 1.433 4.238.947.9 2.369 1.357 4.226 1.357 1.365 0 2.591-.309 3.64-.919 1.053-.613 1.866-1.512 2.416-2.676l.077-.162-2.442-1.526-.144.169zM33.695 30.952h5.073V8.127h-5.073v22.825zm-13.935-19.69c1.033.621 1.85 1.496 2.437 2.601.588 1.108.885 2.388.885 3.807 0 1.42-.297 2.708-.886 3.83-.589 1.124-1.403 2.003-2.42 2.617-1.016.613-2.2.925-3.517.925-1.317 0-2.505-.312-3.527-.93-1.023-.617-1.838-1.498-2.422-2.612-.586-1.12-.882-2.41-.882-3.83 0-1.42.296-2.699.882-3.807.584-1.106 1.399-1.98 2.422-2.602 1.022-.618 2.21-.932 3.527-.932 1.317 0 2.5.313 3.502.933zm-7.593-4.17C9.5 8.253 7.082 9.86 5.261 12.241c-1.823 2.384-2.745 5.197-2.745 8.366 0 3.169.92 5.98 2.734 8.348 1.812 2.366 4.233 3.97 7.199 4.772 1.564.421 3.226.506 4.95.253.44-.064.878-.147 1.313-.251l.135-.032v-5.214l-.334.097c-.338.097-.68.173-1.017.226-1.16.18-2.318.126-3.44-.16-1.718-.442-3.14-1.44-4.23-2.969-1.088-1.529-1.641-3.362-1.641-5.448 0-2.033.552-3.86 1.641-5.43 1.091-1.571 2.512-2.587 4.223-3.022 1.137-.289 2.314-.345 3.497-.166.336.05.676.125 1.012.22l.335.096V6.714l-.136-.033c-1.167-.283-2.382-.371-3.61-.262-1.15.077-2.288.29-3.384.634v.039zm-19.36 23.86h5.506V0H-7.193v30.952zm158.79-20.854c.564 0 1.039-.19 1.424-.572.385-.38.578-.843.578-1.387 0-.557-.193-1.029-.578-1.416-.385-.387-.86-.582-1.425-.582-.564 0-1.04.193-1.424.582-.385.387-.578.86-.578 1.416 0 .544.193 1.007.578 1.387.385.381.86.572 1.424.572zm2.314 20.854v-17.31h-4.629v17.31h4.629zm13.382-17.31h-4.637v17.348H158V17.09l6.957 13.863h4.693V13.642h-4.656v12.784L158.293 13.642z" fill="currentColor"/>
              </svg>
            </div>
            <div className="h-8">
              <svg viewBox="0 0 240 44" fill="none" className="h-full w-auto">
                <path d="M0 .583h34.951v5.929H6.557v12.676H30.39v5.93H6.557v18.298H0V.583zm46.272 25.578c0-10.458 7.966-18.59 19.266-18.59 11.299 0 19.265 8.132 19.265 18.59 0 10.457-7.966 18.589-19.265 18.589-11.3 0-19.266-8.132-19.266-18.59zm31.816 0c0-7.463-5.098-12.509-12.55-12.509-7.454 0-12.552 5.046-12.552 12.51 0 7.462 5.098 12.508 12.551 12.508 7.453 0 12.551-5.046 12.551-12.509zM130.75 43.416l-6.557-10.374c-3.36.919-6.217 1.086-9.997 1.086H98.935V43.416h-6.557V.583h21.818c14.488 0 22.371 7.546 22.371 16.772 0 6.595-3.67 11.976-10.56 14.613l7.742 11.448H130.75zm-10.053-15.17c9.745 0 15.663-3.794 15.663-10.89 0-7.097-5.918-10.891-15.663-10.891h-15.325v21.78h15.325zM138.35 43.416V.583h6.558v37.217h22.453v5.616H138.35zm41.272-35.033c-3.84 0-6.893-2.958-6.893-6.508 0-3.55 3.053-6.509 6.893-6.509 3.84 0 6.894 2.958 6.894 6.509 0 3.55-3.053 6.508-6.894 6.508zm-3.196 35.033V14.394h6.558v29.022h-6.558zm23.698 0V.583h6.557v42.833h-6.557zm21.565-12.425l-4.583 4.542v7.883h-6.557V.583h6.557v25.12l15.245-16.136h8.037l-13.824 14.78 14.726 19.069h-7.966l-11.635-15.42z" fill="currentColor"/>
              </svg>
            </div>
            <div className="h-11">
              <svg viewBox="0 0 80 43" fill="none" className="h-full w-auto">
                <path fillRule="evenodd" clipRule="evenodd" d="M62.64 17.95c-.14-3.436-3.138-5.7-6.395-5.7-.305 0-.612.022-.918.065-2.316.324-4.348 1.714-5.618 3.86-1.073-.152-2.178-.232-3.303-.232-1.134 0-2.24.08-3.314.233-1.27-2.147-3.294-3.537-5.615-3.86-.306-.044-.612-.066-.918-.066-3.257 0-6.256 2.264-6.394 5.7-.178 4.38 1.018 6.992 4.51 9.845 2.139 1.747 4.582 3.205 7.225 4.313l.066.027c.8.36 1.621.67 2.454.931.638.201 1.306.203 1.943 0 .834-.26 1.655-.57 2.454-.931l.066-.027c2.35-1.058 4.635-2.405 6.75-4.038.13-.1.259-.2.387-.301 3.56-2.842 4.797-5.49 4.62-9.819zm-9.79 5.788c-.882 0-1.67-.382-2.212-.991l.007-.041c.34-2.282 1.125-4.435 2.19-6.153a1.92 1.92 0 01.9.068c1.232.334 2.271 1.534 2.31 2.967.1 3.669-2.069 4.15-3.195 4.15zm-21.77-4.15c.04-1.433 1.079-2.633 2.31-2.967.308-.083.62-.09.924-.052 1.066 1.715 1.85 3.868 2.19 6.149l.006.034c-.543.615-1.335 1.002-2.225 1.002-1.125 0-3.294-.481-3.204-4.166z" fill="currentColor"/>
                <path d="M45.915 28.89a35.33 35.33 0 001.954-.777l.142-.062a39.65 39.65 0 006.614-3.583c.249-.168.495-.341.739-.518 4.324-3.052 7.195-7.021 7.195-12.33 0-6.116-4.8-10.777-11.022-10.617-3.545.091-6.686 1.794-8.566 4.446l-.075.109c-.126.172-.246.35-.36.532-.116-.181-.236-.36-.363-.534l-.074-.106c-1.88-2.653-5.021-4.356-8.566-4.447-6.222-.16-11.021 4.501-11.021 10.617 0 5.31 2.87 9.278 7.195 12.33.243.177.489.35.739.518a39.7 39.7 0 006.611 3.582l.144.063c.632.262 1.283.508 1.955.777a5.71 5.71 0 003.765 0zm-15.61-7.102a28.78 28.78 0 01-.556-.435c-3.442-2.767-5.702-5.658-5.551-10.063.204-5.864 5.108-8.836 9.8-8.7 2.882.084 5.556 1.587 7.05 3.863l.016.025c.312.452.592.957.829 1.506.154.357.485.6.865.625.38.025.735-.18.924-.523a11.65 11.65 0 01.847-1.614l.003-.006c1.493-2.262 4.167-3.765 7.05-3.849 4.691-.136 9.594 2.836 9.798 8.7.152 4.405-2.109 7.296-5.551 10.063-.184.148-.37.293-.556.435-2.313 1.698-4.787 3.134-7.429 4.246l-.012.006c-.705.294-1.432.584-2.177.824-.746.238-1.554.24-2.302 0a31.524 31.524 0 01-2.19-.83c-2.639-1.11-5.11-2.544-7.448-4.263z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About EECP Section */}
      <section id="about" className="section bg-white">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-eecp-blue/10 rounded-full">
                <span className="text-sm font-medium text-eecp-blue">What is EECP?</span>
              </div>
              <h2 className="section-title">Understanding Enhanced External Counterpulsation</h2>
              <p className="section-subtitle">
                A non-invasive treatment that improves blood flow and reduces symptoms of heart disease.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1631815579371-2d6796766634?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="EECP Treatment" 
                  className="w-full h-auto rounded-3xl shadow-lg"
                />
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={200}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-eecp-blue/10 flex items-center justify-center">
                      <HeartPulse className="h-5 w-5 text-eecp-blue" />
                    </div>
                    <h3 className="text-xl font-semibold">Non-Invasive Treatment</h3>
                  </div>
                  <p className="text-eecp-lightGray pl-13">
                    EECP is a completely non-surgical procedure that uses specialized cuffs to increase blood flow to the heart.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-eecp-blue/10 flex items-center justify-center">
                      <Activity className="h-5 w-5 text-eecp-blue" />
                    </div>
                    <h3 className="text-xl font-semibold">Improves Circulation</h3>
                  </div>
                  <p className="text-eecp-lightGray pl-13">
                    The treatment helps develop collateral circulation, creating natural bypass around narrowed or blocked arteries.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-eecp-blue/10 flex items-center justify-center">
                      <Timer className="h-5 w-5 text-eecp-blue" />
                    </div>
                    <h3 className="text-xl font-semibold">Treatment Protocol</h3>
                  </div>
                  <p className="text-eecp-lightGray pl-13">
                    Standard treatment involves 35 one-hour sessions, usually administered 5 days a week for 7 weeks.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="mt-8">
                  <Button onClick={() => document.getElementById("benefits")?.scrollIntoView()}>
                    Discover the Benefits
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={600}>
            <div className="mt-24">
              <Tabs defaultValue="how" className="w-full">
                <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-12">
                  <TabsTrigger value="how">How It Works</TabsTrigger>
                  <TabsTrigger value="process">The Process</TabsTrigger>
                  <TabsTrigger value="candidates">Ideal Candidates</TabsTrigger>
                </TabsList>
                <TabsContent value="how" className="bg-eecp-gray/30 rounded-2xl p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">How EECP Therapy Works</h3>
                      <p className="text-eecp-lightGray mb-6">
                        EECP works by applying and releasing pressure to your lower extremities in sync with your heartbeat. 
                        When your heart is at rest (diastole), the cuffs inflate, pushing blood up toward your heart. When your 
                        heart beats (systole), the cuffs rapidly deflate.
                      </p>
                      <p className="text-eecp-lightGray">
                        This counterpulsation technique increases blood flow to the heart muscle and decreases the work the heart 
                        has to do to pump blood throughout the body. Over time, this improves circulation and heart function.
                      </p>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="EECP Process" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="process" className="bg-eecp-gray/30 rounded-2xl p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">The EECP Treatment Process</h3>
                      <ol className="space-y-4 text-eecp-lightGray">
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-eecp-blue text-white flex items-center justify-center mr-3 mt-0.5">1</span>
                          <span>You'll lie on a comfortable treatment bed while compression cuffs are wrapped around your calves, thighs, and buttocks.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-eecp-blue text-white flex items-center justify-center mr-3 mt-0.5">2</span>
                          <span>ECG sensors will be attached to monitor your heart rhythm, ensuring precise synchronization with the treatment.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-eecp-blue text-white flex items-center justify-center mr-3 mt-0.5">3</span>
                          <span>During the treatment, you can relax, read, or watch TV while the system works to improve your circulation.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-eecp-blue text-white flex items-center justify-center mr-3 mt-0.5">4</span>
                          <span>Each session lasts about one hour, and a full course typically consists of 35 sessions over seven weeks.</span>
                        </li>
                      </ol>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1639493465070-75126d8b2e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="EECP Treatment Process" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="candidates" className="bg-eecp-gray/30 rounded-2xl p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Who Can Benefit from EECP</h3>
                      <p className="text-eecp-lightGray mb-6">
                        EECP is particularly beneficial for patients with:
                      </p>
                      <ul className="space-y-3 text-eecp-lightGray">
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 flex-shrink-0" />
                          <span>Chronic angina or chest pain</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 flex-shrink-0" />
                          <span>Coronary artery disease</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 flex-shrink-0" />
                          <span>Heart failure</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 flex-shrink-0" />
                          <span>Patients who are not candidates for invasive procedures</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 flex-shrink-0" />
                          <span>Those seeking alternative treatments after other interventions</span>
                        </li>
                      </ul>
                      <p className="mt-6 text-eecp-lightGray">
                        EECP may not be suitable for patients with certain conditions like severe aortic insufficiency, 
                        uncontrolled hypertension, or active thrombophlebitis.
                      </p>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1559087316-f8a88a7254f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="EECP Candidates" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section bg-eecp-gray">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-eecp-blue/10 rounded-full">
                <span className="text-sm font-medium text-eecp-blue">Benefits</span>
              </div>
              <h2 className="section-title">Why Choose EECP Therapy</h2>
              <p className="section-subtitle">
                EECP offers numerous advantages over traditional treatments for heart disease.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal>
              <Card className="bg-white/80 border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="pt-8 px-8 pb-8">
                  <div className="flex-shrink-0 mb-6 w-14 h-14 rounded-2xl bg-eecp-blue/10 flex items-center justify-center">
                    <Heart className="h-7 w-7 text-eecp-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Non-Invasive</h3>
                  <p className="text-eecp-lightGray">
                    Unlike bypass surgery or angioplasty, EECP doesn't require any incisions, anesthesia, or hospital stays.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="bg-white/80 border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="pt-8 px-8 pb-8">
                  <div className="flex-shrink-0 mb-6 w-14 h-14 rounded-2xl bg-eecp-blue/10 flex items-center justify-center">
                    <HeartPulse className="h-7 w-7 text-eecp-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Improves Blood Flow</h3>
                  <p className="text-eecp-lightGray">
                    EECP stimulates the formation of new blood vessels, creating natural bypasses around blocked arteries.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="bg-white/80 border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="pt-8 px-8 pb-8">
                  <div className="flex-shrink-0 mb-6 w-14 h-14 rounded-2xl bg-eecp-blue/10 flex items-center justify-center">
                    <Activity className="h-7 w-7 text-eecp-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Reduces Symptoms</h3>
                  <p className="text-eecp-lightGray">
                    Most patients experience significant reduction in angina episodes and improved exercise tolerance.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="bg-white/80 border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="pt-8 px-8 pb-8">
                  <div className="flex-shrink-0 mb-6 w-14 h-14 rounded-2xl bg-eecp-blue/10 flex items-center justify-center">
                    <Brain className="h-7 w-7 text-eecp-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">No Recovery Time</h3>
                  <p className="text-eecp-lightGray">
                    Patients can immediately return to their daily activities after each EECP session with no downtime.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="bg-white/80 border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="pt-8 px-8 pb-8">
                  <div className="flex-shrink-0 mb-6 w-14 h-14 rounded-2xl bg-eecp-blue/10 flex items-center justify-center">
                    <Timer className="h-7 w-7 text-eecp-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Long-Lasting Results</h3>
                  <p className="text-eecp-lightGray">
                    Many patients report continued improvement for up to three to five years after completing treatment.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <Card className="bg-white/80 border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="pt-8 px-8 pb-8">
                  <div className="flex-shrink-0 mb-6 w-14 h-14 rounded-2xl bg-eecp-blue/10 flex items-center justify-center">
                    <LineChart className="h-7 w-7 text-eecp-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">FDA Approved</h3>
                  <p className="text-eecp-lightGray">
                    EECP is an FDA-approved treatment with a proven track record for safety and efficacy.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={600}>
            <div className="mt-20">
              <div className="bg-white/80 rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is EECP covered by insurance?</AccordionTrigger>
                    <AccordionContent>
                      Yes, EECP is covered by Medicare and most private insurance plans for specific indications, 
                      particularly for chronic stable angina that hasn't responded to other treatments. Our staff 
                      will help verify your coverage before beginning treatment.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How long does each EECP session take?</AccordionTrigger>
                    <AccordionContent>
                      Each EECP session lasts approximately one hour. The standard treatment protocol involves 
                      35 sessions, typically scheduled 5 days a week for 7 weeks. The entire treatment course 
                      can be completed in less than two months.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is EECP therapy painful?</AccordionTrigger>
                    <AccordionContent>
                      No, EECP is not painful. Most patients describe the sensation as a strong hug or pressure 
                      around their legs. The treatment is generally comfortable, and many patients read, watch TV, 
                      or even nap during their sessions.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Can EECP replace heart surgery?</AccordionTrigger>
                    <AccordionContent>
                      For some patients, EECP can be an effective alternative to invasive procedures. However, 
                      this depends on your specific condition. EECP is most often used when patients are not 
                      candidates for surgery or have already had surgical interventions but continue to have symptoms.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>When will I notice results from EECP?</AccordionTrigger>
                    <AccordionContent>
                      Many patients begin to notice improvement in their symptoms within the first 15-20 sessions. 
                      However, the full benefits of EECP often continue to develop even after the treatment course 
                      is completed, with optimal results typically seen 3-6 months after finishing the 35 sessions.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Patient Stories Section */}
      <section id="testimonials" className="section bg-white">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-eecp-blue/10 rounded-full">
                <span className="text-sm font-medium text-eecp-blue">Success Stories</span>
              </div>
              <h2 className="section-title">Real Results from Real Patients</h2>
              <p className="section-subtitle">
                Hear from patients who have experienced the benefits of EECP therapy firsthand.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal>
              <Card className="glass-effect h-full">
                <CardContent className="pt-8 px-8 pb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-eecp-gray rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                        alt="Robert J." 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Robert J.</h4>
                      <p className="text-sm text-eecp-lightGray">Age 68, Former Heart Surgery Patient</p>
                    </div>
                  </div>
                  <p className="text-eecp-lightGray italic">
                    "After my bypass surgery, I still experienced angina. EECP changed everything. I can now play with my grandchildren without chest pain, and I've reduced my medication by half."
                  </p>
                  <div className="flex items-center mt-6">
                    <div className="flex text-eecp-blue">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="glass-effect h-full">
                <CardContent className="pt-8 px-8 pb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-eecp-gray rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                        alt="Sarah M." 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah M.</h4>
                      <p className="text-sm text-eecp-lightGray">Age 59, Coronary Artery Disease</p>
                    </div>
                  </div>
                  <p className="text-eecp-lightGray italic">
                    "I was hesitant about EECP at first, but I'm so glad I tried it. I used to get chest pain walking one block. Now I can walk two miles every morning. The results are truly remarkable."
                  </p>
                  <div className="flex items-center mt-6">
                    <div className="flex text-eecp-blue">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="glass-effect h-full">
                <CardContent className="pt-8 px-8 pb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-eecp-gray rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                        alt="David L." 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">David L.</h4>
                      <p className="text-sm text-eecp-lightGray">Age 72, Heart Failure Patient</p>
                    </div>
                  </div>
                  <p className="text-eecp-lightGray italic">
                    "My cardiologist recommended EECP when medication wasn't enough. After completing the treatment, my ejection fraction improved from 30% to 45%. I've gained back my energy and quality of life."
                  </p>
                  <div className="flex items-center mt-6">
                    <div className="flex text-eecp-blue">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-eecp-gray/30 rounded-3xl p-8 md:p-12">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-eecp-blue/10 rounded-full">
                  <span className="text-sm font-medium text-eecp-blue">Clinical Results</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">EECP By The Numbers</h3>
                <p className="text-eecp-lightGray mb-6">
                  Studies have shown impressive clinical outcomes for patients who complete a full course of EECP therapy:
                </p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-20 h-20 bg-eecp-blue/10 rounded-2xl flex items-center justify-center mr-6">
                      <span className="text-3xl font-bold text-eecp-blue">85%</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Reduced Angina Episodes</h4>
                      <p className="text-eecp-lightGray">Patients reporting reduction in frequency and intensity of chest pain</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-20 h-20 bg-eecp-blue/10 rounded-2xl flex items-center justify-center mr-6">
                      <span className="text-3xl font-bold text-eecp-blue">80%</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Improved Exercise Capacity</h4>
                      <p className="text-eecp-lightGray">Increase in exercise duration and stamina after treatment</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-20 h-20 bg-eecp-blue/10 rounded-2xl flex items-center justify-center mr-6">
                      <span className="text-3xl font-bold text-eecp-blue">70%</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Medication Reduction</h4>
                      <p className="text-eecp-lightGray">Patients able to reduce heart medication usage after EECP</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-eecp-blue/10 flex items-center justify-center mb-4">
                    <HeartPulse className="h-6 w-6 text-eecp-blue" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">50,000+</h4>
                  <p className="text-eecp-lightGray text-sm">Patients treated annually in the United States</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-eecp-blue/10 flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-eecp-blue" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">3+ Years</h4>
                  <p className="text-eecp-lightGray text-sm">Average duration of benefits after treatment</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-eecp-blue/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-eecp-blue" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">FDA Approved</h4>
                  <p className="text-eecp-lightGray text-sm">Since 1995 for multiple cardiac conditions</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-eecp-blue/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-eecp-blue" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">20+ Years</h4>
                  <p className="text-eecp-lightGray text-sm">Of clinical research supporting efficacy</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section bg-eecp-gray">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-eecp-blue/10 rounded-full">
                <span className="text-sm font-medium text-eecp-blue">Schedule Your Visit</span>
              </div>
              <h2 className="section-title">Book Your EECP Consultation</h2>
              <p className="section-subtitle">
                Take the first step toward improved heart health with a personalized consultation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-8">
                <div className="bg-white/80 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">What to Expect at Your First Visit</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive cardiac evaluation and medical history review</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Discussion of your symptoms and treatment goals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Explanation of how EECP works and what to expect during treatment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Overview of your personalized treatment plan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Insurance and financial considerations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/80 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Preparation for EECP Treatment</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Wear comfortable, loose-fitting clothes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Take all your regular medications as prescribed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Bring your medical records and list of current medications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Avoid heavy meals right before your appointment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Allow approximately 90 minutes for your first visit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <AppointmentForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
