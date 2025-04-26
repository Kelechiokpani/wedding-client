import { useState } from "react";
import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";

const Security = () => {
  interface PasswordVisibility {
    current: boolean;
    new: boolean;
    confirm: boolean;
  }

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState<PasswordVisibility>({
    current: false,
    new: false,
    confirm: false,
  });
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const togglePasswordVisibility = (field: keyof PasswordVisibility): void => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const validatePassword = (password: string) => {
    return {
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      hasMinLength: password.length >= 8,
    };
  };

  const passwordStrength = validatePassword(newPassword);
  const isPasswordStrong = Object.values(passwordStrength).every(Boolean);
  const isConfirmMatch = confirmPassword === newPassword && confirmPassword !== "";

  const clearFields = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="mx-auto p-6 bg-white rounded-md">
      {/* Two-Factor Authentication Toggle */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Two-factor Authentication</h2>
          <p className="text-gray-500 text-sm">Enable two-factor authentication</p>
        </div>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="hidden"
            checked={twoFactorEnabled}
            onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
          />
          <div
            className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 duration-300 ${
              twoFactorEnabled ? "bg-purple-600" : ""
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ${
                twoFactorEnabled ? "translate-x-5" : ""
              }`}
            />
          </div>
        </label>
      </div>

      {/* Change Password Section */}
      <h3 className="mt-6 text-lg font-semibold">Change Password</h3>
      <p className="text-gray-500 text-sm">Update password for enhanced account security</p>

      {/* Current Password */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Current Password</label>
        <div className="relative">
          <input
            type={showPassword.current ? "text" : "password"}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={() => togglePasswordVisibility("current")}
          >
            {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* New Password */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">New Password</label>
        <div className="relative">
          <input
            type={showPassword.new ? "text" : "password"}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={() => togglePasswordVisibility("new")}
          >
            {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Password Strength Indicator */}
        <div className="mt-2 flex space-x-2">
          {Object.entries(passwordStrength).map(([key, value]) => (
            <div key={key} className={`h-1 w-1/4 ${value ? "bg-green-500" : newPassword ? "bg-red-500" : "bg-gray-300"}`} />
          ))}
        </div>

        {/* Password Validation Messages */}
        <div className="mt-2 text-sm text-gray-600">
          <p className="mb-2">Password must contain:</p>
          {Object.entries(passwordStrength).map(([key, value]) => (
            <p key={key} className="flex items-center space-x-2">
              {value ? <CheckCircle className="text-green-500" size={16} /> : <XCircle className="text-red-500" size={16} />}
              <span>
                {key === "hasUppercase" && "At least 1 uppercase letter"}
                {key === "hasNumber" && "At least 1 number"}
                {key === "hasMinLength" && "At least 8 characters"}
                {key === "hasSpecialChar" && "At least 1 special character"}
              </span>
            </p>
          ))}
        </div>
      </div>

      {/* Confirm Password */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
        <div className="relative">
          <input
            type={showPassword.confirm ? "text" : "password"}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={() => togglePasswordVisibility("confirm")}
          >
            {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {!isConfirmMatch && confirmPassword && (
          <p className="mt-2 text-red-500 text-sm">Passwords do not match</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4 mt-6">
        <button onClick={clearFields} className="px-4 py-2 text-gray-600 border rounded-md">
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded-md disabled:opacity-50"
          disabled={!isPasswordStrong || !isConfirmMatch}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Security;
