/* eslint-disable indent */
import moment from 'moment';
import random from 'random-string';
import parcels from '../seeders/parcel';

const unitPrice = 1000;

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
      slug: random({ length: 12 }),
      title,
      weight,
      from,
      name,
      digit,
      address,
      status: 'In transit',
      price: parseInt(weight) * unitPrice,
      createdAt: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
      deliveredAt: moment().add(5, 'days').format('dddd, MMMM Do YYYY, h:mm:ss a'),
    };

    parcels.push(parcel);
		res.status(201).json({
			status: 201,
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
      message: 'Fetched parcels successfully',
      data: parcels,
    });
  }

  /**
   * @method fetchParcelById
   * @memberof ParcelController
   * @param {object} req
   * @param {object} res
   * @static
   * @memberof ParcelController
   */
  static fetchParcelBySlug(req, res) {
    const result = parcels.find(c => c.slug === req.params.parcelSlug);

    if (!result) {
      res.status(404).send({
        error: 'Could not fetch parcel data by given Slug',
      });
    } else {
      res.send({
        status: 200,
        message: 'Fetched data by slug successfully',
        data: result,
      });
    }
  }

    /**
   * @method updateParcelStatus
   * @static
   * @param {*} req
   * @param {*} res
   * @memberof ParcelController
   */
  static updateParcelStatus(req, res) {
    const result = parcels.find(r => r.slug === req.params.parcelSlug);

    if (!result) res.status(404).send({ error: 'The given parcel slug is invalid' });

    result.status = req.body.status;
    res.send({
      status: 200,
      message: 'Successfully updated parcel details',
      data: result,
    });
  }
}

export default ParcelController;
