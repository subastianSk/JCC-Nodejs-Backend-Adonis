import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateBookingValidator from 'App/Validators/CreateBookingValidator'

export default class BookingsController {
    public async store({ request, response }: HttpContextContract) {
        
        try{
            await request.validate(CreateBookingValidator)
        } catch (error){
            response.badRequest(error.messages)
        }
    }
}