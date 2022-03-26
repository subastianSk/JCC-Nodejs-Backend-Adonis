import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class MoviesController {
  public async index({ request, response }: HttpContextContract) {
    if (request.qs().name) {
      const movieName = await Database.from('movies').where('name', request.qs().name)
      response.ok({ message: 'success', data: movieName })
    } else {
      const movies = await Database.from('movies').select('*')
      response.ok({ message: 'success', data: movies })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const storeSchema = schema.create({
      title: schema.string({}, [
        rules.minLength(2)
      ]),
      resume: schema.string(),
      release_date: schema.date({
        format: 'yyyy-MM-dd',
      }),
      genre_id: schema.number()
    })
    await request.validate({ schema: storeSchema })
    try {
      await Database.table('movies').returning('id').insert({
        title: request.input('title'),
        resume: request.input('resume'),
        release_date: request.input('release_date'),
        genre_id: request.input('genre_id')
      })
      response.created({ message: 'Data stored' })
    } catch (err) {
      response.badRequest({ message: 'failed', error: err.message })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const movie = await Database.from('movies')
      .join('genres', 'movies.genre_id' , '=', 'genres.id')
      .select('movies.id','movies.title','movies.resume','movies.release_date', 'genres.name')
      .where('movies.id', params.id).firstOrFail()
      response.ok({
        message: 'success!', data: {
          id: movie.id,
          title: movie.title,
          resume: movie.resume,
          release_date: movie.release_date,
          genre: movie.name
        }
      })
    } catch (err) {
      response.notFound({ message: 'failed', error: err.message })
    }
  }

  public async update ({params,request,response}: HttpContextContract) {
    const updateSchema = schema.create({
      title: schema.string.optional({}, [
        rules.minLength(2)
      ]),
      resume: schema.string.optional(),
      release_date: schema.date.optional({
        format: 'yyyy-MM-dd',
      }),
      genre_id: schema.number.optional()
    })
    await request.validate({ schema: updateSchema })
    await Database.from('movies').where('id', params.id).update({
      title: request.input('title'),
        resume: request.input('resume'),
        release_date: request.input('release_date'),
        genre_id: request.input('genre_id')
    })
    response.ok({ message: 'data updated' })
  }

  public async destroy ({params,response}: HttpContextContract) {
    await Database.from('movies').where('id', params.id).delete()
    response.ok({ message: "Data deleted" })
  }
}