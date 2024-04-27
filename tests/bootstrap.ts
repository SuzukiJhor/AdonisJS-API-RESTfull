import { assert } from '@japa/assert'
import { apiClient } from '@japa/api-client'
import app from '@adonisjs/core/services/app'
import type { Config } from '@japa/runner/types'
import testUtils from '@adonisjs/core/services/test_utils'

export const plugins: Config['plugins'] = [assert(), apiClient()]

export const reporters: Config['reporters'] = []

export const runnerHooks: Required<Pick<Config, 'setup' | 'teardown'>> = {
  setup: [() => TestUtils.ace().loadCommands()],
  teardown: [],
}

export const configureSuite: Config['configureSuite'] = (suite) => {
  if (suite.name === 'functional') {
    suite.setup(() => TestUtils.httpServer().start())
  }
}
