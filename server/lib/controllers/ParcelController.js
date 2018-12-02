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
      name,
      digit,
      address,
      status: 'In transit',
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
   * Returns a list of Parcel Options
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

  /**
   * @method fetchParcelById
   * @memberof ParcelController
   * @param {object} req
   * @param {object} res
   * @static
   *  @returns {(function|object)} Function next() or JSON object
   */
  static fetchParcelByID(req, res) {
    const parcelId = parseInt(req.params.parcelId);
    const result = parcels.find(c => c.id === parcelId);

    if (!result) {
      res.status(404).send({
        error: 'Could not fetch parcel data by given ID',
      });
    } else {
      res.send({
        status: 200,
        message: 'Fetched data by ID successfully',
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
    const parcelId = parseInt(req.params.parcelId);
    const result = parcels.find(r => r.id === parcelId);

    if (!result) res.status(404).send({ error: 'The given parcel ID is invalid' });

    result.status = req.body.status;
    res.send({
      status: 200,
      message: 'Successfully updated parcel details',
      data: result,
    });
  }
}

export default ParcelController;
