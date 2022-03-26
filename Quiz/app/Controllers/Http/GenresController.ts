import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class GenresController {
  public async index({ request, response }: HttpContextContract) {
    if (request.qs().name) {
      const genreName = await Database.from('genres').where('name', request.qs().name)
      response.ok({ message: 'success', data: genreName })
    } else {
      const genres = await Database.from('genres').select('*')
      response.ok({ message: 'success', data: genres })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const storeSchema = schema.create({
      name: schema.string({}, [
        rules.unique({ table: 'genres', column: 'name' }),
        rules.minLength(4)
      ]),
    })
    try {
      await request.validate({ schema: storeSchema })
      await Database.table('genres').returning('id').insert({
        name: request.input('name'),
      })
      response.created({ message: 'Data stored' })
    } catch (err) {
      response.badRequest({ message: 'failed', error: err.messages })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const genre = await Database.from('genres').where('id', params.id).firstOrFail()
      const movies = await Database.from('genres')
      .join('movies', 'genres.id', '=', 'movies.genre_id')
      .select('movies.id','movies.title','movies.resume','movies.release_date')
      .where('genres.id', params.id)
      response.ok({ message: 'success!', data: {
        id: genre.id,
        name: genre.name,
        movies: movies
      } })
    } catch (err) {
      response.notFound({ message: 'failed', error: err.message })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const updateSchema = schema.create({
      name: schema.string({}, [
        rules.unique({ table: 'genres', column: 'name' }),
        rules.minLength(4)
      ]),
    })
    await request.validate({ schema: updateSchema })
    await Database.from('genres').where('id', params.id).update({
      name: request.input('name'),
    })
    response.ok({ message: 'data updated' })
  }

  public async destroy({ params, response }: HttpContextContract) {
    await Database.from('genres').where('id', params.id).delete()
    response.ok({ message: "Data deleted" })
  }
}