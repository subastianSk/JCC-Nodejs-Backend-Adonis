import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import VenueValidator from 'App/Validators/VenueValidator'
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class VenuesController {
  public async index({ request, response }: HttpContextContract) {
    if (request.qs().name) {
      const venuesName = await Database.from('venues').where('name', request.qs().name)
      response.ok({ message: 'success', data: venuesName })
    } else {
      const venues = await Database.from('venues').select('*')
      response.ok({ message: 'success', data: venues })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      await request.validate(VenueValidator)
      await Database.table('venues').returning('id').insert({
        name: request.input('name'),
        address: request.input('address'),
        phone: request.input('phone'),
      })
      response.created({ message: 'Data stored' })
    } catch (err) {
      response.badRequest({ message: 'failed', error: err.messages })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const venues = await Database.from('venues').where('id', params.id).firstOrFail()
      response.ok({ message: 'success!', data: venues })
    } catch (err) {
      response.notFound({ message: 'failed', error: err.message })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const updateSchema = schema.create({
      name: schema.string.optional({}, [
        rules.minLength(4)
      ]),
      address: schema.string.optional(),
      phone: schema.string.optional({}, [
        rules.mobile({ strict: true })
      ])
    })
    await request.validate({schema: updateSchema})
    await Database.from('venues').where('id', params.id).update({
      name: request.input('name'),
      address: request.input('address'),
      phone: request.input('phone')
    })
    response.ok({ message: 'data updated' })
  }

  public async destroy({ params, response }: HttpContextContract) {
    await Database.from('venues').where('id', params.id).delete()
    response.ok({ message: "Data deleted" })
  }
}