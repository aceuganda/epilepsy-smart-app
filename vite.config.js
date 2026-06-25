import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const craSvgComponentImports = () => ({
  name: 'cra-svg-component-imports',
  enforce: 'pre',
  transform(code, id) {
    if (!/\.[jt]sx?$/.test(id) || !code.includes('ReactComponent as')) {
      return null;
    }

    return code.replace(
      /import\s+\{\s*ReactComponent\s+as\s+([A-Za-z_$][\w$]*)\s*\}\s+from\s+(['"])([^'"]+\.svg)\2\s*;?/g,
      "import $1 from '$3?react';"
    );
  },
});

export default defineConfig({
  base: './',
  plugins: [craSvgComponentImports(), svgr(), react()],
  assetsInclude: ['**/*.apk'],
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
});
