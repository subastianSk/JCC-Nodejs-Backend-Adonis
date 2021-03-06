import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//NA.76cnEfDycVde_rpf4gtjiJE-YMtHvjiDCMd9bRBALz4nhh_C1VajmNnkax0g
export default class CreateFieldValidator {
  constructor (protected ctx: HttpContextContract) {
  }

	/*
	 * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
	 *
	 * For example:
	 * 1. The username must be of data type string. But then also, it should
	 *    not contain special characters or numbers.
	 *    ```
	 *     schema.string({}, [ rules.alpha() ])
	 *    ```
	 *
	 * 2. The email must be of data type string, formatted as a valid
	 *    email. But also, not used by any other user.
	 *    ```
	 *     schema.string({}, [
	 *       rules.email(),
	 *       rules.unique({ table: 'users', column: 'email' }),
	 *     ])
	 *    ```
	 */
	 
	public schema = schema.create({
		name: schema.string({},[
			rules.minLength(4)
		])
		// type: schema.enum(
		// 	['futsal', 'mini soccer', 'basketball'] as const
		// )
	})

	/**
	 * Custom messages for validation failures. You can make use of dot notation `(.)`
	 * for targeting nested fields and array expressions `(*)` for targeting all
	 * children of an array. For example:
	 *
	 * {
	 *   'profile.username.required': 'Username is required',
	 *   'scores.*.number': 'Define scores as valid numbers'
	 * }
	 *
	 */
  	// public messages = {	  
	// 	'required': 'the {{field}} is required to create new venues',
	// 	'nama.alpha': 'the {{field}} must be characters without number and symbols',
	// 	'nama_venue.alpha': 'the {{field}} must be characters without number and symbols',
	// 	'tanggal_booking.after': 'booking is invalid, you must booking one day before!'
	// }
	public messages = {	  
		'required': 'the {{field}} is required to create new venues'
	}
}