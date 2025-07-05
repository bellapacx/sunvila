// app/page.tsx
import HeroSection from './components/sections/HeroSection';
import ProblemSolution from './components/sections/ProblemSolution';
import SunvilaPillars from './components/sections/SunvilaPillars';
import TokenStats from './components/sections/TokenStats';
import Roadmap from './components/sections/Roadmap';
import CallToAction from './components/sections/CallToAction';

export default function Home() {
  return (
    <>
      <HeroSection />
       <TokenStats />
       <ProblemSolution />
       <SunvilaPillars />
       <Roadmap />
        <CallToAction />
    {/* 
     
      
      
      
     
      */}
    </>
  );
}
