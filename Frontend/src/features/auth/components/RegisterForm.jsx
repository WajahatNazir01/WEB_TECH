import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Card from '../../../components/ui/Card';
import { validateRegisterForm } from '../utils/validation';

const RegisterForm = () => {
  const { register, loading } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateRegisterForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit form
    await register(formData);
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', password: '' });
    setErrors({});
  };

  return (
    <Card className="w-full max-w-md">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Create Account
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Enter your full name"
          required
        />
        
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter your email"
          required
        />
        
        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Enter your password"
          required
        />
        
        <div className="flex gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            className="flex-1 bg-white bg-opacity-20 text-white border-white hover:bg-white hover:text-indigo-600"
          >
            Cancel
          </Button>
          
          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            className="flex-1"
          >
            {loading ? 'Creating...' : 'Register'}
          </Button>
        </div>
      </form>
      
      <p className="mt-6 text-center text-white text-opacity-90">
        Already have an account?{' '}
        <a href="/login" className="font-semibold text-white hover:underline">
          Sign in
        </a>
      </p>
    </Card>
  );
};

export default RegisterForm;