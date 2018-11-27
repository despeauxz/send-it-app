/* eslint-disable indent */
import moment from 'moment';
import parcels from '../seeders/parcel';

/**
 * @exports
 * @class ParcelController
 */
class ParcelController {
  /**
   * Create a new parcel
   * @method createParcel
   * @memberof ParcelController
   * @param {object} req
   * @param {object} res
   * @returns {(function|object)} Function next() or JSON object
   */
  static createParcel(req, res) {
    const {
      title,
      weight,
      from,
      name,
      digit,
      address,
    } = req.body;

    const parcel = {
      id: parcels.length + 1,
      title,
      weight,
      from,
      receiver: {
        name,
        digit,
        address,
      },
      status: 'In transit',
      createdAt: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
      deliveredAt: moment().add(5, 'days').format('dddd, MMMM Do YYYY, h:mm:ss a'),
    }

    parcels.push(parcel);
		res.json({
			status: 200,
			message: 'Parcel successfully created',
			data: parcel,
		});
  }


  /**
   * Returns a list of Meal Options
   * @method getParcels
   * @memberof ParcelController
   * @param {object} req
   * @param {object} res
   * @returns {(function|object)} Function next() or JSON object
   */
  static getParcels(req, res) {
    return res.json({
      status: 200,
      data: parcels,
    });
  }
}

export default ParcelController;
