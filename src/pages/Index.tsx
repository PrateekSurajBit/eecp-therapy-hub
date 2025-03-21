
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
                <path d="M150.059 16.304V13.85h-5.075v-5.947l-.178.056-4.762 1.454-.09.027v4.41h-7.494v-2.36c0-1.115.245-1.957.73-2.504.477-.537 1.185-.809 2.1-.809.647 0 1.32.13 2 .387l.168.064V6.208l-.087-.033c-.629-.237-1.459-.358-2.466-.358-1.614 0-3.062.333-4.3.989-1.242.658-2.215 1.591-2.894 2.778-.674 1.183-1.015 2.557-1.015 4.088v3.178h-3.54v2.454h3.54v16.371h5.075V18.756h7.494v10.423h5.074V18.756h5.075zm-30.35 3.882c-.974-.937-2.91-1.789-5.76-2.538-2.125-.595-3.497-1.112-4.079-1.538-.565-.414-.85-.992-.85-1.719 0-.862.345-1.541 1.059-2.084.716-.546 1.707-.822 2.942-.822 1.467 0 2.64.3 3.484.891.836.585 1.393 1.399 1.661 2.425l.079.305h5.275l-.039-.352c-.22-1.97-1.037-3.638-2.432-4.956-1.415-1.338-3.564-2.017-6.381-2.017-2.686 0-4.858.709-6.456 2.107-1.619 1.415-2.44 3.16-2.44 5.188 0 2.045.713 3.659 2.118 4.797.964.785 2.76 1.551 5.34 2.276 2.26.627 3.694 1.181 4.26 1.647.55.452.828 1.05.828 1.775 0 .91-.37 1.629-1.13 2.196-.77.573-1.822.863-3.125.863-1.476 0-2.696-.316-3.629-.942-.909-.613-1.506-1.477-1.777-2.564l-.078-.315h-5.353l.035.352c.293 2.935 1.378 4.983 3.229 6.084 1.732 1.033 3.778 1.558 6.079 1.558 2.882 0 5.206-.693 6.907-2.062 1.716-1.38 2.586-3.198 2.586-5.407 0-1.95-.633-3.498-1.883-4.598zm-29.358 11.148c2.645 0 4.824-.642 6.477-1.91 1.673-1.287 2.795-3.08 3.337-5.332l.065-.268h-5.339l-.051.152c-.448 1.336-1.07 2.27-1.85 2.777-.766.5-1.698.753-2.77.753-1.759 0-3.153-.584-4.14-1.737-.978-1.144-1.474-2.75-1.474-4.784 0-2.034.496-3.642 1.475-4.785.986-1.151 2.38-1.736 4.139-1.736 1.05 0 1.947.217 2.668.644.715.423 1.293 1.067 1.721 1.912l.057.113h5.393l-.069-.28c-.502-2.02-1.598-3.655-3.255-4.862-1.667-1.215-3.767-1.83-6.248-1.83-2.16 0-4.089.486-5.736 1.446-1.655.965-2.942 2.323-3.827 4.04-.876 1.702-1.32 3.698-1.32 5.934 0 2.212.435 4.182 1.293 5.858.866 1.693 2.107 3.01 3.687 3.915 1.584.908 3.447 1.368 5.537 1.368h-.351zm-18.064-19.94v24.038h-5.13V11.394h5.13zm-2.679-2.548c-.863 0-1.61-.295-2.222-.876-.613-.585-.925-1.315-.925-2.168 0-.843.312-1.563.925-2.142.613-.582 1.359-.877 2.222-.877.855 0 1.598.295 2.211.877.617.579.93 1.296.93 2.142 0 .858-.313 1.588-.93 2.171-.613.581-1.356.873-2.211.873zm-24.58 10.148v16.437h-5.13V18.994h-3.276v-4.106h3.275v-1.553c0-2.936.817-5.188 2.432-6.7 1.563-1.464 3.653-2.188 6.221-2.188.883 0 1.696.073 2.417.218.749.15 1.415.363 1.983.638l.113.054v4.41l-.253-.201c-.387-.308-.89-.57-1.497-.777-.59-.201-1.132-.303-1.613-.303-1.078 0-1.9.355-2.495 1.084-.612.748-.923 1.834-.923 3.229v2.09h6.548v4.105h-6.548l-.254-.001z" fill="currentColor"/>
              </svg>
            </div>
            <div className="h-8">
              <svg viewBox="0 0 171 32" fill="none" className="h-full w-auto">
                <path d="M46.622 12.413a3.28 3.28 0 01-2.466-1.06 3.662 3.662 0 01-1.017-2.622c0-1.06.339-1.92 1.017-2.622a3.28 3.28 0 012.466-1.06c.976 0 1.81.353 2.466 1.06.678.701 1.017 1.561 1.017 2.622 0 1.06-.339 1.921-1.017 2.622a3.28 3.28 0 01-2.466 1.06zm-3.078 18.04V14.912h6.197v15.54h-6.197zM65.686 30.453h-6.197v-8.868c0-1.482-.283-2.608-.85-3.379-.565-.77-1.385-1.156-2.465-1.156-1.13 0-2.023.41-2.65 1.252-.626.812-.92 1.899-.92 3.254v8.89h-6.197V14.912h6.197v2.458c.59-.881 1.394-1.568 2.432-2.032 1.037-.463 2.171-.702 3.436-.702 2.142 0 3.822.685 5.008 2.053 1.185 1.37 1.794 3.24 1.794 5.622l-.589 10.142zM68.783 14.912h6.197v15.54h-6.197v-15.54zm3.099-2.499a3.28 3.28 0 01-2.466-1.06 3.662 3.662 0 01-1.017-2.622c0-1.06.339-1.92 1.017-2.622a3.28 3.28 0 012.466-1.06c.976 0 1.81.353 2.466 1.06.678.701 1.017 1.561 1.017 2.622 0 1.06-.339 1.921-1.017 2.622a3.28 3.28 0 01-2.466 1.06zM88.45 14.484c1.921 0 3.394.755 4.394 2.287.999 1.533 1.507 3.674 1.507 6.446 0 2.73-.517 4.851-1.54 6.384-1.025 1.533-2.487 2.308-4.361 2.308-1.073 0-2.017-.22-2.827-.642-.777-.43-1.401-1.016-1.91-1.793v2.979h-6.197V8.494h6.197v8.561c.522-.743 1.147-1.329 1.91-1.75.773-.454 1.731-.665 2.827-.665v-.156zm-1.443 12.327c.66 0 1.165-.294 1.507-.9.347-.602.53-1.517.53-2.758 0-1.284-.183-2.234-.53-2.818-.342-.602-.838-.903-1.473-.903-.626 0-1.165.31-1.54.903-.347.603-.53 1.534-.53 2.818 0 1.284.183 2.205.53 2.787.375.584.892.871 1.506.871zM111.65 30.453h-6.19v-8.868c0-1.482-.28-2.608-.85-3.379-.57-.77-1.39-1.156-2.47-1.156-1.13 0-2.03.41-2.65 1.252-.63.812-.92 1.899-.92 3.254v8.89h-6.196V14.912h6.196v2.458c.59-.881 1.39-1.568 2.43-2.032 1.04-.463 2.17-.702 3.44-.702 2.14 0 3.82.685 5.01 2.053 1.18 1.37 1.79 3.24 1.79 5.622l-.59 10.142zM132.28 22.683c0 2.584-.77 4.617-2.31 6.096-1.56 1.48-3.7 2.22-6.43 2.22-2.7 0-4.84-.74-6.4-2.22-1.56-1.479-2.33-3.512-2.33-6.096 0-2.584.77-4.626 2.33-6.105 1.56-1.48 3.71-2.22 6.4-2.22 2.73 0 4.87.74 6.43 2.22 1.54 1.479 2.31 3.521 2.31 6.105zm-6.16 0c0-1.284-.22-2.264-.66-2.944-.45-.685-1.16-1.034-2.1-1.034-.94 0-1.64.341-2.09 1.016-.45.676-.68 1.66-.68 2.962 0 1.284.23 2.282.68 2.962.45.68 1.15 1.016 2.09 1.016.94 0 1.65-.337 2.1-1.016.44-.68.66-1.678.66-2.962zM144.59 30.453h-6.2V8.493h6.2v21.96zM162.14 22.683c0 2.584-.77 4.617-2.3 6.096-1.56 1.48-3.7 2.22-6.43 2.22-2.7 0-4.84-.74-6.4-2.22-1.55-1.479-2.32-3.512-2.32-6.096 0-2.584.77-4.626 2.32-6.105 1.56-1.48 3.71-2.22 6.4-2.22 2.73 0 4.87.74 6.43 2.22 1.53 1.479 2.3 3.521 2.3 6.105zm-6.15 0c0-1.284-.22-2.264-.66-2.944-.45-.685-1.16-1.034-2.1-1.034-.94 0-1.63.341-2.09 1.016-.45.676-.68 1.66-.68 2.962 0 1.284.23 2.282.68 2.962.46.68 1.15 1.016 2.09 1.016.94 0 1.65-.337 2.1-1.016.44-.68.66-1.678.66-2.962zM169.59 13.6c-1.6 0-2.4-.783-2.4-2.345 0-1.523.8-2.293 2.4-2.293 1.6 0 2.41.766 2.41 2.292 0 1.558-.8 2.345-2.41 2.345zm-3.1 1.293h6.22v15.56h-6.22v-15.56z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M20.21 1.205a10.493 10.493 0 017.434 3.08A10.575 10.575 0 0130.71 11.75a10.566 10.566 0 01-8.159 10.3 10.554 10.554 0 00-5.73-8.725 10.481 10.481 0 00-10.312 0 10.553 10.553 0 00-5.728 8.726A10.567 10.567 0 01.656 11.75a10.575 10.575 0 013.07-7.466 10.494 10.494 0 017.435-3.08h9.048zm-5.162 23.856a10.506 10.506 0 015.162-1.277c1.764.004 3.5.444 5.051 1.277a10.548 10.548 0 015.742 8.71 10.523 10.523 0 01-7.432 3.025H10.704a10.523 10.523 0 01-7.43-3.025 10.549 10.549 0 015.742-8.71h6.032z" fill="currentColor"></path>
              </svg>
            </div>
            <div className="h-8">
              <svg viewBox="0 0 150 29" fill="none" className="h-full w-auto">
                <path d="M58.923 28.556V.555h20.985v4.89H64.313v6.882h15.288v4.89H64.313v11.339h-5.39zm31.288-28.001h5.39v23.112h14.677v4.889H90.211V.555zm31.288 0h5.39v23.112h14.676v4.889h-20.066V.555zm-82.573 0h6.272l14.981 19.596V.555h5.39v28.001h-6.273L74.313 8.959v19.597h-5.39V.555zM33.079 14.557v-.001c0 7.974-6.463 14.443-14.43 14.443S4.218 22.53 4.218 14.556v-.001C4.218 6.582 10.682.112 18.65.112c7.966 0 14.43 6.47 14.43 14.444zm-4.219 0v-.001c0-5.757-4.459-10.445-10.21-10.445-5.753 0-10.212 4.687-10.212 10.444v.001c0 5.758 4.46 10.445 10.211 10.445 5.752 0 10.211-4.687 10.211-10.444z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About EECP Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Enhanced External Counterpulsation?</h2>
            <p className="text-lg text-eecp-lightGray">
              EECP is a non-invasive treatment that improves blood flow to the heart and body, offering a safe alternative to invasive procedures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollReveal>
              <Card className="border-none shadow-lg h-full fade-up">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-eecp-blue/10 rounded-full flex items-center justify-center mb-6">
                    <HeartPulse className="w-8 h-8 text-eecp-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Non-Invasive Treatment</h3>
                  <p className="text-eecp-lightGray">
                    EECP therapy provides a non-surgical treatment option for patients with heart conditions without the risks and recovery time of invasive procedures.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <Card className="border-none shadow-lg h-full fade-up">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-eecp-blue/10 rounded-full flex items-center justify-center mb-6">
                    <Activity className="w-8 h-8 text-eecp-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Improves Blood Flow</h3>
                  <p className="text-eecp-lightGray">
                    By enhancing circulation and promoting the development of collateral blood vessels, EECP helps deliver more oxygen to heart tissues.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <Card className="border-none shadow-lg h-full fade-up">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-eecp-blue/10 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-eecp-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">FDA Approved</h3>
                  <p className="text-eecp-lightGray">
                    EECP is FDA-approved for the treatment of coronary artery disease, angina, heart failure, and has shown benefits for other conditions.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-b from-eecp-gray/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of EECP Therapy</h2>
            <p className="text-lg text-eecp-lightGray">
              EECP provides multiple health benefits beyond just treating heart conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <ScrollReveal>
              <div className="p-6 bg-white rounded-2xl shadow-md h-full fade-up">
                <div className="w-12 h-12 bg-eecp-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-eecp-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Reduced Chest Pain</h3>
                <p className="text-eecp-lightGray">
                  Over 80% of patients report significant reduction in angina frequency and intensity after treatment.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="p-6 bg-white rounded-2xl shadow-md h-full fade-up">
                <div className="w-12 h-12 bg-eecp-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-eecp-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Increased Energy</h3>
                <p className="text-eecp-lightGray">
                  Patients experience improved stamina and energy levels as circulation improves throughout the body.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="p-6 bg-white rounded-2xl shadow-md h-full fade-up">
                <div className="w-12 h-12 bg-eecp-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-eecp-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cognitive Benefits</h3>
                <p className="text-eecp-lightGray">
                  Improved blood flow to the brain may enhance cognitive function and mental clarity.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="p-6 bg-white rounded-2xl shadow-md h-full fade-up">
                <div className="w-12 h-12 bg-eecp-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Timer className="w-6 h-6 text-eecp-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Long-lasting Results</h3>
                <p className="text-eecp-lightGray">
                  Most patients maintain improvements for years after completing the standard treatment protocol.
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center fade-up">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1789&q=80" 
                  alt="Patient receiving EECP treatment" 
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Why Patients Choose EECP</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                    <p>Non-invasive alternative to surgical procedures like bypass or stenting</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                    <p>No downtime or recovery period needed after sessions</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                    <p>Cumulative benefits with each session for lasting results</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                    <p>Complementary to existing medications and treatments</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                    <p>Covered by many insurance plans, including Medicare</p>
                  </div>
                </div>
                <Button 
                  onClick={() => document.getElementById("booking")?.scrollIntoView()}
                  className="mt-4"
                >
                  Schedule Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Treatment Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The EECP Treatment Process</h2>
            <p className="text-lg text-eecp-lightGray">
              Understanding what to expect during your EECP therapy sessions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <ScrollReveal>
              <div className="relative pl-8 border-l-2 border-eecp-blue/20 fade-up">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-eecp-blue text-white rounded-full flex items-center justify-center">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Initial Assessment</h3>
                <p className="text-eecp-lightGray mb-4">
                  Our cardiologists will conduct a thorough evaluation to determine if EECP is right for you and create a personalized treatment plan.
                </p>
                <p className="text-sm text-eecp-lightGray italic">
                  Duration: 60 minutes
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="relative pl-8 border-l-2 border-eecp-blue/20 fade-up">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-eecp-blue text-white rounded-full flex items-center justify-center">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Treatment Sessions</h3>
                <p className="text-eecp-lightGray mb-4">
                  You'll lie comfortably on a treatment bed with pressure cuffs wrapped around your legs. The system will synchronize with your heartbeat to optimize blood flow.
                </p>
                <p className="text-sm text-eecp-lightGray italic">
                  Duration: 1 hour per session, 35 sessions total
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="relative pl-8 border-l-2 border-eecp-blue/20 fade-up">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-eecp-blue text-white rounded-full flex items-center justify-center">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Follow-up Care</h3>
                <p className="text-eecp-lightGray mb-4">
                  After completing your treatment course, we'll monitor your progress and provide guidance on maintaining your improved cardiovascular health.
                </p>
                <p className="text-sm text-eecp-lightGray italic">
                  Ongoing support for lasting results
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal>
            <div className="bg-eecp-blue/5 rounded-2xl p-8 mb-12 fade-up">
              <h3 className="text-2xl font-semibold mb-6 text-center">What to Expect During Treatment</h3>
              
              <Tabs defaultValue="preparation" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="preparation">Preparation</TabsTrigger>
                  <TabsTrigger value="during">During Session</TabsTrigger>
                  <TabsTrigger value="after">After Treatment</TabsTrigger>
                </TabsList>
                <TabsContent value="preparation" className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <p>Wear comfortable clothing, preferably loose-fitting pants or shorts</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <p>Eat a light meal before your session</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <p>Continue taking your regular medications unless advised otherwise</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <p>Arrive 15 minutes early for your first session</p>
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="during" className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <p>You'll lie comfortably on a treatment bed</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <p>Pressure cuffs will be wrapped around your calves, thighs, and buttocks</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <p>ECG leads will monitor your heart rhythm</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <p>You may read, watch TV, or even nap during the treatment</p>
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="after" className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <p>You can immediately return to normal activities</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <p>Stay well-hydrated after each session</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <p>Report any unusual symptoms to your healthcare provider</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-eecp-blue mr-3 mt-0.5 flex-shrink-0" />
                      <p>Many patients notice gradual improvement as sessions progress</p>
                    </li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Results/Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-eecp-gray/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Patient Success Stories</h2>
            <p className="text-lg text-eecp-lightGray">
              Real results from real patients who have experienced the benefits of EECP therapy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal>
              <Card className="border-none shadow-lg h-full fade-up">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    <Heart className="text-eecp-blue fill-eecp-blue h-5 w-5" />
                    <Heart className="text-eecp-blue fill-eecp-blue h-5 w-5" />
                    <Heart className="text-eecp-blue fill-eecp-blue h-5 w-5" />
                    <Heart className="text-eecp-blue fill-eecp-blue h-5 w-5" />
                    <Heart className="text-eecp-blue fill-eecp-blue h-5 w-5" />
                  </div>
                  <blockquote className="text-eecp-lightGray mb-6">
                    "After my third heart attack, I was told I wasn't a candidate for another stent. EECP has been life-changing—I'm back to walking 2 miles daily without chest pain."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-eecp-blue/10 rounded-full flex items-center justify-center mr-4">
                      <span className="font-semibold text-eecp-blue">RM</span>
                    </div>
                    <div>
                      <p className="font-medium">Robert M.</p>
                      <p className="text-sm text-eecp-lightGray">Age 68, Heart Disease</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <Card className="border-none shadow-lg h-full fade-up">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    <Heart className="text-eecp-blue fill-eecp-blue h-5 w-5" />
                    <Heart className="text-eecp-blue fill-eecp-blue h-5 w-5" />
                    <Heart className="text-eecp-blue fill-eecp-blue h-5 w-5" />
                    <Heart className="text-eecp-blue fill-eecp-blue h-5 w-5" />
                    <Heart className="text-eecp-blue fill-eecp-blue h-5 w-5" />
                  </div>
                  <blockquote className="text-eecp-lightGray mb-6">
                    "I was skeptical at first, but by the 15th session, I noticed a significant difference in my energy levels and chest pain. Now I can play with my grandchildren without limitations."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-eecp-blue/10 rounded-full flex items-center justify-center mr-4">
                      <span className="font-semibold text-eecp-blue">SJ</span>
                    </div>
                    <div>
                      <p className="font-medium">Susan J.</p>
                      <p className="text-sm text-eecp-lightGray">Age 59, Angina</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <Card className="border-none shadow-lg h-full fade-up">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    <Heart className="text-eecp-blue fill-eecp-blue h-5 w-5" />
                    <Heart className="text-eecp-blue fill-eecp-blue h-5 w-5" />
                    <Heart className="text-eecp-blue fill-eecp-blue h-5 w-5" />
                    <Heart className="text-eecp-blue fill-eecp-blue h-5 w-5" />
                    <Heart className="text-eecp-blue fill-eecp-blue h-5 w-5" />
                  </div>
                  <blockquote className="text-eecp-lightGray mb-6">
                    "As a physician myself, I was impressed by the research behind EECP. After completing the treatment protocol, my ejection fraction improved from 32% to 45%. The results speak for themselves."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-eecp-blue/10 rounded-full flex items-center justify-center mr-4">
                      <span className="font-semibold text-eecp-blue">DT</span>
                    </div>
                    <div>
                      <p className="font-medium">Dr. Thomas L.</p>
                      <p className="text-sm text-eecp-lightGray">Age 62, Heart Failure</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
          
          <ScrollReveal>
            <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg fade-up">
              <h3 className="text-2xl font-semibold mb-8 text-center">Common Questions About Results</h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>When will I start feeling results?</AccordionTrigger>
                  <AccordionContent>
                    Most patients begin to notice improvements between the 15th and 20th session, though this varies by individual. Some patients experience benefits sooner, while others may take longer. The full benefits of EECP therapy are typically realized after completing the full 35-session protocol.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How long do the results last?</AccordionTrigger>
                  <AccordionContent>
                    Clinical studies show that the benefits of EECP therapy can last from 3 to 5 years after a full course of treatment. Many patients maintain their improvements with healthy lifestyle choices. Some patients benefit from periodic "maintenance" sessions to extend the beneficial effects.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What improvements can I expect?</AccordionTrigger>
                  <AccordionContent>
                    Patients commonly report reduced chest pain (angina), increased energy levels, improved exercise capacity, reduced need for nitroglycerin, better sleep quality, and an overall improved quality of life. Many patients also experience improvements in measurable clinical markers such as ejection fraction and perfusion.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is EECP covered by insurance?</AccordionTrigger>
                  <AccordionContent>
                    Yes, EECP therapy is covered by Medicare and many private insurance plans for specific diagnoses, including angina and heart failure. Our staff will work with you to verify your coverage and assist with any necessary paperwork or prior authorizations.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 -right-40 w-96 h-96 rounded-full bg-eecp-blue/5 blur-3xl"></div>
          <div className="absolute bottom-20 -left-20 w-72 h-72 rounded-full bg-eecp-blue/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div className="fade-up">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your EECP Journey Today</h2>
                  <p className="text-lg text-eecp-lightGray mb-8">
                    Our experienced medical team is ready to help you improve your heart health with personalized EECP therapy. Schedule your consultation now.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-eecp-blue/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <CheckCircle className="w-5 h-5 text-eecp-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Comprehensive Evaluation</h3>
                        <p className="text-eecp-lightGray">
                          Our cardiologists will assess your condition to determine if EECP is right for you
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-eecp-blue/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <CheckCircle className="w-5 h-5 text-eecp-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Personalized Treatment Plan</h3>
                        <p className="text-eecp-lightGray">
                          We'll create a customized EECP protocol based on your specific needs
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-eecp-blue/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <CheckCircle className="w-5 h-5 text-eecp-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Comfortable Treatment Environment</h3>
                        <p className="text-eecp-lightGray">
                          Relax in our state-of-the-art facility while receiving your therapy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div className="fade-up">
                  <AppointmentForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
