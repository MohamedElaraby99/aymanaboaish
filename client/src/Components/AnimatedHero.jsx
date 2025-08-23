import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaPlay, FaStar, FaUsers, FaGraduationCap, FaAward, FaRocket, FaGlobe, FaLightbulb, FaGraduationCap as FaGrad, FaBookOpen, FaChalkboardTeacher, FaMicroscope, FaFlask, FaLeaf, FaBrain, FaDna } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';

const AnimatedHero = ({ onGetStarted }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate('/courses');
    } else {
      onGetStarted();
    }
  };

  const buttonText = isLoggedIn ? 'ابدأ التعلم الآن' : 'سجل الآن';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-900 via-orange-800 to-gray-900 dark:from-gray-900 dark:via-orange-900 dark:to-orange-800" dir="rtl">
      {/* Static Background Elements */}
      <div className="absolute inset-0">
        {/* Static Background Shape */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px]">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-orange-300/15 to-transparent rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-orange-400/10 to-transparent rounded-full"></div>
        </div>
        
        {/* Static Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-orange-400/30 to-yellow-400/30 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 md:w-36 md:h-36 bg-gradient-to-r from-orange-300/25 to-red-400/25 rounded-full mix-blend-multiply filter blur-lg"></div>
        
        {/* Static Microscopic Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 165, 0, 0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <div className="opacity-100 scale-100">
            {/* Large Logo Section */}
            <div className="mb-12">
              <div className="relative inline-block">
                {/* Logo Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 rounded-full blur-3xl opacity-40 scale-150"></div>
                
                {/* Logo Container with Enhanced Styling */}
                <div className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 rounded-full p-8 md:p-12 lg:p-16 shadow-2xl border-4 border-orange-300/50">
                  {/* Inner Glow Ring */}
                  <div className="absolute inset-2 bg-gradient-to-r from-orange-300/20 via-yellow-300/20 to-orange-300/20 rounded-full"></div>
                  
                  {/* Logo Image */}
                  <img
                    src={logo}
                    alt="الاستاذ ايمن ابوعيش - معلم الأحياء"
                    className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 object-contain drop-shadow-2xl relative z-10"
                  />
                </div>
                
                {/* Static Biology Icons Around Logo */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-300/50">
                  <FaMicroscope className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-orange-300/50">
                  <FaFlask className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg border-2 border-green-300/50">
                  <FaLeaf className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-purple-300/50">
                  <FaBrain className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-300 bg-clip-text text-transparent">
                الاستاذ ايمن ابوعيش
              </span>
            </h1>

            {/* Subtitle */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-orange-100 font-semibold mb-4">
                معلم الأحياء ومُعد ومراجع كتاب التفوق حالياً
              </h2>
              <div className="flex items-center justify-center gap-4 text-xl md:text-2xl text-orange-200">
                <FaAward className="text-yellow-400" />
                <span> والوسام سابقاً</span>
                <FaAward className="text-yellow-400" />
              </div>
            </div>

            {/* Credentials Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-orange-600/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-400/50">
                <FaChalkboardTeacher className="text-orange-200" />
                <span className="text-orange-100 font-medium">معلم الأحياء</span>
              </div>
              <div className="flex items-center gap-2 bg-yellow-600/80 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/50">
                <FaBookOpen className="text-yellow-200" />
                <span className="text-yellow-100 font-medium">مُعد كتاب التفوق</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-700/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500/50">
                <FaAward className="text-orange-200" />
                <span className="text-orange-100 font-medium">مراجع معتمد</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto">
          <div className="opacity-100 translate-y-0">
         
            {/* Description */}
            <div className="text-center mb-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>
                <p className="relative text-lg md:text-xl lg:text-2xl text-orange-50 leading-relaxed max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-orange-800/90 via-orange-700/90 to-orange-800/90 backdrop-blur-sm border border-orange-400/30 shadow-2xl">
                  اكتشف عالم الأحياء المذهل مع خبير متخصص في تدريس العلوم. تعلم من خلال منهجية مبتكرة ومحتوى علمي دقيق مصمم لتحقيق التفوق الأكاديمي.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mb-8">
              <button 
                onClick={handleButtonClick}
                className="group relative px-12 py-6 md:px-16 md:py-8 font-bold rounded-full text-xl md:text-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 text-white hover:shadow-orange-500/50 hover:from-orange-600 hover:via-orange-700 hover:to-yellow-600 border-2 border-orange-400/50"
              >
                <span className="relative flex items-center gap-4 justify-center">
                  {buttonText}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero; 