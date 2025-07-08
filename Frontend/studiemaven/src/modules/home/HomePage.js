
import React from 'react';
import Header from './Header';
import HeroCarousel from './HeroCarousel';
import UniversitySlider from './UniversitySlider';
import ServicesGrid from './ServicesGrid';
import EligibilitySection from './EligibilitySection';
import LanguageCoursesSection from './LanguageCoursesSection';
import EventsSection from './EventsSection';
import StudentTestimonialsSection from './StudentTestimonialsSection';
import AssociateWithUsSection from './AssociateWithUsSection';
import NewsSection from './NewsSection';
import InstagramStoriesSection from './InstagramStoriesSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroCarousel />
      <UniversitySlider />
      <ServicesGrid />
      <EligibilitySection />
      <LanguageCoursesSection />
      <EventsSection />
      <StudentTestimonialsSection />
      <InstagramStoriesSection />
      <AssociateWithUsSection />
      <NewsSection />
      <Footer />
    </>
  );
};

export default HomePage;