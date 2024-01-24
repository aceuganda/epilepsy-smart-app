module.exports = {
  input: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '!node_modules/**', '!build/**'],
  output: './public/locales/$LOCALE/$NAMESPACE.json',
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
    defaultValue: function (lng, ns, key) {
      return key;
    },
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: 'public/locales/{{lng}}/{{ns}}.json'
    }
  }
};
