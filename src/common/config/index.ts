import development from './env.development'
import production from './env.production'

const options: Record<string, any> = {
  development,
  production,
}
const env = process.env.NODE_ENV || 'development'

const config = options[env]
export { config }
