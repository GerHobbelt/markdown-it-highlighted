import { strictEqual } from 'assert'
import md from '@gerhobbelt/markdown-it'
import highlighted from './'

const env = {}
const parser = md().use(highlighted)

parser.render('```js\nconsole.log(42)\n```', env)
strictEqual(env.highlighted, false)

parser.set({ highlight: () => 'highlighted code' })
parser.render('```js\nconsole.log(42)\n```', env)
strictEqual(env.highlighted, true)

parser.render('# Hello, world!', env)
strictEqual(env.highlighted, false)
