const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const threadLoader = require('thread-loader')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const outputFilename = isProd ? 'js/[name].[contenthash:8].js' : 'js/[name].js'
threadLoader.warmup({}, ['babel-loader'])

module.exports = {
  context: process.cwd(),

  entry: resolve(process.cwd(), 'src/main.ts'),

  output: {
    path: resolve(process.cwd(), 'dist'),
    filename: outputFilename,
    chunkFilename: outputFilename,
    clean: true,
  },

  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src'),
    },
    extensions: ['.tsx', '.ts', '.mjs', '.js', '.jsx', '.vue'],
  },

  watchOptions: {
    // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#installation
    ignored: /node_modules/,
  },

  module: {
    noParse: /^(vue|vue-router|pinia)$/,
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsxSuffixTo: [/\.vue$/],
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.(png|jpe?g|gif|webp|avif)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        type: 'asset',
        generator: {
          filename: 'media/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        type: 'asset',
        generator: {
          filename: 'font/[name].[hash:8][ext]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(process.cwd(), 'public/index.html'),
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: 'false',
      __VUE_PROD_DEVTOOLS__: 'false',
    }),
    new CaseSensitivePathsPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: resolve('public'),
          toType: 'dir',
          globOptions: {
            ignore: ['.DS_Store', '**/index.html'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new ESLintPlugin({
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue'],
      threads: true,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        extensions: {
          vue: {
            enabled: true,
            compiler: '@vue/compiler-sfc',
          },
        },
      },
    }),
    new BundleAnalyzerPlugin(),
    // new BundleStatsWebpackPlugin({
    //   outDir: '../webpack-config',
    // }),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            arrows: false,
            collapse_vars: false,
            comparisons: false,
            computed_props: false,
            hoist_funs: false,
            hoist_props: false,
            hoist_vars: false,
            inline: false,
            loops: false,
            negate_iife: false,
            properties: false,
            reduce_funcs: false,
            reduce_vars: false,
            switches: false,
            toplevel: false,
            typeofs: false,
            booleans: true,
            if_return: true,
            sequences: true,
            unused: true,
            conditionals: true,
            dead_code: true,
            evaluate: true,
          },
        },
      }),
    ],
  },
}
