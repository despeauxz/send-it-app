import parcels from '../seeders/parcel';

/**
 * @exports
 * @class ParcelController
 */
class ParcelController {
  /**
   * Returns a list of Meal Options
   * @method getParcels
   * @memberof ParcelController
   * @param {object} req
   * @param {object} res
   * @returns {(function|object)} Function next() or JSON object
   */
  static async getParcels(req, res) {
    return res.json({
      status: 200,
      data: parcels,
    });
  }
}

export default ParcelController;
