import Button from '../ui/Button';
import { ArrowsRightLeftIcon, CurrencyDollarIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-green-900 via-emerald-700 to-green-700 py-20 px-6 text-white text-center relative overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 max-w-4xl mx-auto drop-shadow-lg">
        Reconnecting Diaspora. Empowering Families. Building the Future.
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        <Button
          href="#swap"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 shadow-lg"
          ariaLabel="Swap Remittance Now"
        >
          <ArrowsRightLeftIcon className="w-5 h-5" />
          Swap Remittance Now
        </Button>

        <Button
          href="#marketplace"
          variant="outline"
          className="flex items-center gap-2 border-green-300 text-white hover:bg-green-800"
          ariaLabel="View Marketplace Projects"
        >
          <CurrencyDollarIcon className="w-5 h-5" />
          View Marketplace Projects
        </Button>

        <Button
          href="#pilot"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 shadow-lg"
          ariaLabel="Become a Pilot Partner"
        >
          <UsersIcon className="w-5 h-5" />
          Become a Pilot Partner
        </Button>
      </div>

      {/* Decorative rotating icons */}
      <div className="pointer-events-none absolute top-10 left-10 animate-spin-slow text-green-700 opacity-30">
        <UsersIcon className="w-24 h-24" />
      </div>
      <div className="pointer-events-none absolute bottom-10 right-10 animate-spin-slow-reverse text-green-600 opacity-30">
        <CurrencyDollarIcon className="w-24 h-24" />
      </div>
    </section>
  );
}
