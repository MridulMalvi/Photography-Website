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
      setError('Please enter a valid phone number');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-gray-900Ql border border-gray-700 bg-gray-900 p-8 rounded-2xl w-full max-w-md relative shadow-2xl transition-all transform scale-100 opacity-100">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-500">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">Verify Identity</h2>
          <p className="text-gray-400 text-sm mt-2">To secure your booking, please verify your mobile number.</p>
        </div>

        {step === 'phone' ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Phone Number</label>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(+91) 98765 43210"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none"
              />
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-600 text-white font-bold py-3 rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" /> : 'Send OTP'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            {fetchingOtp ? (
              <p className="text-center text-gray-300 mb-4">🔄 Fetching OTP...</p>
            ) : (
              generatedOtp && (
                <p className="text-center text-gray-300 mb-4">
                  ✅ Your OTP is: <span className="text-yellow-500 font-bold">{generatedOtp}</span>
                </p>
              )
            )}

            <div>
              <label className="block text-sm text-gray-300 mb-1">Enter OTP</label>
              <input 
                type="text" 
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="XXXX"
                maxLength={4}
                disabled={fetchingOtp}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none text-center tracking-[1em] font-bold"
              />
            </div>

            {error && <p className="text-red-500 text-xs text-center">{error}</p>}
            <button 
              type="submit"
              disabled={loading || fetchingOtp}
              className="w-full bg-yellow-600 text-white font-bold py-3 rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" /> : 'Verify & Continue'}
            </button>

            <button 
              type="button"
              onClick={() => {
                setStep('phone');
                setGeneratedOtp(null);
                setOtp('');
                setError('');
              }}
              className="w-full text-gray-400 text-sm hover:text-white"
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