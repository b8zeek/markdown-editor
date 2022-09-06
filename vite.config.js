import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

const folders = ['', 'assets', 'components', 'graphql', 'guards', 'hooks', 'models', 'pages', 'services', 'utils']

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: folders.map(folder => ({ find: `@${folder}`, replacement: path.resolve(__dirname, `src/${folder}`) }))
    },
    plugins: [react()]
})
