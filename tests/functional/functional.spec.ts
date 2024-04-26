import { test } from '@japa/runner'

test.group('Functional', () => {
  test('example test', async ({ assert, client }) => {
    const response = await client.get('/moments')

    console.log(response.body)
  })
})
