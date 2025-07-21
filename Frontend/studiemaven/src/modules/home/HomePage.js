
import React from 'react';
import Header from './Header';
import HeroCarousel from './HeroCarousel';
import UniversitySlider from './UniversitySlider';
import ServicesGrid from './ServicesGrid';
import EligibilitySection from './EligibilitySection';
import LanguageCoursesSection from './LanguageCoursesSection';
import EventsSection from './EventsSection';
import GoogleReviewSection from './GoogleReviewSection';
import AssociateWithUsSection from './AssociateWithUsSection';
import NewsSection from './NewsSection';
import Footer from './Footer';
import YoutubeShowcaseSection from './YoutubeShowCaseSection';
import InstaOne from './InstaOne';
import StudentsWithVisa from './StudentsWithVisa';


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
      <StudentsWithVisa />
      <GoogleReviewSection />
      <AssociateWithUsSection />
      <YoutubeShowcaseSection />
      <InstaOne />
      <NewsSection />
      <Footer />
    </>
  );
};

export default HomePage;