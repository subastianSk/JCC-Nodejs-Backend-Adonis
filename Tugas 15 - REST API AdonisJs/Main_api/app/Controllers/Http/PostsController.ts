import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import Database from '@ioc:Adonis/Lucid/Database'
import CreateBookingValidator from 'App/Validators/CreateBookingValidator'

//Models
import Field from 'App/Models/Field';

export default class PostsController {
  public async index ({request, response}: HttpContextContract) {
    if(request.qs().name){
      let name = request.qs().name
      //let fieldsFiltered = await Database.from('fields').where('name', name).select('id', 'name', 'type', 'venue_id')
      let fieldsFiltered = await Field.findBy("name", name)
      return response.status(200).json({message: 'success get contacts', data: fieldsFiltered })
    }
    //let fields = await Database.from('fields').select('*')
    let fields = await Field.all()
    return response.status(200).json({message: 'success get contacts', data: fields })
  }

  public async store ({request, response, params}: HttpContextContract) {
    try {
        await request.validate(CreateBookingValidator) 
        // let newFieldId = await Database.table('fields').returning('id').insert({
        //     name: request.input('name'),
        //     type: request.input('type'),
        //     venue_id: params.venue_id
        // })
        // response.created({message: 'created', newId: newFieldId})

        //Lucid Orm
        let newField = new Field();
        newField.name = request.input('name')
        newField.type =  request.input('type')
        newField.venue_id = params.venue_id

        await newField.save()
        response.created({message: 'created'})
    }catch (error) {
        response.unprocessableEntity({error: error.messages})
    }
  }

  public async show ({params, response}: HttpContextContract) {
      //let field = await Database.from('fields').where('id', params.id).select('id', 'name', 'type', 'venue_id').firstOrFail()
      let field = await Field.find(params.id)
      return response.status(200).json({message: 'success get fields with id', data: field})
  }

  public async update ({request, response, params}: HttpContextContract) {
      let id = params.id
      // await Database.from('fields').where('id', id).update({
      //     name: request.input('name'),
      //     type: request.input('type'),
      //     venue_id: params.venue_id
      // })

      //Model Orm
      let newField = await Field.findOrFail(id);
      newField.name = request.input('name')
      newField.type =  request.input('type')
      newField.venue_id = params.venue_id

      newField.save()
      return response.status(200).json({message: 'updated'})
  }

  public async destroy ({response, params}: HttpContextContract) {
      let id = params.id
      //await Database.from('fields').where('id', id).delete()
      let field = await Field.findOrFail(id)
      await field.delete()
      return response.ok({message: 'deleted'})
  }
}