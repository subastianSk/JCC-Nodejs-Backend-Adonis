import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import FieldValidator from 'App/Validators/FieldValidator'
import { schema, rules } from "@ioc:Adonis/Core/Validator";


export default class FieldsController {
  public async index({ params, request, response }: HttpContextContract) {
    if (request.qs().name) {
      const fieldsName = await Database.from('fields').where('name', request.qs().name).andWhere('venue_id', params.venue_id)
      response.ok({ message: 'success', data: fieldsName })
    } else {
      const fields = await Database.from('fields').where('venue_id', params.venue_id)
      response.ok({ message: 'success', data: fields })
    }
  }

  public async store({ params, request, response }: HttpContextContract) {
    try {
      await request.validate(FieldValidator)
      await Database.table('fields').returning('id').insert({
        name: request.input('name'),
        type: request.input('type'),
        venue_id: params.venue_id
      })
      response.created({ message: 'Data stored' })
    } catch (err) {
      response.badRequest({ message: 'failed', error: err.message })
    }
  }
  
  public async show({ params, response }: HttpContextContract) {
    try {
      const fields = await Database.from('fields').where('id', params.id).firstOrFail()
      response.ok({ message: 'success!', data: fields })
    } catch (err) {
      response.notFound({ message: 'failed', error: err.message })
    }
  }
  
  public async update({ params, request, response }: HttpContextContract) {
    const updateSchema = schema.create({
      name: schema.string.optional({}, [
        rules.minLength(4)
      ]),
      type: schema.enum.optional(
        ['futsal','mini soccer','basketball']
      ),
    })
    try {
      await request.validate({ schema: updateSchema})
      await Database.from('fields').where('id', params.id).update({
        name: request.input('name'),
        type: request.input('type'),
        venue_id: request.input('venue_id')
      })
      response.ok({ message: 'data updated' })
    } catch (err) {
      response.badRequest({ message: err.message })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    await Database.from('fields').where('id', params.id).delete()
    response.ok({ message: "Data deleted" })
  }
}