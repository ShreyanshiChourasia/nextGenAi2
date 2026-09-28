import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaStar, FaCrown } from 'react-icons/fa';

function Pricing() {
  const navigate = useNavigate();
  
  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      credits: 100,
      description: 'Perfect for beginners starting interview preparation.',
      features: [
        '100 AI Interview Credits',
        'Basic Performance Report',
        'Voice Interview Access',
        'Limited History Tracking',
      ],
      default: true,
    },
    {
      id: 'basic',
      name: 'Starter Pack',
      price: 199,
      credits: 300,
      description: 'Great for focused practice and skill improvement.',
      features: [
        '300 AI Interview Credits',
        'Detailed Feedback',
        'Performance Analytics',
        'Full Interview History',
      ],
    },
    {
      id: 'pro',
      name: 'Pro Pack',
      price: 499,
      credits: 750,
      description: 'Best value for serious job preparation.',
      features: [
        '750 AI Interview Credits',
        'Advanced AI Feedback',
        'Skill Trend Analysis',
        'Priority AI Processing',
      ],
      badge: 'Best Value',
    },
  ];

  const handleBuy = (planId) => {
    if (planId === 'free') {
      alert('Free plan activated! You have 100 credits.');
      navigate('/dashboard');
    } else {
      // This is where you integrate Razorpay
      alert(`Redirecting to Razorpay for ${planId} plan...`);
      // razorpayIntegration(planId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
          >
            <FaArrowLeft className="text-gray-600" />
            <span>Back to Dashboard</span>
          </button>

          <div className="text-center mt-8">
            <h1 className="text-4xl font-bold text-gray-800">
              Interview Coins
            </h1>
            <p className="text-gray-500 mt-2">
              Use coins for Resume Scoring, Resume Builder, AI Interviews, and Roadmap Generation.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 ${
                plan.badge ? 'border-2 border-emerald-500' : ''
              }`}
            >
              {plan.badge && (
                <div className="bg-emerald-500 text-white text-center text-sm py-2 font-medium flex items-center justify-center gap-2">
                  <FaStar /> {plan.badge}
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h2 className="text-2xl font-bold text-gray-800">
                  {plan.name}
                </h2>

                {/* Price */}
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price === 0 ? 'Free' : `₹${plan.price}`}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-sm text-gray-500 ml-1">/lifetime</span>
                  )}
                </div>

                {/* Credits */}
                <div className="mt-4 flex items-center gap-2">
                  <FaCrown className="text-yellow-500" />
                  <span className="font-medium text-gray-700">
                    {plan.credits} Interview Credits
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-500">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={() => handleBuy(plan.id)}
                  className={`mt-8 w-full py-3 rounded-lg font-medium transition ${
                    plan.id === 'free'
                      ? 'bg-gray-600 text-white hover:bg-gray-700'
                      : plan.id === 'basic'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  {plan.id === 'free' ? 'Claim Free Credits' : 'Buy Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;