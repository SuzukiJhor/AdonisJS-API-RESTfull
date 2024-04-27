import { test } from '@japa/runner'

test('example test', async ({ client }) => {
  console.log(client.get)
})
