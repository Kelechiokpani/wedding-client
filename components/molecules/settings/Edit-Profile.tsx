'use client';

import { useState } from 'react';
import Image from 'next/image';
import image1 from '@/public/assets/images/image-1.png'
import image2 from '@/public/assets/images/image-2.png'

interface FormData {
  fullName: string;
  email: string;
  address: string;
  businessCity: string;
  state: string;
  country: string;
  phoneNumber: string;
  businessName: string;
  currency: string;
  employees: string;
  timeZone: string;
  language: string;
  location: string;
}

const profile = { 
    fullName: '',
    email: '',
    address: '',
    businessCity: '',
    state: '',
    country: '',
    phoneNumber: '',
    businessName: '',
    currency: '',
    employees: '',
    timeZone: '',
    language: '',
    location: ''}

const EditProfile = () => {
  const [formData] = useState<FormData>(profile);

//   handle change
  const handleChange = () => {
  };

  return (
    <div className="max-w-4xl mx-auto p-2">
      <div className="text-center mb-6">
        <div className="relative inline-block">
          <Image
            src={image1}
            alt="Profile Picture"
            width={90}
            height={90}
            className="rounded-full"
          />
          <button className="absolute bottom-0 right-0 bg-purple-500 p-1 rounded-full">
            ✏️
          </button>
        </div>
      </div>
      <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
       <div>
       <label className='text-text text-sm' >FullName</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Yetunde Yusuf"
        />
       </div>
       <div>
        <label className='text-text text-sm'>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="johndoe@info.com"
        />
       </div>
       <div>
       <label className='text-text text-sm'>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Bode Thomas Surulere"
        />
       </div>
      <div>
      <label className='text-text text-sm'>Business City</label>
        <input
          type="text"
          name="businessCity"
          value={formData.businessCity}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Ikeja"
        />
      </div>
        <div>
            <label className='text-text text-sm'>State</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="Lagos">Lagos</option>
        </select>
        </div>
       <div>
        <label className='text-text text-sm'>Country</label>
       <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="Nigeria">Nigeria</option>
        </select>
       </div>
       <div>
        <label className='text-text text-sm'>Phone number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="+234 123-123-123"
        />
       </div>
        
      </div>
      <div className="text-center mb-6">
        <div className="relative inline-block">
          <Image
            src={image2}
            alt="Business Logo"
            width={90}
            height={90}
            className="rounded-full"
          />
          <button className="absolute bottom-0 right-0 bg-purple-500 p-1 rounded-full">
            ✏️
          </button>
        </div>
      </div>
      <h2 className="text-lg font-semibold mb-4">Business Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
       <div>
        <label className='text-text text-sm'>Business Name</label>
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Business Name"
        />
       </div>

       <div>
        <label className='text-text text-sm'>Currency</label>
        <input
          type="text"
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Currency"
        />
       </div>
        
       <div>
        <label className='text-text text-sm'>Employees</label>
        <input
          type="text"
          name="employees"
          value={formData.employees}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="25"
        />
       </div>
       <div>
        <label className='text-text text-sm'>Time Zone</label>
        <select
          name="timeZone"
          value={formData.timeZone}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Time Zone</option>
        </select>
       </div>
        <div>
            <label className='text-text text-sm'>Language</label>
            <select
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Option</option>
        </select>
        </div>

        <div>
            <label className='text-text text-sm'>Location</label>
            <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Location"
        />
        </div>
       
      </div>
      <div className="flex text-center md:justify-end">
        <button className="bg-purple-600 text-white py-2 px-6 rounded w-full md:w-auto">Save</button>
      </div>
    </div>
  );
};

export default EditProfile;
