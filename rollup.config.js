import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
];

const plugins = [
    typescript({
        typescript: require('typescript')
    })
];

export default [
    {
        input: 'index.ts',
        output: {
            file: pkg.main,
            format: 'umd',
            name: 'papbTestFrontendLib'
        },
        external,
        plugins
    },
    {
        input: 'index.ts',
        output: {
            file: pkg.module,
            format: 'es'
        },
        external,
        plugins
    }
]