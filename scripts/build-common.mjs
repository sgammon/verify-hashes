/*
 * Copyright (c) 2024 Elide Technologies, Inc.
 *
 * Licensed under the MIT license (the "License"); you may not use this file except in compliance
 *  with the License. You may obtain a copy of the License at
 *
 *     https://opensource.org/license/mit/
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 *  an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 *  License for the specific language governing permissions and limitations under the License.
 */

import { replace } from 'esbuild-plugin-replace'
import packageJson from '../package.json'

export const target = ['es2022', 'node20']

export const baseReplacements = {
  __TOOL__: packageJson.tool,
  __VERSION__: packageJson.version
}

export const common = {
  bundle: true,
  drop: ['console', 'debugger'],
  legalComments: 'external',
  metafile: true,
  minify: true,
  platform: 'node',
  sourcemap: 'external',
  sourceRoot: 'https://raw.githubusercontent.com/sgammon/hashlock/main/',
  treeShaking: true,
  target,
  plugins: [replace(baseReplacements)]
}

export default common
