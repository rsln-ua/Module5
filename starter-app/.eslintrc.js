module.exports = {
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
};
