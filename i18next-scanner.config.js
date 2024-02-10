module.exports = {
  input: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '!node_modules/**', '!build/**'],
  output: '',
  options: {
    debug: true,
    func: {
      list: ['t'], // function used to wrap the translations
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    lngs: ['en', 'ln'], // supported languages
    ns: ['translation'], // namespaces
    defaultLng: 'en',
    defaultNs: 'translation',
    keySeparator: false,
    defaultValue: function (lng, ns, key) {
      return key;
    },
    resource: {
      loadPath: './src/assets/locales/{{lng}}/{{ns}}.json',
      savePath: './src/assets/locales/{{lng}}/{{ns}}.json'
    }
  }
};
