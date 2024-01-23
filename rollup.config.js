import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'garagesale/src/backend/api/server.js', // Adjust if your entry file is different
  output: {
    file: 'bundle.js', // Output bundle file
    format: 'cjs' // Format of the output bundle (iife for browser)
  },
  plugins: [
    resolve(), // Helps Rollup understand node_modules imports
    commonjs(), // Convert CommonJS modules to ES6
    json() // Handle JSON files
  ]
};
