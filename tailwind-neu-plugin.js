const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, theme }) {
  // Helper function to generate neomorphic shadows
  const generateNeuShadows = (color, darkColor, intensity = 1) => {
    const distance = 8 * intensity;
    const blur = 16 * intensity;

    return {
      boxShadow: `${distance}px ${distance}px ${blur}px ${darkColor}, -${distance}px -${distance}px ${blur}px ${color}`
    };
  };

  const generateNeuInsetShadows = (color, darkColor, intensity = 1) => {
    const distance = 4 * intensity;
    const blur = 8 * intensity;

    return {
      boxShadow: `inset ${distance}px ${distance}px ${blur}px ${darkColor}, inset -${distance}px -${distance}px ${blur}px ${color}`
    };
  };

  // Light mode neomorphic utilities (for slate-200 elements on slate-100 background)
  const lightNeuUtilities = {
    '.neu-flat': generateNeuShadows('#ffffff', '#d1d5db', 1),
    '.neu-flat-sm': generateNeuShadows('#ffffff', '#d1d5db', 0.5),
    '.neu-flat-lg': generateNeuShadows('#ffffff', '#d1d5db', 1.5),

    '.neu-pressed': generateNeuInsetShadows('#ffffff', '#d1d5db', 1),
    '.neu-pressed-sm': generateNeuInsetShadows('#ffffff', '#d1d5db', 0.5),
    '.neu-pressed-lg': generateNeuInsetShadows('#ffffff', '#d1d5db', 1.5),
  };

  // Dark mode neomorphic utilities (for slate-800 elements on slate-700 background)
  const darkNeuUtilities = {
    '.dark .neu-flat-dark': generateNeuShadows('#334155', '#0f172a', 1),
    '.dark .neu-flat-dark-sm': generateNeuShadows('#334155', '#0f172a', 0.5),
    '.dark .neu-flat-dark-lg': generateNeuShadows('#334155', '#0f172a', 1.5),

    '.dark .neu-pressed-dark': generateNeuInsetShadows('#334155', '#0f172a', 1),
    '.dark .neu-pressed-dark-sm': generateNeuInsetShadows('#334155', '#0f172a', 0.5),
    '.dark .neu-pressed-dark-lg': generateNeuInsetShadows('#334155', '#0f172a', 1.5),
  };

  // Blue accent neomorphic utilities (for buttons)
  const blueNeuUtilities = {
    '.neu-blue': generateNeuShadows('#3b82f6', '#1e40af', 0.75),
    '.neu-blue-pressed': generateNeuInsetShadows('#3b82f6', '#1e40af', 0.75),
  };

  // Combine all utilities
  addUtilities({
    ...lightNeuUtilities,
    ...darkNeuUtilities,
    ...blueNeuUtilities,
  });
});
