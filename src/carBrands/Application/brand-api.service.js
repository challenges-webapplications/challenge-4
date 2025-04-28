import axios from 'axios'

export class BrandApiService {
async getBrands() {
    const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json')
    return response.data.Results;
}}
