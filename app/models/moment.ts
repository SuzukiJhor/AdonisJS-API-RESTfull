import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import Coment from './coment'

export default class Moment extends BaseModel {
  @hasMany(() => Coment)
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare image: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
99
