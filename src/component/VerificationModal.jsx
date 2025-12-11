import React, { useState } from 'react';
import { X, ShieldCheck, Loader2 } from 'lucide-react';

const VerificationModal = ({ onClose, onVerify, initialPhone }) => {
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState(initialPhone || '');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // New states for random OTP logic
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [fetchingOtp, setFetchingOtp] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    // Basic validation for phone length
    if (phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    setLoading(true);
    setError('');

    // Simulate API sending delay
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
      setFetchingOtp(true);

      const otpArray = [
        2849, 4954, 9454, 7321, 1184,
        5602, 8891, 2240, 9902, 4123
      ];

      const randomIndex = Math.floor(Math.random() * otpArray.length);
      const selectedOtp = otpArray[randomIndex];

      // Simulate network fetch: 5 seconds fetching, then reveal OTP
      setTimeout(() => {
        setGeneratedOtp(String(selectedOtp).padStart(4, '0'));
        setFetchingOtp(false);
      }, 5000);
    }, 1500);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      setLoading(false);

      if (!generatedOtp) {
        setError('OTP not generated yet. Please wait.');
        return;
      }

      if (otp === generatedOtp) {
        // Pass phone back to parent when verified
        onVerify(phone);
      } else {
        setError(`Invalid OTP. Try again.`);
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Modal Container: Changed to a light theme (bg-white) with amber border */}
      <div className="bg-white border border-amber-300 p-8 rounded-2xl w-full max-w-md relative shadow-2xl transition-all transform scale-100 opacity-100">
        
        {/* Close Button: Changed color to fit the light theme */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-amber-500 hover:text-amber-700 transition"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          {/* Icon Area: Changed background and icon color */}
          <div className="w-16 h-16 bg-amber-100/70 border border-amber-300 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
            <ShieldCheck size={32} />
          </div>
          {/* Title: Changed text color to darker amber */}
          <h2 className="text-2xl font-serif font-bold text-amber-900">Verify Identity</h2>
          {/* Subtext: Changed text color */}
          <p className="text-amber-700 text-sm mt-2">To secure your booking, please verify your mobile number.</p>
        </div>

        {step === 'phone' ? (
          <form onSubmit={handleSendOtp} className="space-y-6">
            <div>
              {/* Label: Changed text color */}
              <label className="block text-sm font-semibold text-amber-800 mb-1">Phone Number</label>
              {/* Input: Changed background, border, and text color */}
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(+91) 98765 43210"
                className="w-full bg-amber-50 border border-amber-300 rounded-lg px-4 py-3 text-amber-900 placeholder:text-amber-500 focus:border-amber-600 focus:outline-none"
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            
            {/* Button: Changed background and hover color */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-amber-600 text-white font-bold py-3 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : 'Send OTP'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            {fetchingOtp ? (
              <p className="text-center text-amber-700 mb-4 flex items-center justify-center gap-2">
                <Loader2 className="animate-spin text-amber-600" size={20} /> Sending OTP...
              </p>
            ) : (
              generatedOtp && (
                <p className="text-center text-amber-800 mb-4">
                   Your OTP is: <span className="text-amber-600 font-extrabold text-lg tracking-wider">{generatedOtp}</span>
                </p>
              )
            )}

            <div>
              {/* Label: Changed text color */}
              <label className="block text-sm font-semibold text-amber-800 mb-1">Enter OTP</label>
              {/* OTP Input: Changed background, border, and text color/style */}
              <input 
                type="text" 
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="XXXX"
                maxLength={4}
                disabled={fetchingOtp}
                className="w-full bg-amber-50 border border-amber-300 rounded-lg px-4 py-3 text-amber-900 focus:border-amber-600 focus:outline-none text-center text-xl tracking-[0.5em] font-extrabold"
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            
            {/* Button: Changed background and hover color */}
            <button 
              type="submit"
              disabled={loading || fetchingOtp}
              className="w-full bg-amber-600 text-white font-bold py-3 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : 'Verify & Continue'}
            </button>

            {/* Back Button: Changed text color */}
            <button 
              type="button"
              onClick={() => {
                setStep('phone');
                setGeneratedOtp(null);
                setOtp('');
                setError('');
              }}
              className="w-full text-amber-600 text-sm hover:text-amber-800 mt-4 transition"
            >
              Back to Phone Number
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default VerificationModal;