//babel.config.js
module.exports = {
  env: {
    test: {
      presets: [[
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ]],
      plugins: [
        ['@babel/plugin-transform-react-jsx', { pragma: 'h', pragmaFrag: 'Fragment' }],
        ['babel-plugin-jsx-pragmatic',
          {
            module: 'preact',
            import: 'h',
            export: 'h'
          }
        ],
        ['babel-plugin-jsx-pragmatic',
          {
            module: 'preact',
            import: 'Fragment',
            export: 'Fragment'
          },
          "Handle fragments"
        ]
      ]
    }
  }
};
