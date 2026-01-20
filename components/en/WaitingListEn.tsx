'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle, Loader2, Mail, User, Briefcase, Phone } from 'lucide-react';

export function WaitingListEn() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', businessType: '' });
      } else {
        setError(data.error || 'An error occurred, please try again');
      }
    } catch (err) {
      setError('Connection error, please check your internet connection');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="waiting-list" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Successfully Registered! 🎉
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Thank you for joining the Express waiting list. We'll contact you soon with launch details and exclusive offers.
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              variant="outline"
              size="lg"
              className="text-lg"
            >
              Register Another Company
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="waiting-list" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Join Now</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              Be Among the First Users
            </h2>
            <p className="text-xl text-blue-100">
              Register on the waiting list and get an exclusive 40% discount offer
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700 font-medium flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 text-lg"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 text-lg"
                  dir="ltr"
                />
              </div>

              {/* Phone Field - NEW */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-700 font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+971 50 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 text-lg"
                  dir="ltr"
                />
              </div>

              {/* Business Type */}
              <div className="space-y-2">
                <Label htmlFor="businessType" className="text-slate-700 font-medium flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Business Type
                </Label>
                <Select
                  value={formData.businessType}
                  onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                  required
                >
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scaffolding">Scaffolding Rental</SelectItem>
                    <SelectItem value="heavy-equipment">Heavy Equipment Rental</SelectItem>
                    <SelectItem value="trailers">Trailer Rental</SelectItem>
                    <SelectItem value="cars">Car Rental</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600 text-sm">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Join Waiting List'
                )}
              </Button>

              {/* Privacy Note */}
              <p className="text-xs text-slate-500 text-center">
                Your data is protected and will not be shared with any third parties. We'll only use it to contact you about Express.
              </p>
            </form>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 grid grid-cols-3 gap-6 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-amber-400">500+</div>
              <div className="text-sm text-blue-200 mt-1">Companies Waiting</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">40%</div>
              <div className="text-sm text-blue-200 mt-1">Early Bird Discount</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">24/7</div>
              <div className="text-sm text-blue-200 mt-1">Technical Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
