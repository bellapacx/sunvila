// app/page.tsx
import Roadmap from './components/sections/Roadmap';
import CallToAction from './components/sections/CallToAction';
import Hero from './components/sections/Hero';
import ProblemWithRemittances from './components/sections/ProblemWithRemittances';
import GdhrpSolution from './components/sections/GdhrpSolution';
import GDHRPModel from './components/sections/GDHRPModel';
import GDHRPkeyfeatures from './components/sections/GDHRPkeyfeatures';
import BenefitsByStakeholder from './components/sections/BenefitsbyStakeholder';
import InvestmentWorkflow from './components/sections/InvestmentWorkflow';
import GlobalRollout from './components/sections/GlobalRollout';
import Tokenomics from './components/sections/tokenomics';

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemWithRemittances />
      <GdhrpSolution />
      <GlobalRollout />
      <GDHRPModel />
      <GDHRPkeyfeatures />
      <BenefitsByStakeholder />
      <InvestmentWorkflow />
      <Tokenomics />
      <Roadmap />
      <CallToAction />
    {/* 
     
      <HeroSection />
       <TokenStats />
       <ProblemSolution />
       <SunvilaPillars />
       <Roadmap />
        <CallToAction />
      
      
     
      */}
    </>
  );
}
